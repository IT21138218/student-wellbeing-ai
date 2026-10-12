/*
	Cosmix by TEMPLATE STOCK
	templatestock.co @templatestock
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/


 /* ==============================================
  	 Main-Slider
  	=============================================== */ 
$(document).ready(function() {
 
  var owl = $("#owl-slider");
 
  owl.owlCarousel({
 autoPlay: 3000, //Set AutoPlay to 3 seconds
    singleItem : true,
    transitionStyle : "fade"
  });
 
});


 /* ==============================================
  	  Progress Bar
  	=============================================== */ 
		$('.experience').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$.each($('div.progress-bar'),function(){
				$(this).css('width', $(this).attr('aria-valuemax')+'%');
			});
			$(this).unbind('inview');
		}
	});

	
 /* ==============================================
  	 Preloader
  	=============================================== */ 

	(function () {
	    var loaderStart = Date.now();
	    var MIN_SHOW = 2200; // keep the branded loader on screen at least this long
	    function hideLoader() {
	        var wait = Math.max(0, MIN_SHOW - (Date.now() - loaderStart));
	        setTimeout(function () {
	            $('#preloader').fadeOut(600, function () { $(this).remove(); });
	        }, wait);
	    }
	    $(window).load(hideLoader);
	    // safety net if load already fired / is slow
	    setTimeout(hideLoader, 6000);
	}());

/* ==============================================
  	 Pretty Photo
  	=============================================== */

     $("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});
 
 /* ==============================================
  	  WOW Javascripts 
  	=============================================== */ 

 new WOW().init();

 /* ==============================================
  	  Testimonials
  	=============================================== */ 


$(document).ready(function() {
 
  var owl = $("#owl-testi");
 
  owl.owlCarousel({
    // autoPlay: 5000, //Set AutoPlay to 3 seconds
    singleItem : true,
    transitionStyle : "fade"
  });
 
});
 
 
 /* ==============================================
  	  Smooth Scroll
  	=============================================== */ 
	
	
    $(function() {
      $('a.scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top -50
            }, 1000);
            return false;
          }
        }
      });
    });
	


 /* ==============================================
  	  Navbar-Fixed-Top
  	=============================================== */ 
	
	
 $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar').addClass('on');
        } else {
            $('.navbar').removeClass('on');
        }
    });


 /* ==============================================
  	 ToolTip
  	=============================================== */ 
	
	$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
	

 /* ==============================================
  	  Nice Scroll
  	  Removed: the jquery.nicescroll.js plugin file was never included
  	  in index.html's <script> tags, so this call threw "niceScroll is
  	  not a function" on every page load - an uncaught error that could
  	  abort any code after it in this file.
  	=============================================== */

/* ==============================================
  	  Count
  	=============================================== */ 

    $('#fun-facts').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$(this).find('.timer').each(function () {
				var $this = $(this);
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	});
	
	
	/* ==============================================
  	  Clients
  	=============================================== */
	
	
    var owl = $("#client-slider");

    owl.owlCarousel({

        itemsCustom: [
            [0, 2],
            [450, 3],
            [600, 3],
            [700, 4],
            [1000, 5],
            [1200, 5],
            [1400, 5],
            [1600, 5]
        ],
        pagination: false,
       autoPlay: 3000, //Set AutoPlay to 3 seconds

    });
	

	/*====================================
    Portfolio Isotope Filter
    ======================================*/
	
	$(window).load(function(){'use strict';
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});
		
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});
	
	
/*====================================
    Fullscreen burger menu
 ======================================*/
	  $(".menu-trigger, .mobilenav").click(function () {
    $(".mobilenav").fadeToggle(500);
  });
  $(".menu-trigger, .mobilenav").click(function () {
    $(".top-menu").toggleClass("top-animate");
    $(".mid-menu").toggleClass("mid-animate");
    $(".bottom-menu").toggleClass("bottom-animate");
  });


  /* ========================================================================
     On click menu item animate to the section
   ========================================================================== */
  $(".mobilenav li, .back-to-top").on('click', function() {
    var target = $(this).data('rel');
    var $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing');
  });


	/*====================================
       Index-03-Main-Slider
    ======================================*/
	
$(document).ready(function() {
 
  $("#owl-main-slider").owlCarousel({
 
       autoPlay: 3000, //Set AutoPlay to 3 seconds
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});
	
	
	
	 /* ==============================================
  	     Parallex-javascript
  	     Removed: the jquery.stellar.js plugin file was never included
  	     in index.html either, so these calls threw "stellar is not a
  	     function" on every page load - same class of bug as niceScroll.
  	=============================================== */


	 /* ==============================================
  	      Index-05-text-Slider
  	=============================================== */
	$(document).ready(function() {
 
  $("#owl-text-slider").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});
	