(function($){
  var js = window.js || (window.js = {});

  js.splashModule = function(root, params){
    this.root = $(root);

    this.init();
  };

  js.splashModule.prototype = {
    init: function(){
      //global vars
      this.nav = $('.project-nav');
      this.navItem = this.nav.find('.nav-item');
      this.descContainer = this.root.find('.project-desc');
      this.projectsContainer = $('.project-list');

      //events
      this.events();
    },

    events:function() {
      this.root
        .on('click', '.show-all-projects', $.proxy(this.onclick_hideLanding, this));
    },

    onclick_hideLanding: function(e) {
      e.preventDefault();
      this.root.hide();
      this.nav.removeClass('hidden');
      this.projectsContainer.removeClass('hidden');
      $(".project-card ").on('click',function(){
        $(this).toggleClass("clicked")
      });
    }
  };
})(jQuery);
