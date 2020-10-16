;(function() {

    document.addEventListener('DOMContentLoaded', function() {

        const canvas = document.getElementById('canvas');

        if (!canvas.getContext) {
            return;
        }

        const wrapper = document.getElementById('wrapper');
        const ctx = canvas.getContext('2d');
        ctx.canvas.width = wrapper.clientWidth;
        ctx.canvas.height = wrapper.clientHeight;

        const board = new myOthello.BoardManager(ctx);

        board.startGame();


        // フィールドを書く（8x8）
        // 各マス目のエリア情報を保持（startX, startY, endX, endY）
        //      クリックした位置とcanvas上の位置の変換が必要？
        // プレイヤー白・黒をセット
        //      フラグにする？
        // 中央に白黒2こずつセット

        // 各プレイヤーの置いた石を保持する配列
        //



    });

}());