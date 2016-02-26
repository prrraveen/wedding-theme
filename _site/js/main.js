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

window.onload = init(); //when dom is loaded. run init function
