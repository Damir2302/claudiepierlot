$(document).ready(function(){

    // VALIDATE FORM
    $('.c-input input').on('blur', function() {
        if ($(this).val() == '') {
            $(this).parent().attr('data-error', $(this).attr('data-error-message'));
        } else {
            $(this).parent().removeAttr('data-error');
        }
    });

    // PHONE MASK
    $('#input-phone').inputmask({"mask": "+7 (999) 99-99-99"});

});