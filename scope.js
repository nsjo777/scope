var timer = null;
var images = ['faith', 'partnership', 'medicine', 'results'];
var image_tiles = ['Faith', 'Partnership', 'Medicine', 'Results'];
var image_buttons = ['faith_button', 'partnership_button', 'medicine_button','results_button'];
var image_text_content = ['Faith Lorem ipsum dolor sit amet lorem ipsum dolor sit amet','Partnership Lorem ipsum dolor sit amet lorem ipsum dolor sit amet','Medicine Lorem ipsum dolor sit amet lorem ipsum dolor sit amet','Results Lorem ipsum dolor sit amet lorem ipsum dolor sit amet'];
var image_links = ['faith.html','partnership.html','medicine.html','results.html'];

var index = 3;
var prev_index = null;
var skip_index = null;
var time_between_images = 5000;
var timer = null;

window.onload = initialize_javascript;

function initialize_javascript() {
	$('#donate_image_button').hover(function() {
	  $(this).attr('src', 'images/homepage_donate_button_rollover.png');
	}, function() {
	  $(this).attr('src', 'images/homepage_donate_button.png');
	});


	//set the image the first time
	next_image();

	timer = setInterval(function(){ next_image();}, time_between_images);

	$('#faith_button').click({param: 'faith'}, set_slide_show_image);
	$('#partnership_button').click({param: 'partnership'}, set_slide_show_image);
	$('#medicine_button').click({param: 'medicine'}, set_slide_show_image);
	$('#results_button').click({param: 'results'}, set_slide_show_image);
}

function set_slide_show_image(event){
	param = event.data.param;
	if(param === 'faith'){
		skip_index = index;
		index = 3;
	}
	else if(param === 'partnership'){
		skip_index = index;
		index = 0;
	}
	else if(param === 'medicine'){
			skip_index = index;
			index = 1;
	}
	else if(param === 'results'){
			skip_index = index;
			index = 2;
	}
    clearInterval(timer);
	next_image();
	timer = setInterval(function(){ next_image();}, time_between_images);

}

// called each time the timer goes off
function next_image() {
	prev_index = index;
	index++;
	if(index == images.length)
	{
		index = 0;
	}

	var rotating_image = $('#rotating_image');

	rotating_image.fadeOut(400, function() { rotating_image.attr("src",'images/' + images[index] + '.jpg');});
	rotating_image.fadeIn(400);

	var rotation_image_title = $('#rotation_image_title');

	rotation_image_title.text(image_tiles[index]);

	var rotation_image_text_content = $('#rotation_image_text_content');
	rotation_image_text_content.text(image_text_content[index])

	var rotation_link = $('#rotation_link');
	rotation_link.attr("href", image_links[index])

	if(prev_index !== null){
		$('#' + image_buttons[prev_index]).css('background-color', '#AE8521');
	}

	if(skip_index !== null){
			$('#' + image_buttons[skip_index]).css('background-color', '#AE8521');
			skip_index = null;
	}


	$('#' + image_buttons[index]).css('background-color', '#B91107');
}