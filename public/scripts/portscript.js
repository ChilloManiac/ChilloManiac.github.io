// 1 Take parameter
// 2 Find image and text corresponding to that parameter
// 3 Change the values of port images and text to match the parameter
// 4 Remove "active" from previous button
// 5 Give pressed button the "active" value

function changePort(str) {
	var imagePath = "public/images/" + str + ".jpg";
	var imagePath2 = "public/images/" + str + "2.jpg";
	if (checkFile(imagePath)) {
		document.getElementById("port-image").src=imagePath;
	} else {
		document.getElementById("port-image").src="";
		document.getElementById("port-image").alt="Couldn't find image"
	}
	if (checkFile(imagePath2)) {
		document.getElementById("port-image2").src=imagePath2;
	} else {
		document.getElementById("port-image2").src="";
	}
	cleanActiveModifier();
	document.getElementById("list-" + str).className += " active";
	document.getElementById("port-text").innerHTML = getTxt("public/porttext/" + str + ".txt");
}

function getTxt(path) {
	var ajax = new XMLHttpRequest();
	ajax.open("GET", path, false);
	ajax.send();
	return ajax.responseText;
}

function checkFile(path) {
	var ajax = new XMLHttpRequest();
	ajax.open('HEAD', path, false);
	ajax.send();
	return ajax.status!=404;
}

//Yup its janky but its simple and it works
function cleanActiveModifier() {
	document.getElementById("list-ambird").className = "";
	document.getElementById("list-jamii").className = "";
	document.getElementById("list-aoff").className = "";
	document.getElementById("list-site").className = "";
}

window.onload=changePort("ambird");