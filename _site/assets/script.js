/**
 * @init is function run after loading the page. It is the first function executed.
 *
 * */

var init;
init = function () {
    //The .active class needs to be added to one of the slides. Otherwise, the carousel will not be visible.
    $('.carousel .item:first').addClass('active');

    //adding carousel avoid using bootstrap data tags for JS events. it get un manageable soon.
    $('.carousel').carousel({
        interval: 7000
    });


    //apply transparent navbar
    apply_on_scroll();

    //apply slick slider of featured post
    featured_slider();
};


var apply_on_scroll = function(){
    /**
     *
     * initially the nav bar is transparent to keep the image uncluttered. but if user scrolls down. A flat ui nav bar is displayed.
     *
     */
    var _this = $('.navigation');
    _this.addClass('transparent');
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if(scroll > 150){
            _this.removeClass('transparent');
        }
        else {
            _this.addClass('transparent');
        }
    });
};

var featured_slider = function(){
    $('.lazy').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      adaptiveHeight: true,
       responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}

window.onload = init(); //when dom is loaded. run init function
