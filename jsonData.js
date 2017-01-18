var arr= [];
$.getJSON("/promotions/push-messages/creditCard/slideCopy.json", function(data){

	arr["heading1"] = data.heading1;
	arr["heading2"] = data.heading2;
	arr["icon1Text"] = data.icon1Text;
	arr["icon2Text"] = data.icon2Text;
	arr["icon3Text"] = data.icon3Text;
	
	document.getElementById("heading1").innerHTML = arr["heading1"];
	document.getElementById("heading2").innerHTML = arr["heading2"];
	document.getElementById("icon1Text").innerHTML = arr["icon1Text"];
	document.getElementById("icon2Text").innerHTML = arr["icon2Text"];
	document.getElementById("icon3Text").innerHTML = arr["icon3Text"];
           
 });
