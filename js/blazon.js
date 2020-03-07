const blazonDict = {
	circle: ["disc", "ball", "circle", "discus", "circumference", "sun", "moon"],
	square: ["square", "equilateral", "quadrat", "box"],
	rhombus: ["lozenge", "rhombus", "diamond", "rhomboid"],
	black: ["dark", "moor", "black", "abyssal", "noir", "sable"],
	white: ["pale", "snowy", "white"],
	red: ["blood", "red", "fiery", "crimson", "flaming", "vermilion", "sanguine", "ruby"],
	yellow: ["yellow", "daffodil", "lemon"],
	blue: ["blue", "sapphire"],
	orange: ["orange", "copper"],
	green: ["green", "emerald", "grass"],
	violet: ["purple", "amethyst", "plum"],
	grey: ["grey", "ashen", "silver", "silvery", "pearly", "ghostly"],
	darkred: ["dark red", "wine", "bordeaux"],
	darkyellow: ["gold", "golden"],
	darkblue: ["ultramarine", "dark blue", "deep blue", "deep ocean", "oceanic"],
	lightred: ["pink", "rose"],
	lightyellow: ["light yellow"],
	lightblue: ["azure", "cerulean", "sky"],
	darkorange: ["brown", "maroon"],
	darkgreen: ["dark green", "forest"],
	darkviolet: ["violet"],
	lightorange: ["salmon", "light orange"],
	lightgreen: ["chartreuse"],
	lightviolet: ["magenta", "fuchsia", "hot pink"],
	top: ["on top", "on the top", "as a crown"],
	left: ["on its left", "left side"],
	right: ["on the right", "right side"],
	bottom: ["on the bottom", "on its bottom"],
	topright: ["on its top right corner"],
	topleft: ["on its top left corner"],
	bottomright: ["on its bottom right corner"],
	bottomleft: ["on its bottom left corner"],
	chargeVerb: ["charged by a", "surmounted by a", "with a"],
	splitVerb: ["and a", "opposite a", "also a"],
	splitEnd: ["on the other side", "on the mirror side"]
}

function addBlazon(){
	$("#blazon").append('<span></span>').hide().fadeIn(2000);
	writeBlazon();
}

function makeBlazon(){
	blazonTerm = {
		main: {
			shape: rand(blazonDict[current.main.shape]),
			color: rand(blazonDict[current.main.color])
		},
		charge: {
			verb: rand(blazonDict.chargeVerb),
			shape: rand(blazonDict[current.charge.shape]),
			color: rand(blazonDict[current.charge.color]),
			position: rand(blazonDict[current.charge.position])
		},
		split: {
			verb: rand(blazonDict.splitVerb),
			shape: rand(blazonDict[current.split.shape]),
			color: rand(blazonDict[current.split.color]),
			end: rand(blazonDict.splitEnd),
		}
	}
	blazonPart = {
		main: "A " + blazonTerm.main.color + " " + blazonTerm.main.shape,
		charge: blazonTerm.charge.verb + " " + blazonTerm.charge.color + " " + blazonTerm.charge.shape + " " + blazonTerm.charge.position,
		split: blazonTerm.split.verb + " " + blazonTerm.split.color + " " + blazonTerm.split.shape + " " + blazonTerm.split.end,

	}
	blazon = blazonPart.main;
	if (current.charge.status == "enabled") {
		blazon += " " + blazonPart.charge;
	}
	if (current.split.status == "enabled") {
		blazon += " " + blazonPart.split;
	}
	return blazon;
}

function writeBlazon(){
	$("#blazon span").html(makeBlazon());
}
