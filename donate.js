

window.onload = initialize_javascript;

function initialize_javascript() {

	$('#donate_image').hover(function() {
	  $(this).attr('src', 'images/donate_button_rollover.png');
	}, function() {
	  $(this).attr('src', 'images/donate_button.png');
	});

	$('#submit_button').hover(function() {
		  $(this).attr('src', 'images/submit_button_rollover.png');
		}, function() {
		  $(this).attr('src', 'images/submit_button.png');
	});

	$( "#submit_button" ).click(submit_button_clicked);
}

function submit_button_clicked()
{
	alert('Submit button clicked. This does not do anything yet.')
}

