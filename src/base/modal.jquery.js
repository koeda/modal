/**
 * モーダルウィンドウJS - with jQuery, Zepto.js
 */

$(function() {

    var $trigger    = $('#openModal');
    var $baseLayer  = $('#modalBaseLayer');
    var $modalClose = $('#closeModal');


    function showModal() {
        $baseLayer.css('visibility', 'visible');
    }

    function hideModal() {
        $baseLayer.css('visibility', 'hidden');
    }

    function bindTriggerClick() {
        $trigger.on('click', function(event) {
            event.preventDefault();
            showModal();
        });
    }

    function bindCloseModal() {
        $modalClose.on('click', function(event) {
            event.preventDefault();
            hideModal();
        });
    }

    bindTriggerClick();
    bindCloseModal();

});