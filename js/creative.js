(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('.mk-accordion-wrapper .mk-carousel-container').each(function(){
	 $(this).magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
		  enabled: true,
		  navigateByImgClick: true,
		  preload: [0, 1]
		},
		image: {
		  titleSrc: 'title',
		  tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
		}
	  });
  });

  
})(jQuery); // End of use strict


function searchProduct(productSearch, sectionId){
	cancelSearchProduct(sectionId);
	$('#' + sectionId + ' .mk-accordion-wrapper .mk-search').each(function(){
		var productSearchLcase = productSearch.toString().toLowerCase();
		var productName = $(this).attr("data-product-name");
		productName = productName.toLowerCase();
		if(productName.indexOf(productSearchLcase) >= 0){
			//$(this).show();
			$(this).parent().prev().css('background-color', '#dbc975');
			
			var currentCount=$(this).parent().attr('data-search-count');
			currentCount=parseInt(currentCount, 10)+1;
			$(this).parent().attr('data-search-count',currentCount);
		}else{
			$(this).remove();
		}
	});
	
	//setting the count in text
	$('#' + sectionId + ' .mk-accordion-wrapper .mk-carousel-container').each(function(){		
		var currentCount=$(this).attr('data-search-count');
		$(this).prev().find('.mk-display-count').html('(' + currentCount + ')');	
	});
}

function cancelSearchProduct(sectionId){
	//reuse the clone which is complet
	$( "#" + sectionId + " div.mk-accordion-wrapper" ).replaceWith( $( "#" + sectionId + " div.mk-accordion-wrapper-clone" ).clone(true,true).attr('class','mk-accordion-wrapper') );

	  // Magnific popup calls
  $('#' + sectionId + ' .mk-accordion-wrapper .mk-carousel-container').each(function(){
	 $(this).magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
		  enabled: true,
		  navigateByImgClick: true,
		  preload: [0, 1]
		},
		image: {
		  titleSrc: 'title',
		  tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
		}
	  });
  });
}

/*search clear icon*/
$('.has-clear input[type="text"]').on('input propertychange', function() {
  var $this = $(this);
  var visible = Boolean($this.val());
  $this.siblings('.form-control-clear').toggleClass('hidden', !visible);
}).trigger('propertychange');

$('.form-control-clear').click(function() {
  $(this).siblings('input[type="text"]').val('')
    .trigger('propertychange').focus();
});
/*************/

function showNewsDiv(){
	$(".mk-maximized-news").css("visibility","visible");
	$(".mk-maximized-news").css("max-height","100%");
	$(".mk-maximized-news").css("max-width","100%");
	
	$(".mk-minimized-news").css("visibility","hidden");
	$(".mk-minimized-news").css("max-height","0px");
	$(".mk-minimized-news").css("max-width","0px");
	
	$(".mk-maximized-news").addClass("mk-maximized-news-animate");
}

function hideNewsDiv(){
	$(".mk-maximized-news").css("visibility","hidden");
	$(".mk-maximized-news").css("max-height","0px");
	$(".mk-maximized-news").css("max-width","0px");
	$(".mk-maximized-news").removeClass("mk-maximized-news-animate");
	
	$(".mk-minimized-news").css("visibility","visible");
	$(".mk-minimized-news").css("max-height","100%");
	$(".mk-minimized-news").css("max-width","100%");
}

$(document).ready(function(){
	 setTimeout(function() { 
       showNewsDiv();
    }, 2000);
});
	