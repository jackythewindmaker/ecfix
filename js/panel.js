$(function(){
	$('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true,
		gutter: 15
	})
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
})