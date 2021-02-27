var ctext = ["Welcome", "About Me", "Goals and Outcomes", "Extracurriculars", "Resume", "Contact"]

function updateTab(text) {
	document.getElementById("title").innerHTML = text;
	if (text == ctext[0]) {
		document.getElementById("ctext[0]").removeAttribute("class");
	} else if (text == ctext[1]) {
		document.getElementById("ctext[1]")
	} else if (text == ctext[2]) {
		document.getElementById("ctext[2]");
	} else if (text == ctext[3]) {
		document.getElementById("ctext[3]");
	}/* else if (text == ctext[4]) {
		document.getElementById("ctext[4]");	
	} else if (text == ctext[5]) {
		document.getElementById("ctext[5]");	
	}*/

function top() {
	document.documentElement.scrollTop = 0;
}