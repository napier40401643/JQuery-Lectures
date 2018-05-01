$(function()
{
	$('#tb').css('background-color','gray');
	$('#tb').css('color','white')
	$('#tb').css('text-align','center')
	$('table td:not(:empty)').mouseover(function()
{
	$(this).css('background','skyblue');
});
	$('table td').mouseout(function()
	{
	$(this).css('background', 'inherit');
});
	$('body').prepend($('<div/>',
 	{text:'Hide key',
 	css:{color:'blue', cursor:'pointer'},
	click:function()
	{
		if($('#key:visible').length==1)
	{
		$('#key').fadeOut('slow');
		$(this).text('Show Key');
	}
	else{
		$('#key').fadeIn('slow');
		$(this).text('Hide Key');
	}
}
}));
// 	{
// 		$('#key').toggle();
// 	}
// }));
 	$('body').append($('<div/>',
 	{text:'Hide key1',
 	css:{color:'blue', cursor:'pointer'},
	click:function()
	{
		if($('#key1:visible').length==1)
	{
		$('#key1').fadeOut('slow');
		$(this).text('Show Key');
	}
	else{
		$('#key1').fadeIn('slow');
		$(this).text('Hide Key');
	}
}

// 	{
// 		$('#key1').toggle();
// 	}
 }));

});




$(function()
{
	// $('#key1 th').css('color','red');
	// $('#key1').css('background','pink')
	// $('body').append($('<div>Hide key</div>'));
	
});


