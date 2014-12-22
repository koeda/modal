/**
 * モーダルウィンドウJS
 */

window.addEventListener('DOMContentLoaded', function() {

    var openTriggers = document.querySelectorAll('#wrap .openModal');
    var baseLayer    = document.getElementById('modalBaseLayer');
    var modal        = document.getElementById('modal');
    var closeTrigger = document.getElementById('closeModal');

    // デフォルトの余白値
    var defaultMargin = 10;


    /**
     * モーダルを開く
     */
    function showModal() {
        // モーダルウィンドウのtop値をセット
        setModalTop();
        // モーダルベースレイヤを表示する
        baseLayer.style.visibility = 'visible';
    }

    /**
     * モーダルを閉じる
     */
    function hideModal() {
        // モーダルベースレイヤを非表示にする
        baseLayer.style.visibility = 'hidden';
        // モーダルウィンドウのtop値をクリア
        clearModalTop();
    }

    /**
     * 「クリックするとモーダルが開くよ」をクリックしたときの処理
     */
    function bindOpenModal(openTrigger) {
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

    /**
     * window.scrollYを返す
     * https://developer.mozilla.org/ja/docs/Web/API/window.scrollY
     */
    function getScrollY() {
        return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }

    /**
     * モーダルウィンドウのTOP値に、スクロールY値を加算した値をセットする
     */
    function setModalTop() {
        // スクロールY値を加算した値をセットする
        modal.style.top = defaultMargin + getScrollY() + 'px';
    }

    /**
     * モーダルウィンドウのTOP値をクリアする
     * 表示する度にtop値指定しているから、この処理いらない気もするけど
     * なんか設定したものはクリアしないと気持ち悪い
     */
    function clearModalTop() {
        modal.style.top = '';
    }


    for (var i = 0, len = openTriggers.length; i < len; i++) {
        // モーダルを開くためのイベントリスナを設定
        bindOpenModal(openTriggers[i]);
    }

    // モーダルを閉じるためのイベントリスナを設定
    bindCloseModal();

}, false);
