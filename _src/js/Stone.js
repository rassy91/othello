;(function() {

    const Stone = function(ctx, data) {
        const self = this;

        self.ctx = ctx;
        self.color = data.color;

    };

    Stone.prototype = {

        drawArc: function(data) {
            const self = this;

            self.ctx.beginPath();
            self.ctx.arc(data.x, data.y, data.r, 0, Math.PI * 2, true);
            self.ctx.fillStyle = data.color;
            self.ctx.fill();
            self.ctx.closePath();

        },
    };

    if (typeof window.myOthello === 'undefined') {
        window.myOthello = {};
    }
    window.myOthello.Stone = Stone;

}());