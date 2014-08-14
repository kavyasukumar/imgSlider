$(document).ready(function(){
	$('.slider').slider();
});

(function ($){
	$.fn.slider = function(options){

		//default options
		var settings = $.extend($.fn.slider.defaultOptions, options);

		var init = function(){
			var $width = $(this).width();
			$(this).find('.image img').css('width' , $width + 'px');
			$(this).find('.left.image').css('width' , Math.floor($width * settings.initialPosition));
		}

		var slideResize = function(e){
			e.preventDefault();
			$(this).find('.left.image').css('width',
				e.offsetX==undefined ? e.pageX-e.currentTarget.offsetLeft : e.offsetX + 'px');
			console.log('resized')
		}

		var enableSliderDrag = function(e){
			e.preventDefault();
			$(this).css('cursor' , 'ew-resize')
				.on('mousemove.sliderns', slideResize);
		}

		var disableSliderDrag = function(e){
			e.preventDefault();
			$(this).css('cursor', 'normal')
				.off('mousemove.sliderns');
		}

		var redrawSlider = function(e){
			console.log('redrew');
			return $('.slider.responsive').each(init);					
		}
		
		$(window).on('resize', redrawSlider);
		return this.each(init)
			.on(settings.triggerEvents,slideResize)
			.on("mousedown", enableSliderDrag)
			.on("mouseup", disableSliderDrag);
			
	};

	$.fn.slider.defaultOptions= {
			triggerEvents: "touchstart click",
			initialPosition: .5
	};	

}(jQuery));