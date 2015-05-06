(function ($){
	$.fn.slider = function(options){

		//default options
		var settings = $.extend($.fn.slider.defaultOptions, options);

		var init = function(){
			var $this = $(this);
			var width = $this.width();
			$this.find('.image img').css('width' , width + 'px');
			$this.find('.left.image').css('width' , Math.floor(width * settings.initialPosition));
			if(settings.showInstruction){
				var $instrDiv = $("<div></div>")
				.addClass("instruction")
				.append("<p></p>");

				$instrDiv.children("p")
				.text(settings.instructionText);

				$this.append($instrDiv);	

				//set left offset of instruction
				$instrDiv.css('left', (settings.initialPosition - $instrDiv.children("p").width()/(2*width))*100+'%')
			}			
		}

		var slideResize = function(e){
			e.preventDefault();
			//hide instructions
			$(e.currentTarget).children(".instruction").hide();
			var width = e.offsetX==undefined ? e.pageX-e.currentTarget.offsetLeft : e.offsetX;
			$(this).find('.left.image').css('width',width + 'px');
			console.log('resized')
		}

		var enableSliderDrag = function(e){
			e.preventDefault();
			$(this).css('cursor' , 'ew-resize')
				.on('mousemove.sliderns', slideResize)
				.on('touchmove.sliderns', slideResize);
		}

		var disableSliderDrag = function(e){
			e.preventDefault();
			$(this).css('cursor', 'normal')
				.off('mousemove.sliderns')
				.off('touchmove.sliderns');
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
			triggerEvents: "click",
			initialPosition: .5,
			showInstruction: true,
			instructionText: "Click and Drag"
	};	

}(jQuery));