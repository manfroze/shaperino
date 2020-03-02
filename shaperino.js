// ABSOLUTE VARIABLES //

var cloneIndex = 0;

var canvasSize = 500;
var middle = canvasSize/2;

var size = {
	main: 400,
	charge: 220,
	split: 220
}

var rhombusSizeDiff = {
	main: 50,
	charge: 50,
	split: 50
}

// RELATIVE VARIABLES //

var centerPoints = {
	normal: {
		charge: {
			zero: size.charge/2,
			middle: middle,
			full: canvasSize - size.charge/2
		}
	},
	rhombus: {
		charge: {
			zero: (size.charge-rhombusSizeDiff.charge)/2 + 43,
			middle: middle,
			full: canvasSize - ((size.charge-rhombusSizeDiff.charge)/2 + 43)
		}
	}
}

var center = {
	normal: {
		main: [middle, middle],
		charge: [],
		split: []
	},
	rhombus: {
		main: [middle, middle],
		charge: [],
		split: []
	}
}

// LISTS //

var color = {

	black: "#333333",
	white: "#FFFFFF",
	red: "#FF4329",
	yellow: "#FFD600",
	blue: "#0085FF",

	orange: "#FF9A3D",
	green: "#47E24D",
	violet: "#883BEB",
	grey: "#9F9F9F",

	darkred: "#944433",
	darkyellow: "#D1BB48",
	darkblue: "#2C4178",

	lightred: "#FFADAD",
	lightyellow: "#FDFF97",
	lightblue: "#7CC0FF",

	darkorange: "#8C7158",
	darkgreen: "#239F28",
	darkviolet: "#400072",
	darkgrey: "#545454",

	lightorange: "#FFBF5F",
	lightgreen: "#C8FF54",
	lightviolet: "#E64EFF",
	lightgrey: "#DADADA",

}

var shapes = ["circle", "square", "rhombus"];


var current = {

	mode: "plain",
	chargeType: "side",

	main: {
		shape: "circle",
		color: "black",
	}, 
	charge: {
		position: "top",
		shape: "rhombus",
		color: "red",
	},

	split: {
		shape: "circle",
		color: "blue",
	} 

}

var truth = [true, false]

function generate() {


	clear();

// SET CHARGES POSITION //

if (current.charge.position == "left") {
	center.normal.charge[0] = centerPoints.normal.charge.zero
	center.normal.charge[1] = centerPoints.normal.charge.middle
}
if (current.charge.position == "top") {
	center.normal.charge[0] = centerPoints.normal.charge.middle
	center.normal.charge[1] = centerPoints.normal.charge.zero
}
if (current.charge.position == "right") {
	center.normal.charge[0] = centerPoints.normal.charge.full
	center.normal.charge[1]  = centerPoints.normal.charge.middle
}
if (current.charge.position == "bottom") {
	center.normal.charge[0] = centerPoints.normal.charge.middle
	center.normal.charge[1] = centerPoints.normal.charge.full
}
if (current.charge.position == "topleft") {
	center.normal.charge[0] = centerPoints.normal.charge.zero
	center.normal.charge[1] = centerPoints.normal.charge.zero
}
if (current.charge.position == "topright") {
	center.normal.charge[0] = centerPoints.normal.charge.full
	center.normal.charge[1] = centerPoints.normal.charge.zero
}
if (current.charge.position == "bottomright") {
	center.normal.charge[0] = centerPoints.normal.charge.full
	center.normal.charge[1] = centerPoints.normal.charge.full
}
if (current.charge.position == "bottomleft") {
	center.normal.charge[0] = centerPoints.normal.charge.zero
	center.normal.charge[1] = centerPoints.normal.charge.full
}


// ASSIGN OTHER POSITION //

for (var i = 0; i < 2; i++) {

	if (center.normal.charge[i] == centerPoints.normal.charge.zero) {
		center.normal.split[i] = centerPoints.normal.charge.full;
		center.rhombus.charge[i] = centerPoints.rhombus.charge.zero;
		center.rhombus.split[i] = centerPoints.rhombus.charge.full
	} else if (center.normal.charge[i] == centerPoints.normal.charge.full) {
		center.normal.split[i] = centerPoints.normal.charge.zero;
		center.rhombus.charge[i] = centerPoints.rhombus.charge.full;
		center.rhombus.split[i] = centerPoints.rhombus.charge.zero
	} else if (center.normal.charge[i] == centerPoints.normal.charge.middle) {
		center.normal.split[i] = centerPoints.normal.charge.middle;
		center.rhombus.charge[i] = centerPoints.rhombus.charge.middle;
		center.rhombus.split[i] = centerPoints.rhombus.charge.middle
	}
}

drawGeometry();
updateSelectors();

console.log(current.colorType);

}

// DRAW FUNCTION //

