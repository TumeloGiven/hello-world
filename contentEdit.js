var imported = document.createElement('script');
imported.src = '/promotions/push-messages/creditCard/jsonData.js';
document.head.appendChild(imported);

/*var jsonfile = require('jsonfile');
var file = '/promotions/push-messages/creditCard/slideCopy.json';
var object = {head:'FNB'}

jsonfile.writeFile(file,obj,function(err){
	console.error(err);
	alert('Complete');
});*/

function myFunction( idValue, controller) {
	var element = document.getElementById(idValue.id);
	var button = document.getElementById(controller.id);
	
	if (element.isContentEditable) {
    // Disable Editing
		element.contentEditable = 'false';
		button.innerHTML = "Edit";
    // save changes here.
	} else {
		
		element.contentEditable = 'true';
		element.focus();
		
		button.innerHTML = "Save";
  }
}

function makeVisible(object) {
	document.getElementById("editorBtn").style.visibility = "visible";
	document.getElementById("editorBtn2").style.visibility = "visible";
}

function hideVisibility(object) {
	document.getElementById("editorBtn").style.visibility = "hidden";
	document.getElementById("editorBtn2").style.visibility = "hidden";
}
