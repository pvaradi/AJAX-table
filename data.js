$(function() {
	(function doPolling() {
		$.ajax({
			url: 'data.php',
			dataType: 'JSON',	
			success:  function(response_get) {

				$('#table-display').html('');			
				var table_data ='';
				
				for(var i = 0; i <= response_get.length-1; i++){

					table_data += '<tr>';
					table_data += '<td>' + response_get[i].id + '</td>';
					table_data += '<td>' + response_get[i].user_name + '</td>';
					table_data += '<td>' + response_get[i].user_password + '</td>';
					table_data += '</tr>';
	
				}
				$('#table-display').append(table_data);
				
			},
		});
	setTimeout(doPolling, 10000);
	}());
});