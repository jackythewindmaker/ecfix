$(function(){
	$(".plan-selector").click(function(e){
		e.preventDefault();
		$("#form-plan").val($(this).data('plan'));
		$("#choose-plan-form").submit();
	})
})