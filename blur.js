

$(function(){
	$('.card-body').hover(function(){
		$('#row').addclass('blur');
	},function(){
		$('#row').removeclass('blur');
	});
});