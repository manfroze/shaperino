const shape = ["circle", "square", "rhombus"]
const mode = ["main", "charge", "split"]
const position = {
	side: ["top", "left", "bottom", "right"],
	corner: ["topright", "topleft", "bottomright", "bottomleft"],
	split: ["topbottom", "leftright", "topleftbottomright", "toprightbottomleft"]
}
const color = {
	basic: ["black", "white", "red", "yellow", "blue"],
	composite: ["orange", "green", "violet", "grey", "darkred", "darkyellow", "darkblue", "lightred", "lightyellow", "lightblue", "darkorange", "darkgreen", "darkviolet", "lightorange", "lightgreen", "lightviolet"]
}

const colors = [...color.basic, ...color.composite]
const positions = [...position.side, ...position.corner, , ...position.split]
const chargePositions = [...position.side, ...position.corner]

function rand(name) {
	if (name instanceof Array == true) {
		var randomNumber = Math.floor(Math.random() * name.length);
		return name[randomNumber];
	} 
}
