;(function() {

    const Player = function(canvas, data) {
        const self = this;

        self.canvas = canvas;

        self.color = data.color;
        self.stones = [];

        self.init();
    };

    Player.prototype = {

        init: function() {
            const self = this;

            self.setEvent();
        },

        setEvent: function() {
            const self = this;

            // self.canvas.addEventListener('click', function(e) {
            //     console.log(e.offsetX);
            // });

        },

        getClickPos: function() {
            const self = this;


        }

    };

    if (typeof window.myOthello === 'undefined') {
        window.myOthello = {};
    }
    window.myOthello.Player = Player;

}());