$(document).ready(function() {

$('.image-zoom').each(function(num) {
    $(this).attr('data-zoom', num);
});

// Проверяем, если кол-во картинок нечётное, тогда добавляем +1 пустой блок
if ($('.image-zoom').length % 2 !== 0) {
    $('<div class="product-image product-image--last" data-zoom="' + $('.image-zoom').length  + '"></div>').insertBefore('.tabs-container')
}

function zoomMobile() {
    $(".zoom-content-mobile").length && ($(".zoomableContainer").smartZoom("isPluginActive") && $(".zoomableContainer").smartZoom("destroy"),
        $(".zoom-content-mobile").remove())
}

var item = null,
    scale = 3,
    data_zoom = null;

$(document).on("click", ".zoom-content-mobile .closeBtnX", function (t) {
    zoomMobile();
}),


$(document).on("click", ".image-zoom", function (s) {
    if ($(".playing-video").length && ($(".video-content").removeClass("playing-video"),
            $(".video-content video")[0].pause()),
        $(window).width() > 1023)
        if ($(".zoom-content").length)
            $(".zoom-content").remove(),
            $(this).removeClass("active-zoom");
        else {
            $(this).addClass("active-zoom");
            var zoom_content = '<div class="zoom-content" style="background-image: url(' + $(this).find("img").attr("src") + ')"></div>';
            $(this).data("zoom") % 2 == 0 ? (item = $(this).data("zoom") + 1,
                    data_zoom = $('[data-zoom="' + item + '"]'),
                    data_zoom.append(zoom_content)) : (item = $(this).data("zoom") - 1,
                    data_zoom = $('[data-zoom="' + item + '"]'),
                    data_zoom.append(zoom_content)),
                data_zoom.find(".zoom-content").css({
                    transform: "scale(" + scale + ")",
                    "transform-origin": (s.pageX - $(this).offset().left) / $(this).width() * 100 + "% " + (s.pageY - $(this).offset().top) / $(this).height() * 100 + "%"
                })
        }
    else {

        zoomMobile();
        var a = $("img", this).attr("src"),
            o = '<div class="zoom-content-mobile"><button class="closeBtnX icon-close"></button><img src="" class="zoomableContainer"/><span class="zoom-icon pinch-icon"></span></div>';
        $("body").append(o);
        var r = $(".zoomableContainer");
        r.ready(function () {
                r.smartZoom({
                        containerClass: "zoom-viewport",
                        maxScale: 3,
                        containerBackground: "#ffffff"
                    }),
                    r.smartZoom("zoom", .6)
            }),
        r.attr("src", a)
    }
}).on("mouseout", ".image-zoom", function () {
    $(".zoom-content").remove(),
        $(this).removeClass("active-zoom")
}).on("mousemove", ".image-zoom", function (e) {
    $('[data-zoom="' + item + '"] .zoom-content').css({
        "transform-origin": (e.pageX - $(this).offset().left) / $(this).width() * 100 + "% " + (e.pageY - $(this).offset().top) / $(this).height() * 100 + "%"
    })
});

})