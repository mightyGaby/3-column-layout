!function(t){var i=window.js||(window.js={});i.splashModule=function(i,n){this.root=t(i),this.init()},i.splashModule.prototype={init:function(){this.nav=t(".project-nav"),this.navItem=this.nav.find(".nav-item"),this.descContainer=this.root.find(".project-desc"),this.projectsContainer=t(".project-list"),this.events()},events:function(){this.root.on("click",".show-all-projects",t.proxy(this.onclick_hideLanding,this))},onclick_hideLanding:function(i){i.preventDefault(),this.root.hide(),this.nav.removeClass("hidden"),this.projectsContainer.removeClass("hidden"),t(".project-card ").on("click",function(){t(this).toggleClass("clicked")})}}}(jQuery);