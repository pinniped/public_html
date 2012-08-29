$(document).ready(function() {

	// variables
	var slideshow = $('#property .gallery');
	var tooltip = $('.tooltip');
	var address = $('.property_text .address').html();
	var selector_tooltip = "#property .gallery img, #property .gallery_pager img";
	
	$('#property .gallery').cycle({ // initialize slideshow, this also builds the pager, and as such needs to be the first thing that happens for the remaining to execute correctly
		next: '.controls .forward',
		prev: '.controls .back',
		pager: '.gallery_pager .images',
		timeout: 5000,
		speed: 1000,
		pause: 1,
		// callback fn that creates a thumbnail to use as pager anchor 
		pagerAnchorBuilder: function(idx, slide) { 
			return '<img class="thumbnail" src="' + slide.src + '" alt="' + slide.alt + '" />'; 
		} 
	});	
	$('.controls .slideshow_toggle').click(function(e){
		e.preventDefault();
		if ($(this).hasClass('pause')){
			slideshow.cycle('pause');
			$(this).removeClass("pause");
			$(this).addClass("play");
			$(this).attr("title","Play Slideshow");
		}
		else if ($(this).hasClass('play')){
			slideshow.cycle('resume');
			$(this).removeClass("play");
			$(this).addClass("pause");
			$(this).attr("title","Pause Slideshow");
		}
	});
	
	$(selector_tooltip).hover(function(){ // display the tooltip, change the contents on hover
		var alt = $(this).attr("alt");
		if (alt != '' || typeof(alt) == undefined){
			tooltip.show();
		}
		tooltip.html($(this).attr("alt"));
	},
	function(){ // hide it on hoverout
		tooltip.hide();
	});
	$(selector_tooltip).mousemove(function(event){ //tooltip follows user mouse position
		var button = $(this);
		var offset = button.offset();
		tooltip.css({
			"left": event.clientX + 15,
			"top": event.clientY + 15
		});
	});	

	var address = $('.address').text().replace(/^\s+|\s+$/g,"").replace(/\n/g," ").replace(/ +(?= )/g,'');
	// google map functionality:
	$("#gmaplink").click(function(event) {
		event.preventDefault();
		$("#gmap_container iframe").attr("src", "http://maps.google.com/maps?q="+escape(address)+"&ie=UTF8&z=14&output=embed");
		slideshow.hide();
		$('#gmap_container').show();		
	});
	$('.gallery_pager .images img').click(function(e){
		e.preventDefault();
		$('#gmap_container').hide();
		slideshow.show();
	});
	
	
});

