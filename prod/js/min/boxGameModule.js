!function(t){var o=window.js||(window.js={});o.boxGameModule=function(o,i){this.root=t(o),this.init()},o.boxGameModule.prototype={init:function(){this.box=t(".box"),this.gaby=t("img"),this.boxWidth=this.box.width(),this.events()},events:function(){this.root.on("mousemove","html",t.proxy(this.moveImage,this))},moveImage:function(t){this.gaby.css("top",t.pageY).css("left",t.pageX)}}}(jQuery);