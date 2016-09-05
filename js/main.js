
$(document).ready(function(){



  $('.btn-drop').on('click', function() {
    $('.navigation').slideToggle();
  });

  $('.slider').bxSlider({
    controls: true, 
    pager: false,
		// slideWidth: 940,
    adaptiveHeight: true,
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1
  });

// $("#owl-demo").owlCarousel({
//       navigation : true, // Show next and prev buttons
//       slideSpeed : 300,
//       paginationSpeed : 400,
//       singleItem: false,
//       items: 4,
//       pagination : true,
//       itemsDesktop : [1920,4],
//       navigationText: false,
//       // autoPlay: 20000,
//       // "singleItem:true" is a shortcut for:
//       // items : 1, 
//       // itemsDesktop : false,
//       // itemsDesktopSmall : false,
//       // itemsTablet: false,
//       // itemsMobile : false
//     mouseDrag : false,
//     touchDrag : false

//   });  

 //    $("a.modal-form").fancybox({
 //       'hideOnContentClick': true,
 //          minWidth : 230,
 //          padding : 0,
 //          closeBtn : true
 
 // });

$('.navigation a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top 
        }, 600);
    }

});

//  jQuery(function($){ 
//    $(".phone_mask_1").mask("+7(999) 999-9999");
//    $("#phone_mask_2").mask("+7(999) 999-9999");
// });



});


  $(window).on('load resize', function(e) {
    if ( $(document).width() <= 752 ) {

      $(document).bind('click.mynamespace', function(e) {
        if(!$(e.target).is('.btn-drop, .navigation li, .top')) {
          $('.navigation').slideUp();
        }
      });

    }
    else {
      $(document).unbind('click.mynamespace');
      console.log('q');

    }
  });

