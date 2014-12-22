/**
 * モーダルウィンドウJS - with jQuery, Zepto.js
 */

$(function() {

    var $openTrigger  = $('#openModal');
    var $baseLayer    = $('#modalBaseLayer');
    var $closeTrigger = $('#closeModal');


    function showModal() {
        $baseLayer.css('visibility', 'visible');
    }

    function hideModal() {
        $baseLayer.css('visibility', 'hidden');
    }

    function bindOpenModal() {
        $openTrigger.on('click', function(event) {
            event.preventDefault();
            showModal();
        });
    }

    function bindCloseModal() {
        $closeTrigger.on('click', function(event) {
            event.preventDefault();
            hideModal();
        });
    }

    bindOpenModal();
    bindCloseModal();

});