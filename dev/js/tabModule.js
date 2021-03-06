(function($){
	var js = window.js || (window.js = {});

	js.tabModule = function(root, params){
		this.root = $(root);

		this.init();
	};

	js.tabModule.prototype = {
		init: function(){
			//global vars
      this.landing = this.root.find('div.landing');
      this.nav = this.root.find('.nav');
			this.navItem = this.root.find('.nav-item');
      this.descContainer = this.root.find('.project-desc');
			this.descItem = this.root.find('.desc-item');
      this.projectsContainer = this.root.find('.project-list');
      this.projectCard = this.root.find('.project-card');

			//events
			this.events();
		},

		events:function() {
			this.root
				.on('click', '.nav-item', $.proxy(this.onclick_highlightProjects, this))
        .on('click', '.project-card', $.proxy(this.onclick_showDetails, this))
        .on('click', '.close', $.proxy(this.onclick_hideDetails, this));
		},

    onclick_hideLanding: function(e) {
      e.preventDefault();
      this.landing.hide();
      this.nav.removeClass('landing').addClass('hidden-xs project-nav');
      this.projectsContainer.removeClass('hidden');
    },

		onclick_highlightProjects: function(e) {
			e.preventDefault();

			var navItem = $(e.currentTarget),
				  itemCategory = navItem.attr('data-category');

      this.highlightProjects(navItem, itemCategory);
		},

    onclick_showDetails: function(e) {
      e.preventDefault();

      var projectItem = $(e.currentTarget),
          itemIndex = projectItem.attr('data-desc-index');

      this.showDetails(itemIndex);
      this.selectItem(projectItem);
      this.collapseProjects();
    },

    onclick_hideDetails: function(e) {
      e.preventDefault();
      var closeButton = $(e.currentTarget),
            descItem = closeButton.parents().eq(1);

      this.hideDetails(descItem);
    },

    selectItem: function(item){
      this.root.find('.selected').removeClass('selected');
      item.addClass('selected');
      this.scrollToSelected();
    },

    scrollToSelected: function(){
      var container = this.projectsContainer,
          scrollTo = this.projectsContainer.find('.project-card.selected');
      container.animate({
          // scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
          scrollTop: scrollTo.offset().top - container.offset().top
      }); 
    },

    collapseProjects: function() {
        this.projectsContainer.removeClass('col-sm-9 col-md-10').addClass('col-sm-4 col-md-4');
        this.projectCard.each(function(){
          $(this).removeClass('col-sm-6 col-md-4 col-lg-3').addClass('col-sm-12 col-md-6')
        });
    },

    expandProjectContainer: function() {
      var container = this.projectsContainer;
      this.projectsContainer.addClass('col-sm-9 col-md-10').removeClass('col-sm-4 col-md-4');
      this.projectCard.each(function(){
        $(this).addClass('col-sm-6 col-md-4 col-lg-3').removeClass('col-sm-12 col-md-6')
      });
    },

    highlightProjects: function(navItem, category) {
      var deselectProjectCard = this.root.find('.project-card.highlighted'),
          selectProjectCard = this.root.find('.project-card.' + category);
      deselectProjectCard.removeClass('highlighted');
      selectProjectCard.addClass('highlighted').addClass("animate jello");;
    },

    showDetails: function(index) {
      var hideProjectDetails= this.root.find('.desc-item'),
          showProjectDetails = this.root.find('.desc-item[data-desc-index="'+ index + '"]');

      this.descContainer.attr('aria-hidden', 'false');
      hideProjectDetails.addClass('outofview');
      showProjectDetails.removeClass('outofview');
    },

    hideDetails: function(container) {
      container.addClass('outofview');
      this.descContainer.attr('aria-hidden', 'true');
      this.expandProjectContainer();
    }
	};
})(jQuery);
