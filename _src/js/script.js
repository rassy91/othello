;(function() {

    document.addEventListener('DOMContentLoaded', function() {

        const canvas = document.getElementById('canvas');

        if (!canvas.getContext) {
            return;
        }

        const ctx = canvas.getContext('2d');
        const wrapper = document.getElementById('canvasWrapper');
        ctx.canvas.width = wrapper.clientWidth;
        ctx.canvas.height = wrapper.clientHeight;

        const board = new myOthello.BoardManager(ctx);

        // 初期位置に石をセット
        board.startGame();

        // イベント登録
        canvas.addEventListener('click', function(e) {

            board.putStone(e.offsetX, e.offsetY);
        });

    });

}());

/**
 * // TODO 質問
 *
 * 1.
 「判定する」という英語は何を使ってますか？

 find? judge? decide?


 2.
 chromeのdevツールでインスタンスに入っているtとはなんの意味、略（？）ですか？インスタンスをログに出すとtとなる？
 board.startGameの最後でconsole.log(self.stonePoses);すると確認できる

 */
