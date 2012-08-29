$(document).ready(function() {

	// variables
	var slideshow = $('#features .slideshow .wrapper');
	var info = $("#features .feature_information");
	var active = 0;

	var property_info = [];
	function createInfo(){
		slideshow.find("a").each(function(){
			var data = $(this).data("property");
			data.href = $(this).attr("href");
			property_info.push(data);
		});
	};
	createInfo(); // initialize
	function setData(address, price, href) {
		info.find(".address").html(address);
		info.find(".price").html(price);
		info.find(".link a").attr("href",href);
	};
	
	
	function onBefore(){
		//console.log("onBefore");
		active = this.id - 1;
		info.find("p").fadeOut(250, function(){
			nextProperty = property_info[active];	
			setData(nextProperty.address, nextProperty.price, nextProperty.href);		
		});
	};
	
	function onAfter(){
		//console.log("onAfter");
		info.find("p").fadeIn(250);
	};


	slideshow.cycle({ // initialize
		next: '.controls .forward',
		prev: '.controls .back',
		timeout: 5000,
		speed: 1000,
		pause: 1,
		before: onBefore,
		after: onAfter
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
	
	$(".livechat").cycle({
		timeout: 5000,
		speed: 1000
	});
	
	/* their g chatback badges */
	/*
	var agents = ["http://www.google.com/talk/service/badge/Start?tk=z01q6amlq5jk3hpqumoll3ofn8t6dogho7de3f83thhcsd8ollaquu46g8tbj0lj9msidmek1ds6tgh6behlf1tj6ok01h483ldje60qg3jes54mfaofcpdg37l89s5k5mbjf8pgtl2q6mu3oeinrc3l93pfj5kk0jco2u7vd",
				"http://www.google.com/talk/service/badge/Start?tk=z01q6amlqfmgata6ujhl2j9qboskl7j2m1p4f7qalao83cspsljbp8ocsntn21l15qirfgfk5tdddbj0c5od8rndvtbs90si3s4d1j6up38sb3hl8jlb2ouoos5u943gbmb22fkvdamtpqkiie1pvmgnps1ggehd6a7uf6ilk63a9hv0nvcnb0nsjvns4s5918k"];
	function _click(b){
		var a;
		a=window.ActiveXObject&&window.XMLHttpRequest?!1:!0;
		a="status=0,scrollbars=0,menubar=0,statusbar=0,resizable=1, width=300,height=500,location="+(a?"1":"0");
		window.open(b,"",a)
	};
	$(".chat").click(function(e){
		e.preventDefault();
		var random = Math.floor(Math.random()*agents.length)
		_click(agents[random]);
	});
	*/
});