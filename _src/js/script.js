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
 * // TODO 質問させてください。

 1.
 「判定する」という英語は何を使ってますでしょうか？
 find, judge, decide, check...?

 2.
 BoardManagerクラスのStartGameメソッドのTODOの参照をよろしくお願いいたします。

 3.
 JavaScriptの書き方の流派（？）がまとまっている本や記事、あるいは調べる際のキーワードを教えていただけないでしょうか？
 「〇〇ケース（ex. キャメルケースなど）」は単語の書き方やつなぎ方、
 デザインパターンはクラス（コンストラクタ）の役割や機能の分け方についての概念という認識なのですが、
 ここで意味する流派とは、変数名や関数名を何ケースにするかや、cssでいうBEMやFLOCSSのようなものです。
 （伝わっていなかったらすみません...。松田さんがプログラム内で'_'からはじまる変数名を使われていたり、以前他の人が書いたプログラムでjQueryを使っていないのに'$'からはじまる変数名を使っているのを見たことがあったので、流派のようなものがあるのかと気になりました。）


 */
