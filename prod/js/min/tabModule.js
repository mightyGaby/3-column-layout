!function(t){var e=window.js||(window.js={});e.tabModule=function(e,i){this.root=t(e),this.init()},e.tabModule.prototype={init:function(){this.landing=this.root.find("div.landing"),this.nav=this.root.find(".nav"),this.navItem=this.root.find(".nav-item"),this.descContainer=this.root.find(".project-desc"),this.descItem=this.root.find(".desc-item"),this.projectsContainer=this.root.find(".project-list"),this.projectCard=this.root.find(".project-card"),this.events()},events:function(){this.root.on("click",".nav-item",t.proxy(this.onclick_highlightProjects,this)).on("click",".project-card",t.proxy(this.onclick_showDetails,this)).on("click",".close",t.proxy(this.onclick_hideDetails,this))},onclick_hideLanding:function(t){t.preventDefault(),this.landing.hide(),this.nav.removeClass("landing").addClass("hidden-xs project-nav"),this.projectsContainer.removeClass("hidden")},onclick_highlightProjects:function(e){e.preventDefault();var i=t(e.currentTarget),o=i.attr("data-category");this.highlightProjects(i,o)},onclick_showDetails:function(e){e.preventDefault();var i=t(e.currentTarget),o=i.attr("data-desc-index");this.showDetails(o),this.scrollToSelected(this.projectsContainer,i),this.collapseProjects(),t(".project-card").on("click",function(){t(this).toggleClass("selected")})},onclick_hideDetails:function(e){e.preventDefault();var i=t(e.currentTarget),o=i.parents().eq(1);this.hideDetails(o)},scrollToSelected:function(t,e){var t=t,i=e;this.root.find(".selected").removeClass("selected"),e.addClass("selected"),t.animate({scrollTop:i.offset().top-t.offset().top+t.scrollTop(50)})},collapseProjects:function(){this.projectsContainer.removeClass("col-sm-9 col-md-10").addClass("col-sm-4 col-md-4"),this.projectCard.each(function(){t(this).removeClass("col-sm-6 col-md-4 col-lg-3").addClass("col-sm-12 col-md-6")})},expandProjectContainer:function(){this.projectsContainer;this.projectsContainer.addClass("col-sm-9 col-md-10").removeClass("col-sm-4 col-md-4"),this.projectCard.each(function(){t(this).addClass("col-sm-6 col-md-4 col-lg-3").removeClass("col-sm-12 col-md-6")})},highlightProjects:function(t,e){var i=this.root.find(".project-card.highlighted"),o=this.root.find(".project-card."+e);i.removeClass("highlighted"),o.addClass("highlighted").addClass("animate jello")},showDetails:function(t){var e=this.root.find(".desc-item"),i=this.root.find('.desc-item[data-desc-index="'+t+'"]');this.descContainer.attr("aria-hidden","false"),e.addClass("outofview"),i.removeClass("outofview")},hideDetails:function(t){t.addClass("outofview"),this.descContainer.attr("aria-hidden","true"),this.expandProjectContainer()}}}(jQuery);