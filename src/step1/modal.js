/**
 * モーダルウィンドウJS
 */

$(function() {

    function showModal() {
        $('#modalBaseLayer').css('visibility', 'visible');
    }

    function hideModal() {
        $('#modalBaseLayer').css('visibility', 'hidden');
    }


    $('#openModal').on('click', function(event) {
        event.preventDefault();
        showModal();
    });

    $(document).on('click', '.closeModal', function(event) {
        event.preventDefault();
        hideModal();
    });


    // これじゃ、モーダルの中をクリックした時も閉じちゃう
    // $('#modalBaseLayer').on('click', function(event) {
    //     if (event.target.id === 'modalBaseLayer') {
    //         $('#modalBaseLayer').css('visibility', 'hidden');
    //     }
    // });

});