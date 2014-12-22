/**
 * モーダルウィンドウJS
 */

window.addEventListener('DOMContentLoaded', function() {

    var trigger    = document.getElementById('openModal');
    var baseLayer  = document.getElementById('modalBaseLayer');
    var modalClose = document.getElementById('closeModal');


    /**
     * モーダルを開く
     * モーダルベースレイヤ、style属性のCSSプロパティ値（visibility）の値を変えるだけ
     */
    function showModal() {
        baseLayer.style.visibility = 'visible';
    }

    /**
     * モーダルを閉じる
     * モーダルベースレイヤ、style属性のCSSプロパティ値（visibility）の値を変えるだけ
     */
    function hideModal() {
        baseLayer.style.visibility = 'hidden';
    }

    /**
     * 「クリックするとモーダルが開くよ」をクリックしたときの処理
     */
    function bindTriggerClick() {
        trigger.addEventListener('click', function(event) {
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
        modalClose.addEventListener('click', function(event) {
            // デフォルトのイベント（ここではa要素のイベント）をキャンセル
            event.preventDefault();
            // モーダルを非表示
            hideModal();
        }, false);
    }


    bindTriggerClick();
    bindCloseModal();

}, false);
