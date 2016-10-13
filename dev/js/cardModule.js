(function($){
  var js = window.js || (window.js = {});

  js.cardModule = function(root, params){
    this.root = $(root);

    this.init();
  };

  js.cardModule.prototype = {
    init: function(){
      //global vars
      this.project = this.root.find('.project-card');
      this.projectsContainer = $('.project-list');

      //events
      this.events();
    },

    events:function() {
      this.root
        .on('click', '.project-card', $.proxy(this.onclick_flipCard, this));
    },

    onclick_flipCard: function(e) {
      console.log("test")
      e.preventDefault();
      this.project.on('click',function(){
        $(this).toggleClass("clicked")
      });
    }
  };
})(jQuery);
