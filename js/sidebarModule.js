(function($){
	var js = window.js || (window.js = {});

	js.sidebarModule = function(root, params){
		this.root = $(root);

		this.init();

	};

	js.sidebarModule.prototype = {
		init: function() {
            this.nav = $(".sidebar-nav");
            this.navContainer = this.nav.find(".nav-container");
            this.slideContent = this.nav.find(".slide-content");

            this.setup();

            this.events();
        },

        setup: function() {
            var width = window.outerWidth,
                height = window.outerHeight,
                slideLength =  (this.slideContent.length) + 1;

            if(this.navContainer.length) {
                this.navContainer.height(height);
                this.navContainer.width(width);
            } 

            if(this.slideContent.length) {
                this.slideContent.width(width);
            }  

            this.slideContent.each($.proxy(function(i, el){
                $(el).css({
                    "z-index": slideLength - i
                });
            }, this));         
        },

        events: function() {
            this.nav
                .on("click", ".nav-open", $.proxy(this.onclick_openMenu, this))
                .on("click", ".nav-close", $.proxy(this.onclick_closeMenu, this))
        },

        onclick_openMenu: function(e) {
            e.preventDefault();

            var width = window.innerWidth,
                leftPos = width <= 768 ? '70':'30';

            this.slideContent.each($.proxy(function(i, el){
                var top = 10 + i,
                    left = width <= 768 ? leftPos - (i * 4): leftPos - i,
                    height = 80 - (i * 2);

                $(el).animate({
                    top: top + "%",
                    left: left + "%",
                    height: height + "%"    
                });

            }, this));

            this.slideContent.find(".wrapper").each($.proxy(function(i, el){
                 $(el).css({
                    opacity: 1 - (i / 3)
                });
            }, this));
        },

        onclick_closeMenu: function(e) {
            e.preventDefault();

            this.slideContent.animate({
                top: "0",
                left: "0",
                height: "100%"
            });

            this.slideContent.find(".wrapper").css({
                opacity: "1"
            });
        }
	};
})(jQuery);
