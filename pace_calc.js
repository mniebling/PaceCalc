
// Given a number of seconds, 
// return a properly formatted time string
function formatSecondsToTime( seconds ) {
	
	// parse out hours, mins, secs
	var hours = Math.floor(seconds / 3600);
	var mins = 	Math.floor(seconds / 60) - (hours * 60);
	var secs = 	Math.floor(seconds - (hours * 3600) - (mins * 60));
	
	// add leading zeroes
	mins = (mins < 10 && hours > 0) ? "0" + mins : mins;
	secs = (secs < 10) ? "0" + secs : secs;

	// return formatted string
	return((hours > 0) ? (hours + ":" + mins + ":" + secs) : (mins + ":" + secs));
}


// Given distance in meters and rate in m/s, 
// return time to traverse
function calcTimeForDistance( distance, rate ) {
	
	return formatSecondsToTime(distance / rate);
}


// Grab the entered time from the text box
// Parse and return as # of seconds
function getSecondsFromTextBox() {

	// get user's value and split into array
	var timeArray = $("#input-time").val().split(":")
	
	// calculate number of seconds for each element
	var seconds = 0;
	var multiplier = 1;

	for (var i = timeArray.length - 1; i >= 0; i--) {

		seconds += multiplier * timeArray[i];
		multiplier *= 60;
	}
	
	// return number of seconds
	return seconds;
}



function calculateAndRender() {
	
	// do the math
	var time = getSecondsFromTextBox();
	var distance = $("#dd-distance").val();
	var metersPerSecond = distance / time;
		
	// output the values
	$("#400").text(		calcTimeForDistance(400, metersPerSecond));
	$("#800").text(		calcTimeForDistance(800, metersPerSecond));
	$("#1600").text(	calcTimeForDistance(1600, metersPerSecond));
	$("#3200").text(	calcTimeForDistance(3200, metersPerSecond));
	$("#5000").text(	calcTimeForDistance(5000, metersPerSecond));
	$("#5600").text(	calcTimeForDistance(5600, metersPerSecond));
	$("#10000").text(	calcTimeForDistance(10000, metersPerSecond));
	$("#21097").text(	calcTimeForDistance(21097, metersPerSecond));
	$("#42195").text(	calcTimeForDistance(42195, metersPerSecond));
}




// jQuery for animation on rendered splits
$(document).ready(function() {
						   
	// set focus in input control
	$("#input-time").focus();
	


	// bind function to "do it" button
	$("#do-it").click(function() {
							  
		calculateAndRender();

		$(".output-row").each(function(index) {

			$(this).slideDown("slow");
		});
	});
	


	// bind function to handle "Enter" press in the text box
	$("#input-time").keyup(function() { 
								   
		if(event.keyCode == 13) $("#do-it").click();
	});
});