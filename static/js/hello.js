$(document).ready(function()
{
	alert("Hello World")
});

$(function()
{
	var msg = $('<div>Hello World</div>');
	$('body').append(msg);
});

$(function()
{
	var gb = $('<div id="gid"/>');
	gb.append($('<div/>', {text:'Great Britain'}));
	gb.append($('<img/>',{src:'file:///C:/Users/X541UJ/JQueryLeacture/static/flags/gb.gif'}))
	$('#countries').append(gb);
	// $('#countries').attr("id","gid");
});

$(function()
{
	$("#fr img").css
	({
		background: "pink",
		border: "3px red solid",
		width: "300px"
	});
});

$(function()
{
	$("#fi img").css
	({
		background: "pink",
		border: "3px red solid",
		width: "300px"
	});
});

$(function()
{
	$("#gid img").css
	({
		background: "pink",
		border: "3px red solid",
		width: "300px"
	});
});

$(function()
{
	var elem = $('<div/>');
	elem.html('An exam element');
	elem.css("border","solid blue");
	$("body").append(elem);
});


$(function()
{
	$('p:first-child').css('border','solid');
	$('p:first-child(1)').css('border','solid');
	$('p:eq(1)').css('border','solid');
	$('p:last').css('border','solid');
})

$(function()
{
	var ca = {
		cname: "A J CUMMING",
		caddress: {
			street: "10 Colinton Rd",
			town: "Edinburgh",
			post_code:"EH14 5DT"
		},
		transaction:[
			{whn:"2014-01-11",nar:"Cash Withdrawal", amt:-100},
			{whn:"2014-01-11",nar:"BUS FARE",amt:-35}
		]
	};
	alert(ca.transaction[1].nar);
})





















