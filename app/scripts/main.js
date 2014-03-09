$(document).ready(function(){
	$.ajax({
		url: 'http://test-api.abct.io/icmpecho',
		dataType: 'jsonp',
		jsonp: 'cb',
		success: function(data){
			console.log(data);
		}
	});
});
