$(document).ready(function(){

    // Header

    if ($(window).width() > 1259 && $(window).scrollTop() > 82) {
        $('body').addClass('background-header');
    }

    $(window).on('scroll', function(){
        if ($(window).width() > 1259 && $(window).scrollTop() > 82) {
            $('body').addClass('background-header');
        } else {
            $('body').removeClass("background-header");
        }
    });

    // Header mobile & tablet
    $(window).on('scroll', function(){
        if ($(window).width() < 1024 && $(window).scrollTop() > 82) {
            $('header.item-details').addClass('hide-header');
        } else {
            $('header.item-details').removeClass('hide-header');
        }
    });

    // Open mobile menu
    $('.header__menu-btn').on('click', function(e) {
        e.preventDefault();
        if ($('body').hasClass('filter-opened')) {
            $('body').removeClass('filter-opened');
            $('.filters__content').removeClass('opened');
            $('.orderby').removeClass('opened');
            $('.catheader__catname').removeClass('opened');
        } else {
            $('body').toggleClass('open-menu menu-layer');
        }
    });

    // Open submenu
    $(window).on('resize', function() {
        if ($(window).width() < 1260) {
            $("#navbar .item__menu.has-submenu > a").on("click", function(e) {
                e.preventDefault();
                e.stopPropagation();
                $(this).closest("li").toggleClass("active-link");
                $(this).closest("ul").toggleClass("submenu-show");
            });
        } else {
            $("#navbar .item__menu.has-submenu > a").off("click");
        }
    });

    if ($(window).width() < 1260) {
            $("#navbar .item__menu.has-submenu > a").on("click", function(e) {
                e.preventDefault();
                e.stopPropagation();
                $(this).closest("li").toggleClass("active-link");
                $(this).closest("ul").toggleClass("submenu-show");
            });
        }

    // Close menu when window size changing
    $(window).on('resize', function() {
        if ($(this).width() >= 1260) {
            $('.open-menu').removeClass('open-menu menu-layer');
            $('.active-link').removeClass('active-link');
            $('.submenu-show').removeClass('submenu-show');
        }
    });

    // Search
    $('.header__search').on('click', function(e) {
        e.preventDefault();
        $('.header__search-form').addClass('opened');
        $(this).css('display', 'none');
    });

    $('.search__close-icon').on('click', function(e) {
        e.preventDefault();
        $('.header__search-form').removeClass('opened');
        $('.header__search').css('display', 'flex')
    });

    // Show login
    $('.header__login > a').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('body').addClass('show-login menu-layer');
    });

    $('.close__content').on('click', function() {
        $('body').removeClass('show-login menu-layer');
    });

    // Show cart
    $('.header__cart > a').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('body').addClass('show-cart menu-layer');
    });

    $('.close__content').on('click', function() {
        $('body').removeClass('show-cart menu-layer');
    });

    $('.cart__main').jScrollPane();

    // Show wishlist
    $('.header__wishlist > a').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('body').addClass('show-wishlist menu-layer');
    });

    $('.close__content').on('click', function() {
        $('body').removeClass('show-wishlist menu-layer');
    });

    $('.wishlist__main').jScrollPane();

    // Delete mask layer
    $('.right__layer').on('click', function() {
        $('body').removeClass('show-login show-wishlist show-cart menu-layer open-menu')
    });

    // Slick-slider
    $('.banner__slider').slick({
        slidesToShow: 1,
        arrows : false,
        dots : false,
        autoplay : true,
        autoplaySpeed : 4000,
        pauseOnDotsHover : true,
        pauseOnFocus : false
    });

    $('.home__content .season__iconic').slick({
        infinite: false,
        slidesToShow: 3.5,
        dots: false,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1.5,
                arrows: false
            }
        }]
    });

    $('.board__slider').slick({
        slidesToShow: 1,
        dots : false,
        responsive: [{
            breakpoint: 1259,
            settings: {
                arrows: false,
                autoplay: true
            }
        }]
    });

    $('.grid__block .thumb__link').each(function(item) {
        $(this).addClass('slider-' + item);
        $('.slider-' + item).slick({
            slidesToShow: 1,
            swipe: false,
            dots: true
        });
    })

    if ($(window).width() > 1023) {
        $('.product__tile').on('mouseenter', function(e) {
            $(this).find('.thumb__link').slick("slickSetOption", 'speed', 0)
            $(this).find('.thumb__link').slick('slickGoTo', 1);
            $(this).find('.thumb__link').slick("slickSetOption", 'speed', 300)
        });

        $('.product__tile').on('mouseleave', function(e) {
            $(this).find('.thumb__link').slick("slickSetOption", 'speed', 0)
            $(this).find('.thumb__link').slick('slickGoTo', 0);
            $(this).find('.thumb__link').slick("slickSetOption", 'speed', 300)
        });
    }

    $('.slidecat .slidecat__slide').slick({
        infinite: false,
        slidesToShow: 2,
        dots: false,
        mobileFirst: true,
        responsive: [
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4.3,
            }
        }
        ]
    });

    $('.info-slider').slick({
        infinite: true,
        slidesToShow: 1,
        lazyLoad: "ondemand",
        dots: false,
        arrows: false,
        vertical: true,
        autoplay: true
    });

    // Filters
    $('.filter__mobile').on('click', function() {
        $('body').addClass('filter-opened');
        $('.filters__content').addClass('opened');
    });

    $('.filter__title').on('click', function() {
        $('.orderby__link').removeClass('open');
        $(this).parent().siblings().find('.filter__title').removeClass('open');
        $(this).toggleClass('open');
    });

    $('.orderby__mobiletrigger').on('click', function() {
        $('body').addClass('filter-opened');
        $('.orderby').addClass('opened');
    });

    $('.catname__title span').on('click', function() {
        $('body').addClass('filter-opened');
        $('.catheader__catname').addClass('opened');
    });

    $('.orderby__link').on('click', function() {
        $('.filter__title').removeClass('open');
        $(this).toggleClass('open');
    });

    // Footer submenu
    $('.footer__menu .menu__item').on('click', function(e) {
        $(this).siblings().removeClass('open');
        $(this).toggleClass('open');
    });

    // Select country
    $(".select__lang").on("change", function(e) {
        let link = $(this).find(":selected").data("url");
        window.location.href = link;
    });

    // Product card mobile
    $('.tab-control__mobile .tab__control').on('click', function(e) {
        $(this).siblings().removeClass('active-tab')
        $(this).addClass('active-tab');

        $(this).parent().parent().find('.description-tab').removeClass('show');
        $(this).parent().parent().find(`.${$(this).attr('data-activate')}`).toggleClass('show');
    });

    // Prduct card desktop
    $('.tab-control-container .tab-control').on('click', function() {
        $(this).siblings().removeClass('active-tab');
        $(this).addClass('active-tab');
        $(this).parent().attr('data-activeindex', `${$(this).index()}`);
        $('.tabs-horizontal .activate-tab').removeClass('show');
        $(`.tabs-horizontal .activate-tab:eq(${$(this).index()})`).addClass('show');
    });

    // Mobile product-content hide
    $(window).on('scroll', function() {
        let windowHeight = $(window).height() - $(window).height() / 100;

        if ($('#product-card section.slidecat').length) {
            if ($('#product-card section.slidecat').offset().top - $(window).scrollTop() > windowHeight) {
                $("#product-content").removeClass("hide");
            } else {
                $("#product-content").addClass("hide");
            }
        }
    });

    // Layer for size & color select
    $('.swatchs-layer').on('click', function(){
        $(this).removeClass('open');
        $('body').removeClass('swatchs-layer-opened');
        $('.attribute-size, .attribute-color').removeClass('open');
    });

    // On resize remove layer and opened select
    $(window).on('resize', function() {
        $('.swatchs-layer-opened').removeClass('swatchs-layer-opened');
        $('.open').removeClass('open');
    });

    // Choose size
    $('#product-content .attribute-size button').on('click', function(){
        $('.attribute-size').addClass('open');
        $('.swatchs-layer').addClass('open');
        $('body').addClass('swatchs-layer-opened');
    });

    $('html').click(function(e) {
        if (!$(e.target).closest('.attribute-size.open').length) {
            $('.attribute-size.open').removeClass('open');
          }
    });

    $('.swatchs-size li').on('click', function() {
        $('button > .size-select').html($(this).children().html());
        // $('.attribute-size').removeClass('open');
        $('.swatchs-layer').removeClass('open');
        $('body').removeClass('swatchs-layer-opened');
    });

    // Choose color
    $('#product-content .attribute-color button').on('click', function(){
        $('.attribute-color').addClass('open');
        $('.swatchs-layer').addClass('open');
        $('body').addClass('swatchs-layer-opened ');
    });

    $('.swatchs-layer').on('click', function(){
        $(this).removeClass('open');
        $('.attribute-size').removeClass('open');
    });

    $('.swatchs-colors li').on('click', function() {
        $('.attribute-color button').html(`<a class='color-select' style="${$(this).children().attr('style')}"></a>${$(this).children().children().text()}`);
        // $('.attribute-color').removeClass('open');
        $('.swatchs-layer').removeClass('open');
        $('body').removeClass('swatchs-layer-opened');
    });

    // Desktop
    $('.swatchs-colors li').on('click', function(e) {
        e.preventDefault();
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
    });

    // Scroll to top button
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('#scrollTop').addClass('show');
        } else {
            $('#scrollTop').removeClass('show');
        }
        });

    $('#scrollTop').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
    });

    // JScrollPane
    $(".checkout-progress-indicator").length && $(window).width() < 1024 && setTimeout(function() {
        $(".steps-scroll-view").jScrollPane({
            showArrows: !0
        }).data("jsp").scrollToElement($(".checkout-progress-indicator .active"))
    }, 200);

    // FAQ
    $('.question__content h3').on('click', function() {
        $(this).parent().toggleClass('answer-open');
    });

    $('.faq__container .nav__services').on('click', function() {
        $(this).toggleClass('open');
    });

    // INPUT MASK PHONE NUMBER
    $('input[type="tel"]').inputmask({"mask": "+7 (999) 99-99-99"});

});