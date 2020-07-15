function message(){
	var anniversary = prompt("What is our anniversary?");
	if(anniversary=="September 8th, 2018" || "9/8/18")
		alert("That's correct!")
	else
		alert("Try again")
}
function upDate(preview){
	document.getElementById('msg').innerHTML = preview.alt;
}
function unDo(preview){
	document.getElementById('msg').innerHTML = "Hover over an image to see details!";
}
