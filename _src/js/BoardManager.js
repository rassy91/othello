;(function() {

    /**
     * コンストラクタ
     * ボードの状態を管理する
     * @param {object} ctx
     * @constructor
     */
    const BoardManager = function(ctx) {
        const self = this;

        self.ctx = ctx;

        // DOM
        self.cautionText = document.getElementById('caution');
        self.stoneColorText = document.getElementById('stoneColor');

        //値
        self.GRID_SIZE = 50;
        self.LINE_NUMBER = 9;
        // 石の半径
        self.R = self.GRID_SIZE * 0.3;

        // 白黒判定フラグ
        // 1で白、-1で黒
        self.isWhite = 1;

        // それぞれのマス目の情報を格納
        self.board = [];

        // ひっくり返す石を一時的に格納する
        self.turnStones = [];

        //
        self.toggleCautionClassName = 'isVisible';
        self.toggleTextClassName = 'js-isWhite';

        self.init();
    };

    BoardManager.prototype = {

        /**
         * 初期化
         */
        init: function() {
            const self = this;

            // x=0, y=0で先の太さが半分し描写されないため、基準点をずらす
            self.ctx.translate(1, 1);

            // ボードを描写
            self.drawBoard();

            // 各マス目に情報保持用のオブジェクトをもたせてボード情報の配列に格納
            for (let i = 1; i < self.LINE_NUMBER; i++) {
                let row = [];

                for (let j = 1; j < self.LINE_NUMBER; j++) {
                    row.push({});
                }

                self.board.push(row);
            }

        },

        /**
         * ボードを描写
         */
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

        /**
         * 四角形を描写
         * @param {number} x1
         * @param {number} y1
         * @param {number} x2
         * @param {number} y2
         * @param {string} color
         */
        drawRect: function(x1, y1, x2, y2, color) {
            const self = this;

            self.ctx.fillStyle = typeof color !== 'undefined' ? color : '#000000';
            self.ctx.fillRect(x1, y1, x2, y2);

        },

        /**
         * 線を描写
         * @param {number} x1
         * @param {number} y1
         * @param {number} x2
         * @param {number} y2
         * @param {string} color
         * @param {number} width
         */
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

        /**
         * ゲームスタート時に実行
         */
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

            /**
             * 初期位置に石をセット
             */
            function setFirstStone() {
                for (let i = 0; i < 2; i++) {

                    // TODO 自分用メモ：関数の外側で定義しており、オブジェクトの参照渡しで引っかかった
                    let data = {
                        r: self.R
                    };

                    posX = center + dir1 * diff;
                    posY = center + dir2 * diff;

                    data.x = posX;
                    data.y = posY;
                    data.isWhite = isWhite;

                    // インスタンスを作成
                    let stone = new window.myOthello.Stone(self.ctx, data);
                    // 石を描写
                    stone.drawArc(data);

                    // ボードの配列の該当位置にインスタンスと現在の白黒状態を格納
                    let obj = self.board[Math.floor(posY / self.GRID_SIZE)][Math.floor(posX / self.GRID_SIZE)];
                    obj.instance = stone;
                    obj.isWhite = isWhite;

                    dir1 *= -1;
                    dir2 *= -1;

                }
            }

            // TODO : 質問させてください。
            console.log(self.board);
            // TODO 上のようにログに出すと、以下のように表示されます。
            // {
            //     instance: t {key1: value1, key2: value2, ...},
            //     keyA: valueA,
            //     ...
            // }
            // TODO ここの 't' とはなんの意味、あるいはなんの単語の略でしょうか？
            // TODO （インスタンスが入ると 't' となるのかと思いますが、本当にインスタンスなのか、インスタンスの場合't'とはなんの略なのかが調べてもわかりませんでした。ご教授いただけますと幸いです。）

        },

        /**
         * 石を置けない位置の場合、注意書きを表示する
         */
        showCaution: function() {
            const self = this;

            if (!self.cautionText.classList.contains(self.toggleCautionClassName)) {
                self.cautionText.classList.add(self.toggleCautionClassName);
                setTimeout(function() {
                    self.cautionText.classList.remove(self.toggleCautionClassName);
                }, 1000)
            }
        },

        /**
         * 石を置く処理
         * @param {number} clickedX : canvas上のクリック位置
         * @param {number} clickedY : canvas上のクリック位置
         */
        putStone: function(clickedX, clickedY) {
            const self = this;

            // 何番目のマスか
            let nthGridX = Math.floor(clickedX / self.GRID_SIZE);
            let nthGridY = Math.floor(clickedY / self.GRID_SIZE);

            // 石が置けるかの判定
            if (!self.checkVacancy(nthGridX, nthGridY)) {
                // クリックしたマスが空かどうか

                // 石を置けない位置の場合、注意書きを表示する
                self.showCaution();
                return;

            } else if (!self.checkNeighbor(nthGridX, nthGridY)) {
                // クリックしたマスが石にとなり合っているかどうか

                // 石を置けない位置の場合、注意書きを表示する
                self.showCaution();
                return;

            } else if (!self.checkIfPossible(nthGridX, nthGridY)) {
                // クリックしたマスが石をひっくり返せるマスかどうか

                // 石を置けない位置の場合、注意書きを表示する
                self.showCaution();
                return;

            }

            // 石を置けた場合、色を反転
            self.isWhite *= -1;

            // インスタンスに渡す情報
            let data = {
                x: (self.GRID_SIZE * nthGridX) + (self.GRID_SIZE / 2),
                y: (self.GRID_SIZE * nthGridY) + (self.GRID_SIZE / 2),
                r: self.R,
                isWhite: self.isWhite
            };

            // インスタンスを作成
            let stone = new window.myOthello.Stone(self.ctx, data);
            stone.drawArc(data);

            // 可読性のため、いったん変数に該当オブジェクトを格納
            let obj = self.board[nthGridY][nthGridX];
            obj.instance = stone;
            obj.isWhite = self.isWhite;
            obj.x = nthGridX;
            obj.y = nthGridY;

            // ひっくり返す石がある場合はひっくり返す
            if (self.turnStones.length > 0) {
                self.turnStones.forEach(function(val) {
                    val.isWhite *= -1;
                    val.instance.reverse();
                });

                self.turnStones.length = 0;
            }

            // どちらの番かの表示を切り替え
            if (!self.stoneColorText.classList.contains(self.toggleTextClassName)) {
                self.stoneColorText.textContent = '白';
                self.stoneColorText.classList.add(self.toggleTextClassName);
            } else {
                self.stoneColorText.textContent = '黒';
                self.stoneColorText.classList.remove(self.toggleTextClassName);
            }

        },

        /**
         * クリックしたマスが空かどうかを判定
         * @param {number} nthX : 何番目のマスか（1-8）
         * @param {number} nthY : 何番目のマスか（1-8）
         * @returns {boolean}
         */
        checkVacancy: function(nthX, nthY) {
            const self = this;

            return Object.keys(self.board[nthY][nthX]).length <= 0;

        },

        /**
         * クリックしたマスが石にとなり合っているかどうかを判定
         * @param {number} nthX : 何番目のマスか（1-8）
         * @param {number} nthY : 何番目のマスか（1-8）
         * @returns {boolean}
         */
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

                row = neighbors[i][0];
                line = neighbors[i][1];

                // ボードからはみ出すときはスキップ
                if (row < 0 || row > 7 || line < 0 || line > 7) {
                    continue;
                }

                if (Object.keys(self.board[line][row]).length > 0) {
                    return true;
                }
            }

        },

        /**
         * クリックしたマスが石をひっくり返せるマスかどうかを判定
         * @param {number} nthX
         * @param {number} nthY
         * @returns {boolean}
         */
        checkIfPossible: function(nthX, nthY) {
            const self = this;

            // TODO 自分用メモ：　三角関数を使うと以下判定しやすそうだが Math.cos(Math.PI / 2)で1にならない
            // for (let i = 0; i < 8; i++) {
            //     console.log(i + ' / 4');
            //     console.log(Math.cos(Math.PI / 4 * i), Math.sin(Math.PI / 4 * i));
            // }


            const MAX_COUNT = (self.LINE_NUMBER - 1) - 1; // ((線の数-1) - 自身が置かれるマス)
            // 一方向でも石がひっくり返せればtrueにする
            let isPossible = false;
            // 各方向で石をひっくり返せるかをチェックするフラグ
            let isTmpPossible;
            // チェックする石の情報を格納（クリックした位置から近い箇所からチェック）
            let obj = null;
            let tmpObj = null;
            let tmpTurnStones = [];

            let dirY, dirX;

            // 置ける条件
            // 左右、上下、斜め45度上に同じ色の石がある
            // かつ その同じ色の石と自身の間に隙間なく別の色の石がある

            // 上、右上、右、右下、下、左下、左、左上、でそれぞれチェックする
            // y, xの順番
            let checkDirs = [
                [-1, 0],    // 上
                [1, 0],     // 下
                [0, -1],    // 左
                [0, 1],     // 右
                [-1, -1],   // 左上
                [1, 1],     // 右下
                [1, -1],    // 左下
                [-1, 1],    // 右上
            ];

            /**
             * 各方向でひっくり返せるか判定
             */
            function check() {

                for (let k = 0, len = checkDirs.length; k < len; k++) {
                    isTmpPossible = false;

                    dirY = checkDirs[k][0];
                    dirX = checkDirs[k][1];

                    for (let i = 1; i <= MAX_COUNT; i++) {

                        // ボードからはみ出す場合は処理を抜ける
                        if ((dirY < 0) && (nthY + dirY * i < 0)) {
                            break;
                        } else if ((dirY > 0) && (nthY + dirY * i > MAX_COUNT)) {
                            break;
                        } else if ((dirX < 0) && (nthX + dirX * i < 0)) {
                            break;
                        } else if ((dirX > 0) && (nthX + dirX * i > MAX_COUNT)) {
                            break;
                        }

                        // 自身から該当方向の中で一番近い石
                        obj = self.board[nthY + dirY * i][nthX + dirX * i];

                        // チェックする方向に情報があり＝石が置かれており、かつ、同じ色の場合
                        if ((Object.keys(obj).length > 0) && (obj.isWhite * -1 === self.isWhite)) {

                            // クリックした位置から、上記石の場所までの石を確認
                            for (let j = 1; j < i; j++) {

                                // TODO 自分用メモ：self.board[y][x]をtmpObjに参照渡ししていてハマった
                                tmpObj = self.board[nthY + dirY * j][nthX + dirX * j];
                                tmpObj.y = nthY + dirY * j;
                                tmpObj.x = nthX + dirX * j;

                                if (Object.keys(tmpObj).length > 0 && tmpObj.isWhite === self.isWhite) {
                                    // チェックする方向に情報があり＝石が置かれており、かつ、違う色の場合

                                    isTmpPossible = true;
                                    tmpTurnStones.push(tmpObj);

                                } else {
                                    // 石がないか同じ色の場合は処理を抜ける

                                    isTmpPossible = false;
                                    tmpTurnStones.length = 0;

                                    // 処理終了の場合はオブジェクトに一時的に格納していた情報を削除する
                                    delete tmpObj.x;
                                    delete tmpObj.y;

                                    break;
                                }
                            }

                            // クリックした位置とチェックする方向の最短の同じ色の石までの間がすべて違う色の石の場合
                            if (isTmpPossible) {

                                for (let i = 0, length = tmpTurnStones.length; i < length; i++) {
                                    self.turnStones.push(tmpTurnStones[i]);
                                }
                                tmpTurnStones.length = 0;
                                isPossible = true;
                                break;
                            }
                        }
                    }
                }
            }

            check();

            return isPossible;

        }

    };

    if (typeof window.myOthello === 'undefined') {
        window.myOthello = {};
    }
    window.myOthello.BoardManager = BoardManager;

}());