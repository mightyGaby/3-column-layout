(function($){
  var js = window.js || (window.js = {});

  js.splashModule = function(root, params){
    this.root = $(root);

    this.init();
  };

  js.splashModule.prototype = {
    init: function(){
      //global vars
      this.projectNav = $('.nav.landing');
      this.globalNav = this.root.find('.navbar');
      this.projectsContainer = $('.project-list');
      this.portfolioContainer = $('.portfolio-container');

      //events
      this.events();
    },

    events:function() {
      this.root
        .on('click', 'a.show-all-projects', $.proxy(this.onclick_hideLanding, this))
        .on('click', 'a.show-all-projects', $.proxy(this.onclick_showPortfolio, this))
        .on('click', 'a.show-all-projects', $.proxy(this.onclick_transitionNav, this));
    },

    onclick_hideLanding: function(e) {
      e.preventDefault();
      this.root.addClass('collapsed');
      // this.root.find('div.container').addClass('slideOutDown');
      // this.globalNav.removeClass('navbar-fixed-top').addClass('navbar-fixed-bottom');
      // $('h3.navbar-brand').addClass('animated fadeInUp');
      // $('span.animated').addClass('fadeOutUp');
      this.scrollToSelected($('body'), this.portfolioContainer);
    },
    
    onclick_showPortfolio: function(e){
      e.preventDefault();
      this.projectsContainer.removeClass('hidden');
      this.projectsContainer.find('ul').addClass('slideInUp');
      this.portfolioContainer.removeClass('container').addClass('full-height');
    },
    onclick_transitionNav: function(e){
      e.preventDefault();
      this.projectNav.addClass('project-nav').removeClass('landing');
    },
    scrollToSelected: function(container, item){
      var container = container,
          scrollTo = item;

      container.animate({
          scrollTop: 52
      });
    }
  };
})(jQuery);
