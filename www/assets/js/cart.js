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

    // DELIVERY SELECT
    $('.delivery-date-select').on('click', function() {
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    });

    $('.date-select-item').on('click', function(e) {
        $(this).parent().parent().find('span').html($(this).html())
    });

    $('html').click(function(e) {
        if (!$(e.target).closest('.delivery-date-select').length) {
            $('.delivery-date-select').removeClass('active');
          }
    });
});