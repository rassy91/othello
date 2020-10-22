;(function() {

    const BoardManager = function(ctx) {
        const self = this;

        self.ctx = ctx;
        self.cautionText = document.getElementById('caution');


        self.GRID_SIZE = 50;
        self.LINE_NUMBER = 9;
        self.R = self.GRID_SIZE * 0.3;

        self.color = '#ffffff';
        self.isWhite = 1;

        self.board = [];

        self.turnStones = [];

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

            for (let i = 1; i < self.LINE_NUMBER; i++) {
                let row = [];

                for (let j = 1; j < self.LINE_NUMBER; j++) {
                    row.push({});
                }

                self.board.push(row);
            }

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

            setFirstStone();
            dir1 *= -1;
            isWhite *= -1;
            setFirstStone();

            function setFirstStone(color) {
                for (let i = 0; i < 2; i++) {
                    let data = {
                        r: self.R
                    };

                    posX = center + dir1 * diff;
                    posY = center + dir2 * diff;

                    data.x = posX;
                    data.y = posY;
                    data.isWhite = isWhite;

                    let stone = new window.myOthello.Stone(self.ctx, data);
                    stone.drawArc(data);

                    let obj = self.board[Math.floor(posY / self.GRID_SIZE)][Math.floor(posX / self.GRID_SIZE)];
                    obj.instance = stone;
                    obj.isWhite = isWhite;

                    dir1 *= -1;
                    dir2 *= -1;

                }
            }
        },

        validate: function() {
            const self = this;

            if (!self.cautionText.classList.contains('isVisible')) {
                self.cautionText.classList.add('isVisible');
                setTimeout(function() {
                    self.cautionText.classList.remove('isVisible');
                }, 1000)
            }
        },

        putStone: function(clickedX, clickedY) {
            const self = this;

            let nthGridX = Math.floor(clickedX / self.GRID_SIZE);
            let nthGridY = Math.floor(clickedY / self.GRID_SIZE);

            if (!self.checkVacancy(nthGridX, nthGridY)) {

                self.validate();
                return;
            }
            if (!self.checkNeighbor(nthGridX, nthGridY)) {

                self.validate();
                return;
            }
            if (!self.checkIfPossible(nthGridX, nthGridY)) {

                self.validate();
                return;
            }

            self.isWhite *= -1;
            color = self.isWhite > 0 ? '#ffffff' : '#000000';

            let data = {
                x: (self.GRID_SIZE * nthGridX) + (self.GRID_SIZE / 2),
                y: (self.GRID_SIZE * nthGridY) + (self.GRID_SIZE / 2),
                r: self.R,
                isWhite: self.isWhite
            };

            let stone = new window.myOthello.Stone(self.ctx, data);
            stone.drawArc(data);

            let obj = self.board[nthGridY][nthGridX];
            obj.instance = stone;
            obj.isWhite = self.isWhite;

            if (self.turnStones.length > 0) {
                self.turnStones.forEach(function(val) {
                    val.isWhite *= -1;
                    val.instance.reverse();
                });

                self.turnStones.length = 0;
            }

        },

        checkVacancy: function(nthX, nthY) {
            const self = this;

            return Object.keys(self.board[nthY][nthX]).length <= 0;

        },

        checkNeighbor: function(nthX, nthY) {
            const self = this;

            let row, line;

            let neighbors = [
                [nthX, nthY - 1],       // 上
                [nthX + 1, nthY - 1],   // 右上
                [nthX + 1, nthY],       // 右
                [nthX + 1, nthY + 1],   // 右下
                [nthX, nthY + 1],       // 下
                [nthX - 1, nthY + 1],   // 左下
                [nthX - 1, nthY],       // 左
                [nthX - 1, nthY - 1]    // 左上
            ];

            for (let i = 0, len = neighbors.length; i < len; i++) {

                line = neighbors[i][1];
                row = neighbors[i][0];

                if (line < 0 || line > 7 || row < 0 || row > 7) {
                    continue;
                }

                if (Object.keys(self.board[line][row]).length > 0) {
                    return true;
                }
            }

        },

        checkIfPossible: function(nthX, nthY) {
            const self = this;

            // for (let i = 0; i < 8; i++) {
            //     console.log(i + ' / 4');
            //     console.log(Math.cos(Math.PI / 4 * i), Math.sin(Math.PI / 4 * i));
            // }

            const MAX_COUNT = (self.LINE_NUMBER - 1) - 1; // ((線の数-1) - 自身が置かれるマス)
            let isPossible = false;
            let isTmpPossible = false;
            let obj = null;
            let tmpObj = null;

            // 置ける条件
            // 左右、上下、斜め45度上に同じ色の石がある
            // かつ その同じ色の石と自身の間に隙間なく別の色の石がある

            // let neighbors = [
            //     [nthX, nthY - 1],       // 上
            //     [nthX + 1, nthY - 1],   // 右上
            //     [nthX + 1, nthY],       // 右
            //     [nthX + 1, nthY + 1],   // 右下
            //     [nthX, nthY + 1],       // 下
            //     [nthX - 1, nthY + 1],   // 左下
            //     [nthX - 1, nthY],       // 左
            //     [nthX - 1, nthY - 1]    // 左上
            // ];
            // でそれぞれチェックする？
            checkTop();
            checkBottom();


            return isPossible;


            // 上をチェック
            function checkTop() {

                for (let i = 1; i < MAX_COUNT; i++) {

                    if (nthY - i < 0) {
                        break;
                    }

                    // 自身から該当方向の中で一番近い石
                    obj = self.board[nthY - i][nthX];

                    if ((Object.keys(obj).length > 0) && (obj.isWhite * -1 === self.isWhite)) {

                        for (let j = 1; j < i; j++) {
                            tmpObj = self.board[nthY - j][nthX];
                            tmpObj.y = nthY - j;
                            tmpObj.x = nthX;

                            if (Object.keys(tmpObj).length > 0 && tmpObj.isWhite === self.isWhite) {

                                isPossible = true;
                                self.turnStones.push(tmpObj);

                            } else {

                                isPossible = false;
                                self.turnStones.length = 0;

                                break;
                            }
                        }

                        if (isPossible) {
                            break;
                        }
                    }
                }
            }

            // 下をチェック
            function checkBottom() {

                for (let i = 1; i < MAX_COUNT; i++) {

                    if (nthY + i > 7) {
                        break;
                    }

                    obj = self.board[nthY + i][nthX];

                    if ((Object.keys(obj).length > 0) && (obj.isWhite * -1 === self.isWhite)) {

                        for (let j = 1; j < i; j++) {
                            tmpObj = self.board[nthY + j][nthX];
                            tmpObj.y = nthY + j;
                            tmpObj.x = nthX;

                            if (Object.keys(tmpObj).length > 0 && tmpObj.isWhite === self.isWhite) {

                                isPossible = true;
                                self.turnStones.push(tmpObj);

                            } else {

                                isPossible = false;
                                self.turnStones.length = 0;

                                break;
                            }
                        }

                        if (isPossible) {
                            break;
                        }
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