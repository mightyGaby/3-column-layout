(function($) {

	var js = window.js || (window.js = {});

	js.app = {
		init: function() {
            this.initComponents();
		},
        initComponents: function(){

            // carousel component
            $(".carousel-module").each(function(i, el){
                new js.carouselModule(el);
            });

            // tab component
            $(".tab-module").each(function(i, el){
                new js.tabModule(el);
            });
        }
    };

    // kickoff app
    $(document).ready($.proxy(js.app.init, js.app));

})(jQuery);
