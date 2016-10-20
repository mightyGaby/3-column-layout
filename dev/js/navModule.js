(function($){
  var js = window.js || (window.js = {});

  js.navModule = function(root, params){
    this.root = $(root);

    this.init();
  };

  js.navModule.prototype = {
    init: function(){
      //global vars
      this.portfolioContainer = $('portfolio-container');
      this.projectsContainer = this.portfolioContainer.find('.project-list');
      //events
      this.events();
    },

    events: function() {
      this.root
        .on('click', $.proxy(this.onclick_hideLanding, this))
        .on('click', $.proxy(this.onclick_showPortfolio, this))
        .on('click', $.proxy(this.onclick_transitionNav, this));
    },

    onclick_hideLanding: function(e) {
      e.preventDefault();

      // this.root.find('div.container').addClass('slideOutDown');
      // this.globalNav.removeClass('navbar-fixed-top').addClass('navbar-fixed-bottom');
      // $('h3.navbar-brand').addClass('animated fadeInUp');
      // $('span.animated').addClass('fadeOutUp');
    },
    
    onclick_showPortfolio: function(e){
      e.preventDefault();
    },
    
    onclick_transitionNav: function(e){
      e.preventDefault();
    }
  };
})(jQuery);
