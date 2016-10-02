(function($){
	var js = window.js || (window.js = {});

	js.carouselModule = function(root, params){
		this.root = $(root);

		this.init();
	};

	js.carouselModule.prototype = {
		init: function(){
			//global vars
			this.slide = this.root.find('.slide');
			this.paginationTotal = $('.pagination').find('.total');
			this.paginationIndex = $('.pagination').find('.index');

		    //setup
		    this.setup();

			//events
			this.events();
		},

		setup: function() {
			this.paginationTotal.html(this.slide.length);

			this.root.find('.carousel').slick({
		        arrows: true,
		        appendArrows: $('.pagination'),
		        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous">&#x3c;&#x3c;</button>',
	            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next">&#x3e;&#x3e;</button>',
		        dots: false,
				infinite: false,
				speed: 300,
				slidesToShow: 1,
				centerMode: true,
  				variableWidth: true
		    });

		    setTimeout(function(){
				$('.pagination').fadeIn(500);
			}, 300);

		    this.animation();
		},

		events:function() {
			this.root
				.on('afterChange', $.proxy(function(event, slick, currentSlide, nextSlide){
					this.updatePagination(currentSlide);
					this.updateArrows(currentSlide);
				}, this))
				.on('click', '.connect', $.proxy(this.onclick_scrollTo, this));
		},

		onclick_scrollTo: function(e) {
			e.preventDefault();
		},

		updateArrows: function(currentSlide) {
			var slideCount = currentSlide + 1,
				totalCount = $('.slide').length;
		},

		updatePagination: function(currentSlide) {
			this.paginationIndex.html(currentSlide + 1);
		},

		animation: function() {
			this.root.find('.slide').each(function(i, el){	
				setTimeout(function(){
					$(el).removeClass('outofview');
				}, i * 300);
			});
		}
	};
})(jQuery);