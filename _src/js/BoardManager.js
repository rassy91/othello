;(function() {

    const BoardManager = function(ctx) {
        const self = this;

        self.ctx = ctx;

        self.GRID_SIZE = 50;
        self.LINE_NUMBER = 9;
        self.R = self.GRID_SIZE * 0.3;

        self.unclikablePoses = [];

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
            let data = {
                r: self.R
            };

            setFirstStone('#ffffff');
            dir1 *= -1;
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

                    dir1 *= -1;
                    dir2 *= -1;

                }
            }

        },

        getPosOnBoard: function(clickedX, clickedY) {
            const self = this;

            return [Math.floor(clickedX / self.GRID_SIZE), Math.floor(clickedY / self.GRID_SIZE)];

        },

        putStone: function(clickedX, clickedY, color) {
            const self = this;

            let data = {
                x: (self.GRID_SIZE * Math.floor(clickedX / self.GRID_SIZE)) + (self.GRID_SIZE / 2),
                y: (self.GRID_SIZE * Math.floor(clickedY / self.GRID_SIZE)) + (self.GRID_SIZE / 2),
                r: self.R,
                color: color
            };

            let stone = new window.myOthello.Stone(self.ctx, data);
            stone.drawArc(data);

            // console.log(Math.floor(clickedX / self.GRID_SIZE), Math.floor(clickedY / self.GRID_SIZE));

        },

    };

    if (typeof window.myOthello === 'undefined') {
        window.myOthello = {};
    }
    window.myOthello.BoardManager = BoardManager;

}());