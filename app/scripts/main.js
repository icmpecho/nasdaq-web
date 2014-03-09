$(document).ready(function(){
	$.ajax({
		url: 'http://test-api.abct.io/icmpecho',
		dataType: 'jsonp',
		jsonp: 'cb',
		success: function(data){
			new Morris.Line({
				element: 'stock-chart',
				data: format_data_for_morris(data),
				xkey: 'time',
				ykeys: ['index'],
				labels: ['Index']
			});
		}
	});
});
