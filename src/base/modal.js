/**
 * モーダルウィンドウJS
 */

window.addEventListener('DOMContentLoaded', function() {

    var openTrigger  = document.getElementById('openModal');
    var baseLayer    = document.getElementById('modalBaseLayer');
    var closeTrigger = document.getElementById('closeModal');


    /**
     * モーダルを開く
     */
    function showModal() {
        // モーダルベースレイヤを表示する
        baseLayer.style.visibility = 'visible';
    }

    /**
     * モーダルを閉じる
     */
    function hideModal() {
        // モーダルベースレイヤを非表示にする
        baseLayer.style.visibility = 'hidden';
    }

    /**
     * 「クリックするとモーダルが開くよ」をクリックしたときの処理
     */
    function bindOpenModal() {
        openTrigger.addEventListener('click', function(event) {
            // デフォルトのイベント（ここではa要素のイベント）をキャンセル
            event.preventDefault();
            // モーダルを表示
            showModal();
        }, false);
    }

    /**
     * モーダル内の「閉じる」をクリックしたときの処理
     */
    function bindCloseModal() {
        closeTrigger.addEventListener('click', function(event) {
            // デフォルトのイベント（ここではa要素のイベント）をキャンセル
            event.preventDefault();
            // モーダルを非表示
            hideModal();
        }, false);
    }


    // モーダルを開くためのイベントリスナを設定
    bindOpenModal();

    // モーダルを閉じるためのイベントリスナを設定
    bindCloseModal();

}, false);
