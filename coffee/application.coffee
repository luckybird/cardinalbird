$(document).ready () ->
	$.ajax({
		url:     '/projects.json',
		type:    'get',
		success: (response) ->
			console.log($.parseJSON(response))
	})
