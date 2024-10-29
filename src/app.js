import $ from 'jquery'

$(window).scroll(() => {
    if ($(window).scrollTop() > $('#hero').offset().top) {
        $(' .scrollToTop').css("opacity", "1");
    } else {
        $(' .scrollToTop').css("opacity", "0");
    }
})