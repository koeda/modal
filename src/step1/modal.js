/**
 * モーダルウィンドウJS
 */

window.addEventListener('DOMContentLoaded', function() {

    var triggers   = document.querySelectorAll('#wrap .openModal');
    var baseLayer  = document.getElementById('modalBaseLayer');
    var modal      = document.getElementById('modal');
    var modalClose = document.getElementById('closeModal');


    /**
     * モーダルを開く
     * モーダルベースレイヤ、style属性のCSSプロパティ値（visibility）の値を変えるだけ
     */
    function showModal() {
        baseLayer.style.visibility = 'visible';
        setModalTop();
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
    function bindTriggerClick(trigger) {
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

    /**
     * モーダルウィンドウのTOP値に、スクロールY値を加算した値をセットする
     */
    function setModalTop() {
        // デフォルトのtopプロパティ値
        var defaultTop = 10;
        // スクロールY値を加算した値をセットする
        modal.style.top = defaultTop + window.scrollY + 'px';
    }


    for (var i = 0, len = triggers.length; i < len; i++) {
        bindTriggerClick(triggers[i]);
    }
    bindCloseModal();

}, false);
