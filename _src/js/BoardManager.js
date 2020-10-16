;(function() {

    const BoardManager = function(ctx) {
        const self = this;

        self.ctx = ctx;

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

            const GRID_SIZE = 50;
            const LINE_NUMBER = 9;
            const fieldSize = GRID_SIZE * (LINE_NUMBER - 1);

            let x = 0;
            let y = 0;

            self.drawRect(x, y, fieldSize, fieldSize, '#008833');

            for (let i = 1; i <= LINE_NUMBER; i++) {
                self.drawLine(x, 0, x, fieldSize);
                x += GRID_SIZE;
            }
            for (let i = 1; i <= LINE_NUMBER; i++) {
                self.drawLine(0, y, fieldSize, y);
                y += GRID_SIZE;
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

    };

    if (typeof window.myOthello === 'undefined') {
        window.myOthello = {};
    }
    window.myOthello.BoardManager = BoardManager;

}());