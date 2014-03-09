function format_time (unix_epoch) {
	var dt = new Date(unix_epoch * 1000);
	return dt.getHours() + ':' + dt.getMinutes();
}

if (typeof module !== 'undefined' && module.exports != null) {
    exports.format_time = format_time;
}