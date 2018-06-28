$(document).ready(function() {
	$('.img_wrapper').hover(function() {
		$(this).find('.img_overlay').css('opacity', '0.5');
		$(this).find('.img_desc').css('opacity', '1');
	}, function() {
		$(this).find('.img_overlay').css('opacity', '0');
		$(this).find('.img_desc').css('opacity', '0');
	})
})