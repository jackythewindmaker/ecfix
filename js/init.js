var isMobile = mobileAndTabletcheck();

$(function(){
	if(isMobile) $('body').addClass('isMobile');

	$(window).resize(function(){
		
	}).trigger('resize');
})
$(window).on('load', function() {
	$(".preload").removeClass("preload");
	$(".anim").addClass("ready");
})





















