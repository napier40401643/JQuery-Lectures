// $(function(){
// 	$('body').append("Hello World");
// });

$(function()
{
	var br = $('<div/>');
	br.append($('<div/>', {text:'Brazil'}));
	br.append($('<img/>', {src:'file:///C:/Users/X541UJ/JQueryLeacture/static/flags/br.gif'}));
	$('body').append(br);
	

	var fr = $('<div/>');
	fr.append($('<div/>', {text:'France'}));
	fr.append($('<img/>', {src:'file:///C:/Users/X541UJ/JQueryLeacture/static/flags/fr.gif'}));
	$('body').append(fr);
	
	var gr = $('<div/>');
	gr.append($('<div/>', {text:'Greece'}));
	gr.append($('<img/>', {src:'file:///C:/Users/X541UJ/JQueryLeacture/static/flags/gr.gif'}));
	$('body').append(gr);
	
	// $('img').css('border','solid 3px blue');
	// $('img').css('width', 200);
	// $('div div').css('text-align','center');
	// $('body').css('font-family', 'arial');
	// $('body').css('font-size', 'x-large');
	
	// $('body>div').css({'width':"206px", 'border':"2px solid black", 'padding':"24px", 'display':"inline-block",'margin':"1ex"})

	var clist =[
	['br','Brazil'],
	['fr','France'],
	['gr','Greece'],
	['za','South Africa']];

	$(function()
	{
		createOne();
	});

	function createOne()
	{
		var i = Math.floor(clist.length*Math.random());
		var code = clist[i][0];
		var name = clist[i][1];
		var qu = $('<div id="qu"/>');
		qu.append($('<div/>',{text:name, id:'ans'}));
		qu.append($('<img/>',{src:'file:///C:/Users/X541UJ/JQueryLeacture/static/flags/' + code + '.gif'}));
		qu.append($('<div/>',{text:name, id:'ans'}).hide());
		qu.append($('<input/>',{id:'response'}));
		$('body').append(qu);
		$('img').css('border','solid 3px blue');
		$('img').css('width', 200);
		$('div div').css('text-align','center');
		$('body').css('font-family', 'arial');
		$('body').css('font-size', 'x-large');
		$('body>div').css({'width':"206px", 'border':"2px solid black", 'padding':"24px", 'display':"inline-block",'margin':"1ex"})

		$('#response').keyup(function()
		{
			if($('#response').val() == $('#ans').text()) 
			{
				alert("Well Done");
			}
		});
	}
});


