$(document).ready(function () {
	$('body').hide().fadeIn(1000);
});
 
$(document).ready(function () {

	$('#go').click(function () {
		$('#navbar_div').css('top','0px');
		$(this).fadeOut(900);
		$('#gocircle').css({'background-color':'#ffffff'});
	});
	
});



	/*	
	
	
	$(document).ready(function() {
   alert('hi');
	});
	
	
	
	$('#name').css("background-image","url('images/a_color.png')");     use mouse enter leave, or hover over outer div to change background image back
	
		$(document).ready(function() {
	$('.namelink').hover(function () {
		$('#name').css({"background-position":"center 21px","-webkit-transition":"background-image .3s cubic-bezier(0, .5, 1, 1)","background-image":"url('images/a_color.png')"})
		},function() {
		$('#name').css({"-webkit-transition":"background-image .3s cubic-bezier(0, .5, 1, 1)","background-image":"url('images/a_color0g.png')"});
		})
});

	
	
	
	*/