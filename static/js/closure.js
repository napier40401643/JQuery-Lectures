// $(document).ready(function()
// {
// 	for(var i=0; i<4; i++)
// 		$('body')
// 		.append($('<button/>',{text:i})
// 			.click(function()
// 			{
// 				alert(i);
// 			}));
// });


// $(document).ready(function()
// {
// 	for(var i=0; i<4; i++)
// 	{
// 		var f=function(j)
// 		{
// 			$('body').append($('<button/>',
// 				{text:i})
// 				.click(function()
// 				{
// 					alert(j);
// 				}));
// 		}
// 		f(i);
// 	}
// });

$(document).ready(function()
{
	for(var i=0; i<4; i++)
{
	$('body').append($('<button/>',
		{
			text:i, data:{x:i}
		})
			.click(function()
			{
				alert($(this).data('x'));
			}));
		}
});