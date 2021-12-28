

$(document).ready(function () {
    $('.sight_dim').hide();
    $('.sightList li').mouseover(function () {
        $(this).children('.sight_dim').fadeIn(350);
    });
    $('.sightList li').mouseleave(function () {
        $(this).children('.sight_dim').fadeOut(350);
    });

});


$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        margin: 1,
        loop: false,
        nav: true,     /*내비게이션 추가*/
        responsiveClass: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                option1: 2
            },
            // breakpoint from 768 up
            768: {
                items: 3
            }
        }
    })
});

$(document).ready(function () {
    //객실레이어
    $('.layerWrap').hide();
    $('.roomList> ul> li').click(function () {
        $('.layerWrap').fadeIn(150);
    });
    $('.layerWrap').click(function (e) {
        if (e.target == this) {
            if ($('.layerWrap').is(':visible')) {
                $('.layerWrap').hide(150);
            }
        }
    });




    $('.btn_close').click(function () {
        $('.layerWrap').fadeOut(150);
    });
  $(document).mouseup(function (e) {
      var LayerPopup = $(".layerWrap");
      if (LayerPopup.has(e.target).length === 0) {
          LayerPopup.fadeOut(150);
      }
  });
  

});




$(document).ready(function () {
    $('.hotelImg').bxSlider({
        speed: 900,
        mode: 'fade',
        pager: false
    });
});



$(document).ready(function () {
    $('.roomSlide').flexslider({
        controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
        prevText: "   ",           //String: Set the text for the "previous" directionNav item
        nextText: "   ",
    });
});


        $(document).ready(function () {
        var swiper = new Swiper('.swiper-container1', {
            slidesPerView: 3.2,
        spaceBetween: '3%',
            navigation: {
            nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // init: false,
            breakpoints: {
            1280: {
            slidesPerView: 3,
        //spaceBetween: '3%',
    },
                520: {
            slidesPerView: 1.5,
        //spaceBetween: '4%',
    }
}
});
    });

