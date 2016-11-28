(function($) {

	var js = window.js || (window.js = {});

	js.app = {
		init: function() {
            this.initComponents();
		},
        initComponents: function(){
            // splash page component
            $(".splash").each(function(i, el){
                new js.splashModule(el);
            });

            // project navigation component
            $(".tab-module").each(function(i, el){
                new js.tabModule(el);
            });

        }
    };

    // kickoff app
    $(document).ready($.proxy(js.app.init, js.app));

})(jQuery);
