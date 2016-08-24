!function(i){"use strict"
i.fn.slider=function(t){var n=i.extend(i.fn.slider.defaultOptions,t),e=function(){var t=i(this),e=t.width()
if(t.find(".image img").css("width",e+"px"),t.find(".left.image").css("width",Math.floor(e*n.initialPosition)),n.showInstruction){var s=null
s=i("div.instruction"),0===s.length&&(s=i("<div></div>").addClass("instruction").append("<p></p>"),t.append(s)),s.children("p").text(n.instructionText),s.css("left",100*(n.initialPosition-s.children("p").width()/(2*e))+"%")}},s=function(t){t.preventDefault(),i(t.currentTarget).children(".instruction").hide()
var n
n=t.type.startsWith("touch")?t.originalEvent.touches[0].clientX-t.originalEvent.layerX:void 0===t.offsetX?t.pageX-t.originalEvent.layerX:t.offsetX,n<=i(this).width()&&i(this).find(".left.image").css("width",n+"px")},o=function(t){t.preventDefault(),i(this).css("cursor","ew-resize").on("mousemove.sliderns",s).on("touchmove.sliderns",s)},r=function(t){t.preventDefault(),i(this).css("cursor","normal").off("mousemove.sliderns").off("touchmove.sliderns")},c=function(){return i(".slider.responsive").each(e)}
return i(window).on("resize",c),this.each(e).on("click touchstart",s).on("mousedown touchstart",o).on("mouseup touchend",r)},i.fn.slider.defaultOptions={initialPosition:.5,showInstruction:!0,instructionText:"Click and Drag"}}(jQuery)
