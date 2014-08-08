(function ($, marksy, window, document) {

    marksy.library = function (module) {
        $(function () {
            if (module.init) {
                module.init();
            }
        });

        return module;
    };

    marksy.globals = marksy.library({
        init: function () {

            this.menuOpen();
			this.iosFixes();
			this.safariFixes();
			//this.devTools();

        },
        menuOpen: function () {
			$('.menu-icon').click(function() {
				$('body').toggleClass('menu-open');
			});
			$('nav h1 a, nav li').click(function(){
				setTimeout(function(){
					$('body').removeClass('menu-open');
				}, 1500);
			});
        },
		iosFixes: function () {
			
			var iOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);
 
			if (iOS) {
			  $('html').addClass('mobile-safari');
			  	
			  //fix logo size
	  			function fixLogoSize() {
	  				window.addEventListener('resize', function () {
	  					$('nav h1').hide().show();
	  				});
	  			};
	  			fixLogoSize();
			  
			} else {
			}
		},
		// need to fix Safari's inability to resize VW font units, grrr
		safariFixes: function () {
			var safari = (navigator.userAgent.match(/(^(?!.*Chrome).*Safari.*$)/g) ? true : false);
			
			var waitForFinalEvent = (function () {
				var timers = {};
				return function (callback, ms, uniqueId) {
					if (!uniqueId) {
						uniqueId = "dont call this twice without a uniqueId";
					}
					if (timers[uniqueId]) {
						clearTimeout(timers[uniqueId]);
					}
					timers[uniqueId] = setTimeout(callback, ms);
				};
			})();

			if (safari) {
				$(window).resize(function(){
					waitForFinalEvent(function() {
						console.log('resize ')
						$('nav h1').css('z-index','1');
					}, 100, 'header');
				});
			}
		},
		devTools: function () {
			var viewportX=$(window).width();var viewportY=$(window).height();var docY=$(document).height();$("body").append('<div id="dev-tools"></div>');$("#dev-tools").css("display","block").html('<span class="alt-color">width:</span>'+viewportX+'px <span class="alt-color">height:</span>'+viewportY+'px <span class="alt-color">docHeight:</span> '+docY+"px");$(window).resize(function(){var e=$(window).width();var t=$(window).height();var n=$(document).height();$("#dev-tools").css("display","block").html('<span class="alt-color">width:</span>'+e+'px <span class="alt-color">height:</span>'+t+'px <span class="alt-color">docHeight:</span> '+n+"px")});$("#dev-tools").hover(function(){$(this).toggleClass("switch")},function(){})
		}
    });


} (jQuery, this.marksy = this.marksy || {}, this, document));