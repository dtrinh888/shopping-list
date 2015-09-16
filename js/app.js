$(document).ready(function(){

    $(".add-btn").click(function (){
		var addItem = $('#item-add').val();
		$(".check-list").append('<li><input type="checkbox">' + addItem + '</li>');
	});

	$(".rem-btn").click(function(){
		$(".check-list input:checked").parent().remove();
	});

});