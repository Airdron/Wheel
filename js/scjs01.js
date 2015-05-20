$('.addme').click(function(){
	var len = $("#inputs").children().length+1;
	var html="";
	for(var i=0; i<len;i++){
		html+='<input value="'+(i+1)+'">';
	}
	$("#inputs").html(html);
});

$('.remme').click(function(){
	var len = $("#inputs").children().length-1;
	var html="";
	for(var i=0; i<len;i++){
		html+='<input value="'+(i+1)+'">';
	}
	$("#inputs").html(html);
});

function update(){
	var href = $('a').attr("href");
	href="index.html?";		
	for(var i=0; i<$("#inputs").children().length;i++){
		href+=$("#inputs").children().eq(i).val()+";";
	}
	$('a').attr("href", href);
}

$( "input" ).change(function() {
	var index= $(this).index();
		console.log(index);
});