$(document).ready(function(){

    $(".add-btn").click(function (){
		var addItem = $('#item-add').val();
		$(".check-list").append('<li ><input type="checkbox" class="check-box">' + addItem + '</li>');
	});

	$('#select-all').change(function(){
		$('.check-box').prop('checked', $(this).prop('checked'));
	});

	$(".rem-btn").click(function(){
		$(".check-list input:checked").not('#select-all').parent().remove();
	});

});