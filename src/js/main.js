$(document).ready(function () {
    $('.js-burger-btn').on('click', function () {
        if ($('.js-header').hasClass('active')) {
            $('.js-header').removeClass('active');
        } else {
            $('.js-header').addClass('active');
        }
    })

    $('.js-link-btn').on('click', function () {
        if ($('.js-header').hasClass('active')) {
            $('.js-header').removeClass('active');
        } else {
            $('.js-header').addClass('active');
        }
    })
});