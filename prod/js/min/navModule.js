!function(i){var o=window.js||(window.js={});o.navModule=function(o,n){this.root=i(o),this.init()},o.navModule.prototype={init:function(){this.portfolioContainer=i("portfolio-container"),this.projectsContainer=this.portfolioContainer.find(".project-list"),this.events()},events:function(){this.root.on("click",i.proxy(this.onclick_hideLanding,this)).on("click",i.proxy(this.onclick_showPortfolio,this)).on("click",i.proxy(this.onclick_transitionNav,this))},onclick_hideLanding:function(i){i.preventDefault()},onclick_showPortfolio:function(i){i.preventDefault()},onclick_transitionNav:function(i){i.preventDefault()}}}(jQuery);