$(document).ready(function() {

	$('#addButton').on('click', function () {
		if ($('#cust_input').val() == "") {
			return;
		} else {
		$(".cust_list").append( "<li><input type='checkbox' id='checkbox' class='strikethrough' value='1' /><span>" +  $("#cust_input").val() + 
			"</span><button type='button' class='btn btn-danger' id='deleteButton'>Delete</button></li>");
			document.getElementById('cust_input').value = "";	
		}
	})

	$('input[type=text]').on('keyup', function (e) {
	if (e.which == 13) {
		if ($('#cust_input').val() == "") {
			return;
		} else {
		$(".cust_list").append( "<li><input type='checkbox' id='checkbox' class='strikethrough' value='1' /><span>" + $("#cust_input").val() + 
			"</span><button type='button' class='btn btn-danger' id='deleteButton'>Delete</button></li>");
			document.getElementById('cust_input').value = "";
			}
		}
	})

	$('.cust_list').on('click', '#deleteButton', function () {
		$(this).parent().remove();
	})

	$(".cust_list li").on('click', function () {
    	console.log(this.id); // get id of clicked li
	});

});