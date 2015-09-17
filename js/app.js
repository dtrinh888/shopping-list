$(document).ready(function(){

    $(".add-btn").click(function (){
		var addItem = $('#item-add').val();

		if (addItem == "") {			
			alert("You must enter an item to add to list.")
			$(".check-list").append('<li><input type="checkbox" class="blank-box">' + addItem + '</li>');
			$('.blank-box').remove();
		} else {
			$(".check-list").append('<li><input type="checkbox" class="check-box">' + addItem + '</li>');
		};

		$("#item-add").val('');
	});

	$("#item-add").keypress(function (enter){
		var press = enter.which;
		var addItem = $('#item-add').val();
		if(press == 13) {
			if (addItem == "") {			
			alert("You must enter an item to add to list.")
			$(".check-list").append('<li><input type="checkbox" class="blank-box">' + addItem + '</li>');
			$('.blank-box').remove();
		} else {
			$(".check-list").append('<li><input type="checkbox" class="check-box">' + addItem + '</li>');
		};
			$("#item-add").val('');
		} 
	});

	$('#select-all').change(function(){
		$('.check-box').prop('checked', $(this).prop('checked'));
	});

	$(".rem-btn").click(function(){
		var remConf = confirm("Are you sure you want to remove these items from your shopping list?");
		if (remConf == true) {
			$(".check-list input:checked").not('#select-all').parent().remove();
			$('#select-all').prop('checked', false);	
		};
	});
});