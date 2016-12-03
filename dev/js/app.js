(function($) {

	var js = window.js || (window.js = {});

	js.app = {
		init: function() {
            this.initComponents();
		},
      initComponents: function(){
          // splash page component
          $(".portfolio-container").each(function(i, el){
              new js.portfolioModule(el);
          });

          // project navigation component
          $(".tab-module").each(function(i, el){
              new js.tabModule(el);
          });

          // about me
          $(".box-container").each(function(i, el){
              new js.boxGameModule(el);
          });

          // $(".navbar-nav").each(function(i, el){
          //     console.log("test")
          // });
        
          // card animations component
          // $(".project-list").each(function(i, el){
          //     new js.cardModule(el);
          // });
      }
    };

    // kickoff app
    $(document).ready($.proxy(js.app.init, js.app));

})(jQuery);
