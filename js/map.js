$(document).ready(function(){
	$('.map').maphilight({
		stroke: false,
		fillColor: 'ffffff',
		fillOpacity: 0.5,
		groupBy: 'rel'	
	});
	
	// temporarily adds data-'x' to source code
	/*
	$('area').click(function(event){
		event.preventDefault();
		var name = prompt("Please enter the name: ");
		$(this).attr("data-name", name);
		$(this).maphilight();
	});
	*/
	$('area').hover(function(){ // hoverin: update info pane
		var name = $(this).data("name");
		var about = $(this).data("about");	
		$('span.name').text(name);
		$('span.about').text(about);
	},function(){ //hoverout:
		
	});
});
