function update_time( time )
{
	// set minutes and hours
  var hours = time.getHours ( );
  var minutes = time.getMinutes ( );
  // Pad the minutes and seconds with leading zeros, if required
  minutes = ( minutes < 10 ? "0" : "" ) + minutes;
  // Compose the string for display
  // Update the time display
  $("#time").text(hours + "." + minutes);
	// create days object
	var days = {
		'0': 'Sun',
		'1': 'Mon',
		'2': 'Tue',
		'3': 'Wen',
		'4': 'Thu',
		'5': 'Fri',
		'6': 'Sat'
	};
	var months = {
		'1': 'January',
		'2': 'February',
		'3': 'March',
		'4': 'April',
		'5': 'May',
		'6': 'June',
		'7': 'July',
		'8': 'August',
		'9': 'September',
		'10': 'October',
		'11': 'November',
		'12': 'December',
	};
	// get date
	var day = time.getDate();
	var day_name = days[time.getDay()];
	var month = months[time.getMonth()+1];
	// update date
	$("#date").text(day_name+' '+day+' '+month);
}