;(function() {

    const Stone = function(ctx, data) {
        const self = this;

        self.ctx = ctx;
        self.data = data;
        self.isWhite = data.isWhite;

    };

    Stone.prototype = {

        drawArc: function(data) {
            const self = this;

            self.ctx.beginPath();
            self.ctx.arc(data.x, data.y, data.r, 0, Math.PI * 2, true);
            self.ctx.fillStyle = self.isWhite > 0 ? '#ffffff' : '#000000';
            self.ctx.fill();
            self.ctx.closePath();

        },

        reverse: function() {
            const self = this;

            self.ctx.beginPath();
            self.ctx.arc(self.data.x, self.data.y, self.data.r, 0, Math.PI * 2, true);
            self.ctx.fillStyle = self.isWhite * -1 > 0 ? '#ffffff' : '#000000';
            self.ctx.fill();
            self.ctx.closePath();
        }
    };

    if (typeof window.myOthello === 'undefined') {
        window.myOthello = {};
    }
    window.myOthello.Stone = Stone;

}());