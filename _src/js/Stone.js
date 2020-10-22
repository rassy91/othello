;(function() {

    /**
     * それぞれの石の情報
     * @param {object} ctx
     * @param {object} data : 位置と色を保持
     * @constructor
     */
    const Stone = function(ctx, data) {
        const self = this;

        self.ctx = ctx;
        self.data = data;
        self.isWhite = data.isWhite;

    };

    Stone.prototype = {

        /**
         * 石を描写
         * @param {object} data
         */
        drawArc: function(data) {
            const self = this;

            self.ctx.beginPath();
            self.ctx.arc(data.x, data.y, data.r, 0, Math.PI * 2, true);
            self.ctx.fillStyle = self.isWhite > 0 ? '#ffffff' : '#000000';
            self.ctx.fill();
            self.ctx.closePath();

        },

        /**
         * ひっくり返す処理
         */
        reverse: function() {
            const self = this;

            self.isWhite *= -1;

            self.drawArc(self.data);

        }
    };

    if (typeof window.myOthello === 'undefined') {
        window.myOthello = {};
    }
    window.myOthello.Stone = Stone;

}());