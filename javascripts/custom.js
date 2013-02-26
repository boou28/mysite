$(document).ready(function () {
	$('body').hide().fadeIn(1000);
		$('.navbutton a').click(function () {
			$('body').fadeOut(200);
	});
});
 
$(document).ready(function () {
	$('#go').click(function () {
		$('#textwrapper p').fadeOut(800);
		$('#gocircle').fadeOut(800);
		$(this).fadeOut(900);
		var href = $(this).attr('href');
		setTimeout(function() {window.location = href}, 1000);
        return false;
	});
	
});


	/*	
	
$(document).ready(function () {
	$('#twitter_link').hover(
	function () {
			$('h5 + img + img').fadeTo(300, 0);
	},
	function () {
			$('h5 + img + img').fadeTo(300, 1);
	}
	
	
	);

});

	
	
	
	
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