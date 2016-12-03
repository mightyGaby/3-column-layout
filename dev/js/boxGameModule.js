// (function($){
//   var js = window.js || (window.js = {});

//   js.boxGameModule = function(root, params){
//     this.root = $(root);

//     this.init();
//   };

//   js.boxGameModule.prototype = {
//     init: function(){
//       //global vars
//       this.box = $('.box');
//       this.gaby = $('img');
//       this.boxWidth = this.box.width();

//       //events
//       this.events();
//     },

//     events:function() {
//       this.root
//         .on('mousemove', $.proxy(this.moveImage, this));
//     },


//     $( ".container" ).mousemove(function( event ) {
//       var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
//       var top = event.clientY;
//       var left = event.clientX;
//       var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
//       $( "span:first" ).text( "( event.clientX, event.clientY ) : " + clientCoords );
//       setBoxPosition(left, top);
//     });

//     // function setBoxPosition(x, y){
//     //     var boxLeft = getBoxCoords().left + (boxWidth/2);
//     //     var boxTop = getBoxCoords().top;
//     //     if(Math.abs(boxLeft-x)<= 30){
//     //       $('.box').css('left', setXCoord());
//     //     }
//     //     if(Math.abs(boxTop-y) <= 20){
//     //       $('.box').css('top', setYCoord());
//     //     }
      
//     //     $( "span:last" ).text(Math.abs(boxLeft-x))
//     // };

//     // function getTotalSpace(){
//     //   return [document.body.clientWidth, window.innerHeight];
//     // }


//     // function setXCoord(){
//     //   var width = getTotalSpace()[0] - boxWidth;
//     //   return getRandomIntInclusive(0, width);
//     // }

//     // function setYCoord(){
//     //   var height = getTotalSpace()[1] - boxWidth;
//     //   return getRandomIntInclusive(0, height);
//     // }

//     // function getRandomIntInclusive(min, max) {
//     //   min = Math.ceil(min);
//     //   max = Math.floor(max);
//     //   return Math.floor(Math.random() * (max - min + 1)) + min;
//     // }

//     // function getBoxCoords(){
//     //   var position = $('.box').offset()
//     //    var boxTop = position.top;
//     //    return position;
//     // }

//     moveImage: function(e){
//       this.gaby.css('top',e.pageY).css('left',e.pageX);
//     }
//   };
// })(jQuery);
