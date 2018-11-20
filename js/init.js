var isMobile = mobileAndTabletcheck();

$(function(){
	if(isMobile) $('body').addClass('isMobile');

	$(".mobile-menu-trigger").click(function(e){
		e.preventDefault();
		if(!$(this).hasClass('opened')){
			$("#sidemenu").addClass("opened");
			$(this).addClass("opened");
		}else{
			$("#sidemenu").removeClass("opened");
			$(this).removeClass("opened");
		}
	})

	$(window).resize(function(){
		
	}).trigger('resize');
})
$(window).on('load', function() {
	$(".preload").removeClass("preload");
	$(".anim").addClass("ready");
})





















