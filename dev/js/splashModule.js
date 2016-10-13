(function($){
  var js = window.js || (window.js = {});

  js.splashModule = function(root, params){
    this.root = $(root);

    this.init();
  };

  js.splashModule.prototype = {
    init: function(){
      //global vars
      this.projectNav = $('.project-nav');
      this.globalNav = this.root.find('.navbar');
      this.projectsContainer = $('.project-list');
      this.portfolioContainer = $('.portfolio-container');

      //events
      this.events();
    },

    events:function() {
      this.root
        .on('click', '.show-all-projects', $.proxy(this.onclick_hideLanding, this))
        .on('click', '.show-all-projects', $.proxy(this.onclick_showPortfolio, this));
    },

    onclick_hideLanding: function(e) {
      e.preventDefault();
      this.root.addClass('collapsed');
      // this.root.find('div.container').addClass('slideOutDown');
      // this.globalNav.removeClass('navbar-fixed-top').addClass('navbar-fixed-bottom');
      // $('h3.navbar-brand').addClass('animated fadeInUp');
      // $('span.animated').addClass('fadeOutUp');
      setTimeout(this.scrollToSelected($('body'), this.portfolioContainer);
    },
    
    onclick_showPortfolio: function(e){
      e.preventDefault();
      this.projectsContainer.removeClass('hidden');
      this.portfolioContainer.removeClass('hidden');
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
