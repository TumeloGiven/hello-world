$(document).ready(function(){
	$(".overlay").hide();
	$(".autocomplete-suggestions").click(function(){
		$(".overlay").show();
	});
	$(".closeButton").click(function(){
		$(".overlay").hide();
	});
	
	$('#autocomplete').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        alert('You pressed a "enter" key in textbox');  
    }
});
});
