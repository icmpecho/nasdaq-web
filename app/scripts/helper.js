function format_time (unix_epoch) {
	var dt = new Date(unix_epoch * 1000);
	return dt.getHours() + ':' + dt.getMinutes();
}

function format_data_for_morris (data) {
	var ret = [];
	var i;
	for(i = 0; i < data.length; i++) {
		ret.push({time: format_time(data[i]._ts), index: data[i].index});
	}
	return ret;
}

if (typeof module !== 'undefined' && module.exports != null) {
    exports.format_time = format_time;
    exports.format_data_for_morris = format_data_for_morris;
}