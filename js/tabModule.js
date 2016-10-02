(function($){
	var js = window.js || (window.js = {});

	js.tabModule = function(root, params){
		this.root = $(root);

		this.init();
	};

	js.tabModule.prototype = {
		init: function(){
			//global vars
			this.navItem = this.root.find('.nav-item');
			this.descItem = this.root.find('.desc-item');
      this.projectsContainer = this.root.find('.project-list');
      this.projectCard = this.root.find('.project-card');
		    //setup
		    // this.setup();

			//events
			this.events();
		},

		// setup: function() {
		// 	setTimeout($.proxy(function(){
		//  		this.descItem.first().removeClass('outofview');
		//  	}, this), 600);
		// },

		events:function() {
			this.root
				.on('click', '.nav-item', $.proxy(this.onclick_showProjects, this))
        .on('click', '.project-card', $.proxy(this.onclick_showDetails, this));

		},

		onclick_showProjects: function(e) {
			e.preventDefault();

			var navItem = $(e.currentTarget),
				  itemCategory = navItem.attr('data-category');

      this.showProjects(navItem, itemCategory);
		},

    onclick_showDetails: function(e) {
      e.preventDefault();

      var projectItem = $(e.currentTarget),
          itemIndex = projectItem.attr('data-desc-index');

      this.showDetails(itemIndex);
      this.scrollToSelected(this.projectsContainer, projectItem);
      this.collapseProjects();
    },

    scrollToSelected: function(container, item){
      var container = container,
          scrollTo = item;

      this.root.find('.selected').removeClass('selected');
      item.addClass('selected');
      container.animate({
          scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
      });
      // container.scrollTop(
      //     scrollTo.offset().top - container.offset().top + container.scrollTop()
      // );
    },

    collapseProjects: function() {
        this.projectsContainer.removeClass('col-sm-9 col-md-10').addClass('col-sm-4 col-md-4');
        this.projectCard.each(function(){
          $(this).removeClass('col-sm-6 col-md-4 col-lg-3').addClass('col-sm-12 col-md-6')
        });
    },

    showProjects: function(navItem, category) {
      var deselectProjectCard = this.root.find('.project-card.highlighted'),
          selectProjectCard = this.root.find('.project-card.' + category);

      deselectProjectCard.removeClass('highlighted');
      selectProjectCard.addClass('highlighted');
    },

    showDetails: function(index){
      var hideProjectDetails= this.root.find('.desc-item'),
          showProjectDetails = this.root.find('.desc-item[data-desc-index="'+ index + '"]');

      hideProjectDetails.addClass('outofview');
      showProjectDetails.removeClass('outofview');
    }

		// animation: function() {
		// 	this.root.find('.slide').each(function(i, el){	
		// 		setTimeout(function(){
		// 			$(el).removeClass('outofview');
		// 		}, i * 300);
		// 	});
		// }
	};
})(jQuery);
