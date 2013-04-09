(function ($) {
	$(function () {
		'use strict';

		// Given a number of seconds,
		// return a properly formatted time string
		function secondsToFormattedTime(seconds) {

			// parse out hours, mins, and secs
			var hours = Math.floor(seconds / 3600),
				mins = Math.floor(seconds / 60) % 60,
				secs = Math.floor(seconds % 60);

			// add leading zeroes
			mins = (mins < 10 && hours > 0) ? '0' + mins : mins;
			secs = (secs < 10) ? '0' + secs : secs;

			// return formatted string
			return ((hours > 0) ? (hours + ':' + mins + ':' + secs) : (mins + ':' + secs));
		}


		// Given distance in meters and rate in m/s,
		// return time to traverse
		function calcTimeForDistance(distance, rate) {

			return secondsToFormattedTime(distance / rate);
		}


		// Given the user-input time string,
		// parse and return as # of seconds
		function inputTimeToSeconds(time) {

			// get user's value and split into array
			var timeArray = time.split(':'),
			// calculate number of seconds for each element
				seconds = 0,
				multiplier = 1,
				current;

			while ((current = timeArray.pop())) {
				seconds += multiplier * current;
				multiplier *= 60;
			}

			// return number of seconds
			return seconds;
		}




		$('#input-time').focus();

		$('#do-it').on('submit', function (event) {

			// do the math
			var time = inputTimeToSeconds($('#input-time').val()),
				distance = $('#dd-distance').val(),
				metersPerSecond = distance / time;

			// output the values
			$('#d400').text(calcTimeForDistance(400, metersPerSecond));
			$('#d800').text(calcTimeForDistance(800, metersPerSecond));
			$('#d1600').text(calcTimeForDistance(1600, metersPerSecond));
			$('#d1609').text(calcTimeForDistance(1609, metersPerSecond));
			$('#d3200').text(calcTimeForDistance(3200, metersPerSecond));
			$('#d5000').text(calcTimeForDistance(5000, metersPerSecond));
			$('#d5600').text(calcTimeForDistance(5600, metersPerSecond));
			$('#d10000').text(calcTimeForDistance(10000, metersPerSecond));
			$('#d21097').text(calcTimeForDistance(21097, metersPerSecond));
			$('#d42195').text(calcTimeForDistance(42195, metersPerSecond));

			$('.results').slideDown('slow');

			event.preventDefault();
		});
	});
}(window.jQuery, undefined));
