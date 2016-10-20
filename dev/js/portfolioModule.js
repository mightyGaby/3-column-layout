(function($){
  var js = window.js || (window.js = {});

  js.portfolioModule = function(root, params){
    this.root = $(root);

    this.init();
  };

  js.portfolioModule.prototype = {
    init: function(){
      //global vars
      this.projectNav = this.root.find('.nav.landing');
      this.projectsContainer = this.root.find('.project-list');
      //events
      this.events();
    },

    events:function() {
      this.root
        .on('click', '.nav.landing li a', $.proxy(this.onclick_hideLanding, this))
        .on('click', '.nav.landing li a', $.proxy(this.onclick_showPortfolio, this))
        .on('click', '.nav.landing li a', $.proxy(this.onclick_transitionNav, this));
    },

    onclick_hideLanding: function(e) {
      e.preventDefault();
      $('.splash').addClass('collapsed');
      $('.splash').addClass('collapsed fadeOut');

      // this.root.find('div.container').addClass('slideOutDown');
      // this.globalNav.removeClass('navbar-fixed-top').addClass('navbar-fixed-bottom');
      // $('h3.navbar-brand').addClass('animated fadeInUp');
      // $('span.animated').addClass('fadeOutUp');
    },
    
    onclick_showPortfolio: function(e){
      e.preventDefault();
      this.projectsContainer.removeClass('hidden');
      this.projectsContainer.find('ul').addClass('slideInUp');
      this.root.removeClass('container').addClass('full-height');
      this.tuckGlobalNav($('body'), this.root);
    },
    onclick_transitionNav: function(e){
      e.preventDefault();
      this.projectNav.addClass('project-nav').removeClass('landing');
    },
    tuckGlobalNav: function(container, item){
      var container = container,
          scrollTo = item;

      // container.animate({
      //     scrollTop: 52
      // });
    }
  };
})(jQuery);