function drawGeometry() {

	draw = SVG('drawing').size(500, 500);
	geometry = draw.group();

	drawShape("main");

	if (current.mode == "charge") {
		drawShape("charge");
	}

	if (current.mode == "split") {
		drawShape("charge");
		drawShape("split");
	}

}

	// SINGLE SHAPE FUNCTIONS //

	function circle(size, centerX, centerY, color) {
		geometry.circle(size, size).center(centerX, centerY).attr({ fill: color })
	}

	function square(size, centerX, centerY, color) {
		geometry.rect(size, size).center(centerX, centerY).attr({ fill: color })
	}

	function rhombus(size, centerX, centerY, color) {
		geometry.rect(size, size).center(centerX, centerY).attr({ fill: color }).transform({ rotation: 45 })
	}


	// DRAW SHAPE FUNCTION //

	function drawShape(kind) {

		if (current[kind].shape == "square") {
			square(size[kind], center.normal[kind][0], center.normal[kind][1], color[current[kind].color])
		} else if (current[kind].shape == "circle") {
			circle(size[kind], center.normal[kind][0], center.normal[kind][1], color[current[kind].color])
		} else if (current[kind].shape == "rhombus") {
			rhombus(size[kind]-rhombusSizeDiff[kind], center.rhombus[kind][0], center.rhombus[kind][1], color[current[kind].color])
		}

	}


	generate();

	function clear(){
		document.getElementById("drawing").innerHTML = "";

	}

	function set(thing, mode){

		current[thing] = mode;

	}

	function setCurrent(mode, kind, selected){

		current[mode][kind] = selected;

	}

	function chargeModifier(e, kind){

		var target = $(e.target).attr("id");

		if (e.shiftKey) {
			setCurrent("charge", kind, target);
		} else if (e.altKey) {
			setCurrent("split", kind, target);
		} else {
			setCurrent("main", kind, target);
		}

	}

	// CLICKS //

	$( ".item.shape" ).click(function(e) {
		chargeModifier(e, "shape");
		generate();
	});

	$( ".item.primary" ).click(function(e) {
		chargeModifier(e, "color");
		set("colorType", "primary");
		generate();
	});

	$( ".item.secondary" ).click(function(e) {
		chargeModifier(e, "color");
		set("colorType", "secondary");
		generate();
	});


	$( ".item.split" ).click(function(e) {
		var target = $(e.target).attr("id");
		setCurrent("charge", "position", target);
		set("mode", "split");
		generate();
	});

	$( ".item.side" ).click(function(e) {
		var target = $(e.target).attr("id");
		setCurrent("charge", "position", target);
		set("mode", "charge");
		set("chargeType", "side");
		generate();
	});

	$( ".item.corner" ).click(function(e) {
		var target = $(e.target).attr("id");
		setCurrent("charge", "position", target);
		set("mode", "charge");
		set("chargeType", "corner");
		generate();
	});




	// //

	var comp = {

		charge: {
			topleft: ["top", "left"],
			topright: ["top", "right"],
			bottomleft: ["bottom", "left"],
			bottomright: ["bottom", "right"],
		},

		split: {
			top: ["top", "bottom"],
			left: ["left", "right"],
			topleft: ["topleft", "bottomright", "top", "left", "bottom", "right"],
			topright: ["topright", "bottomleft", "top", "left", "bottom", "right"],
		},

		color: {

			red: ["red", "yellow"],
			black:["red", "yellow"],
			yellow: ["red", "yellow"],
			white: ["red", "yellow"],
			blue: ["red", "yellow"],

			orange: ["red", "yellow"],
			green: ["yellow", "blue"],
			violet: ["blue", "red"],
			grey: ["white", "black"],

			darkred: ["red", "black"],
			darkyellow: ["yellow", "black"],
			darkblue: ["blue", "black"],

			lightred: ["red", "white"],
			lightyellow: ["yellow", "white"],
			lightblue: ["blue", "white"],

			darkorange: ["red", "yellow", "black"],
			darkgreen: ["yellow", "blue", "black"],
			darkviolet: ["blue", "red", "black"],
			darkgrey: ["white", "black", "black"],

			lightorange: ["red", "yellow", "white"],
			lightgreen: ["yellow", "blue", "white"],
			lightviolet: ["blue", "red", "white"],
			lightgrey: ["white", "black", "white"],


		}
	}


	function select(mode, kind, selector, label){

		$("." + selector + "#" + current[mode][kind]).addClass('selected');
		$("#" + current[mode][kind] + " .label").append(label);

	}

	function border(type, mode, kind, selector){

		components = comp[type][current[mode][kind]];

		$("." + selector + "#" + components.join(", ." + selector + "#")).addClass('bordered');

		//$("." + selector + "#" + components.join(" .label , ." + selector + "#")+ " .label").append("");

	}

	function clearSelectors(){

		$("*").removeClass('selected');
		$("*").removeClass('bordered');
		$(".label").html('');

	}

	function updateSelectors(){

		clearSelectors();

		select("main", "shape", "shape", "M");
		select("main", "color", "color", "M");


		if (current.colorType == "secondary" || current.colorType == "primary") {
			border("color", "main", "color", "color");
			border("color", "charge", "color", "color");
			border("color", "split", "color", "color");
		}


		if (current.mode == "charge") {

			select("charge", "position", "charge");
			if (current.chargeType == "corner"){
				border("charge", "charge", "position", "charge");

			}

		}

		if (current.mode == "split") {

			select("charge", "position", "split");
			select("split", "shape", "shape", "S");
			select("split", "color", "color", "S");

			border("split", "charge", "position", "charge");

		}

		if (current.mode == "charge" || current.mode == "split") {

			select("charge", "shape", "shape", "C");
			select("charge", "color", "color", "C");

		}


	}

