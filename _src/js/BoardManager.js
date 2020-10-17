;(function() {

    const BoardManager = function(ctx) {
        const self = this;

        self.ctx = ctx;

        self.GRID_SIZE = 50;
        self.LINE_NUMBER = 9;
        self.R = self.GRID_SIZE * 0.3;

        self.color = '#ffffff';
        self.isWhite = 1;

        self.stonePoses = [];

        self.init();
    };

    BoardManager.prototype = {

        /**
         *
         */
        init: function() {
            const self = this;

            // x=0, y=0で先の太さが半分し描写されないため、基準点をずらす
            self.ctx.translate(1, 1);

            self.drawBoard();

        },

        drawBoard: function() {
            const self = this;

            const fieldSize = self.GRID_SIZE * (self.LINE_NUMBER - 1);

            let x = 0;
            let y = 0;

            self.drawRect(x, y, fieldSize, fieldSize, '#008833');

            for (let i = 1; i <= self.LINE_NUMBER; i++) {
                self.drawLine(x, 0, x, fieldSize);
                x += self.GRID_SIZE;
            }
            for (let i = 1; i <= self.LINE_NUMBER; i++) {
                self.drawLine(0, y, fieldSize, y);
                y += self.GRID_SIZE;
            }

        },

        drawRect: function(x1, y1, x2, y2, color) {
            const self = this;

            self.ctx.fillStyle = typeof color !== 'undefined' ? color : '#000000';
            self.ctx.fillRect(x1, y1, x2, y2);

        },

        drawLine: function(x1, y1, x2, y2, color, width) {
            const self = this;

            self.ctx.strokeStyle = typeof color !== 'undefined' ? color : '#000000';
            self.ctx.lineWidth = typeof width !== 'undefined' ? width : 1;

            self.ctx.beginPath();
            self.ctx.moveTo(x1, y1);
            self.ctx.lineTo(x2, y2);
            self.ctx.closePath();

            self.ctx.stroke();

        },

        startGame: function() {
            const self = this;

            const center = self.GRID_SIZE * ((self.LINE_NUMBER - 1) / 2);
            const diff = (self.GRID_SIZE / 2);
            let dir1 = -1;
            let dir2 = -1;
            let posX, posY;
            let isWhite = 1;
            let data = {
                r: self.R
            };

            setFirstStone('#ffffff');
            dir1 *= -1;
            isWhite *= -1;
            setFirstStone('#000000');

            function setFirstStone(color) {
                for (let i = 0; i < 2; i++) {
                    posX = center + dir1 * diff;
                    posY = center + dir2 * diff;

                    data.x = posX;
                    data.y = posY;
                    data.color = color;

                    let stone = new window.myOthello.Stone(self.ctx, data);
                    stone.drawArc(data);

                    self.stonePoses.push({
                        instance: stone,
                        isWhite: isWhite,
                        pos: [Math.ceil(posX / self.GRID_SIZE), Math.ceil(posY / self.GRID_SIZE)]
                    });

                    dir1 *= -1;
                    dir2 *= -1;

                }
            }

        },

        putStone: function(clickedX, clickedY) {
            const self = this;

            let nthGridX = Math.ceil(clickedX / self.GRID_SIZE);
            let nthGridY = Math.ceil(clickedY / self.GRID_SIZE);

            if (self.checkVacancy(nthGridX, nthGridY) > 0) {
               return;
            }
            if (!self.checkNeighbor(nthGridX, nthGridY)) {
               return;
            }
            if (!self.checkAvailability(nthGridX, nthGridY)) {
               // return;
            }

            self.isWhite *= -1;
            color = self.isWhite > 0 ? '#ffffff' : '#000000';

            let data = {
                x: (self.GRID_SIZE * nthGridX) - (self.GRID_SIZE / 2),
                y: (self.GRID_SIZE * nthGridY) - (self.GRID_SIZE / 2),
                r: self.R,
                color: color
            };

            let stone = new window.myOthello.Stone(self.ctx, data);
            stone.drawArc(data);

            self.stonePoses.push({
                instance: stone,
                isWhite: self.isWhite,
                pos: [nthGridX, nthGridY]
            });

        },

        checkVacancy: function(nthX, nthY) {
            const self = this;

            let result = self.stonePoses.filter(function(val) {
                return val.pos[0] === nthX && val.pos[1] === nthY;
            });

            return result.length;

        },

        checkNeighbor: function(nthX, nthY) {
            const self = this;

            let hasNeighbor = false;

            let neighbors = [
                [nthX, nthY + 1],       // 上
                [nthX + 1, nthY + 1],   // 右上
                [nthX + 1, nthY],       // 右
                [nthX + 1, nthY - 1],   // 右下
                [nthX, nthY - 1],       // 下
                [nthX - 1, nthY - 1],   // 左下
                [nthX - 1, nthY],       // 左
                [nthX - 1, nthY + 1]    // 左上
            ];

            for (let i = 0, length = self.stonePoses.length; i < length; i++) {
                for (let j = 0, len = neighbors.length; j < len; j++) {
                    if (self.stonePoses[i].pos[0] === neighbors[j][0] && self.stonePoses[i].pos[1] === neighbors[j][1]) {
                        hasNeighbor = true;
                        break;
                    }
                }
                if (hasNeighbor) {
                    break;
                }
            }

            return hasNeighbor;
        },

        checkAvailability: function(clickedX, clickedY) {
            const self = this;

            const MAX_COUNT = 7;
            let count = 0;
            let tmpFlag = false;
            let isAvailable = false;

            // 置ける条件
            // 左右、上下、斜め45度上に同じ色の石がある かつ その同じ色の石と自身の間に隙間なく別の色の石がある

            // 上    [nthX, nthY + 1],
            // 右上   [nthX + 1, nthY + 1],
            // 右    [nthX + 1, nthY],
            // 右下   [nthX + 1, nthY - 1],
            // 下    [nthX, nthY - 1],
            // 左下   [nthX - 1, nthY - 1],
            // 左    [nthX - 1, nthY],
            // 左上   [nthX - 1, nthY + 1]
            // でそれぞれチェックする？

            checkTop();

            // 上チェック
            function checkTop() {

                count = 0;
                let tmpFlag = false;

                for (let i = 0, length = self.stonePoses.length; i < length; i++) {
                    for (let j = 0; j < MAX_COUNT; j++) {

                        if (clickedY - j < 0) {
                            break;
                        }

                        // 自身と同列かつ同行に石があり、かつ同じ色の場合（自身に近い位置から判定）
                        if (self.stonePoses[i].pos[0] === clickedX && self.stonePoses[i].pos[1] === clickedY - j && self.stonePoses[i].isWhite === self.isWhite * -1) {

                            console.log(self.stonePoses[i]);

                            // 自身と同列かつ同行にある同じ色の石から、かつ同じ色の場合（自身に近い位置から判定）
                            for (let k = 1; k < j; k++) {
                                if (self.stonePoses[i].pos[1] === clickedY - k && self.stonePoses[i].isWhite === self.isWhite) {
                                    console.log(self.stonePoses[i]);
                                    tmpFlag = true;
                                    isAvailable = true;
                                    break;
                                }
                            }


                            // console.log(self.stonePoses[i]);
                            // tmpFlag = true;
                            // isAvailable = true;
                            // break;
                        }

                    }
                    if (tmpFlag) {
                        break;
                    }
                }


            }








        }

    };

    if (typeof window.myOthello === 'undefined') {
        window.myOthello = {};
    }
    window.myOthello.BoardManager = BoardManager;

}());