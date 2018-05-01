$(document).ready(function()
{
	$('#d1').click(function()
	{
		$(this).animate({'margin-left':500});
	});

	$('#d2').click(function()
	{
		$(this).animate({'width':'20ex', 'height':'300px'});
	});

	$('#d3').click(function()
	{
		$(this).animate({'margin-left':'20ex'},
			3000,function()
			{
				$(this).animate({'margin-left':'0ex'});
			});
	});
	$("#btn1").click(function()
	{
		$("#box").animate({height: "300px"});
	});
	$("#btn2").click(function()
	{
		$("#box").animate({height: "100px"});
	});
});