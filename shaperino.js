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
	lightgrey: "#F6F6F6",

}

var shapes = ["circle", "square", "rhombus"];


var current = {

	main: {
		shape: "circle",
		color: "black",
	}, 
	charge: {
		status: "disabled",
		type: "side",
		position: "top",
		shape: "rhombus",
		color: "red",
	},

	split: {
		status: "disabled",
		shape: "circle",
		color: "blue",
	} 

}

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

		red: [""],
		black:[""],
		yellow: [""],
		white: [""],
		blue: [""],

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

}

// DRAW FUNCTION //

function drawGeometry() {

	draw = SVG('drawing').size(500, 500);
	geometry = draw.group();

	drawShape("main");

	if (current.charge.status == "enabled") {
		drawShape("charge");
	}

	if (current.split.status == "enabled") {
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
		generate();
	});

	$( ".item.secondary" ).click(function(e) {
		chargeModifier(e, "color");
		generate();
	});


	$( ".item.split" ).click(function(e) {
		var target = $(e.target).attr("id");
		setCurrent("charge", "position", target);
		setCurrent("split", "status", "enabled");
		setCurrent("charge", "status", "enabled");
		generate();
	});


	$( ".item.side" ).click(function(e) {
		var target = $(e.target).attr("id");
		setCurrent("charge", "position", target);
		setCurrent("charge", "status", "enabled");
		setCurrent("split", "status", "disabled");
		setCurrent("charge", "type", "side");
		generate();
	});

	$( ".item.corner" ).click(function(e) {
		var target = $(e.target).attr("id");
		setCurrent("charge", "position", target);
		setCurrent("charge", "status", "enabled");
		setCurrent("split", "status", "disabled");
		setCurrent("charge", "type", "corner");
		generate();
	});




	// //


	function highlight(mode, kind, selector, label){
		$("." + selector + "#" + current[mode][kind]).addClass('selected');
		$("#" + current[mode][kind] + " .label").append(label);
	}

	function highlightComp(type, mode, kind, selector, label){

		if (comp[type][current[mode][kind]] != ""){

			components = comp[type][current[mode][kind]];

			$("." + selector + "#" + components.join(", ." + selector + "#")).addClass('bordered');
			$("." + selector + "#" + components.join(" .label , ." + selector + "#")+ " .label").append(label);

		}
	}

	function clearSelectors(){

		$("*").removeClass('selected');
		$("*").removeClass('bordered');
		$(".label").html('');

	}

	function updateSelectors(){

		clearSelectors();

		highlight("main", "shape", "shape", "M");
		highlight("main", "color", "color", "M");

		highlightComp("color", "main", "color", "color", "m");

		if (current.charge.status == "enabled" && current.split.status == "disabled") {

			highlight("charge", "position", "charge");

			if (current.charge.type == "corner"){
				highlightComp("charge", "charge", "position", "charge");
			}

		}


		if (current.charge.status == "enabled") {

			highlight("charge", "shape", "shape", "C");
			highlight("charge", "color", "color", "C");

			highlightComp("color", "charge", "color", "color", "c");

		}

		if (current.split.status == "enabled") {

			highlight("charge", "position", "split");
			highlight("split", "shape", "shape", "S");
			highlight("split", "color", "color", "S");
			highlightComp("split", "charge", "position", "charge");
			highlightComp("color", "split", "color", "color", "s");

		}

	}

	counter = {

		square: 0,
		circle: 0,
		rhombus: 0,

		top: 0,
		left: 0,
		right: 0,
		bottom: 0,

		black: 0,
		white: 0,
		red: 0,
		yellow: 0,
		blue: 0,

	}

	power = {

		shape: {
			main: 7,
			charge: 3,
			split: 1,
		},

		charge: 5,

		color: {
			main: 4,
			charge: 2,
			split: 1,
		},

	}

	function updateCounters(){	
		$.each(counter, function(index){
			$("#" + index + " .counter").html(counter[index]);
		});
	}

	$( "#drawing" ).click(function(e) {

		counter[current.main.shape] +=power.shape.main;
		if (current.charge.status == "enabled") {counter[current.charge.shape] +=power.shape.charge;}
		if (current.split.status == "enabled") {counter[current.split.shape] +=power.shape.split;}

		if (current.charge.status == "enabled") {counter[current.charge.position] +=power.charge;}

		counter[current.main.color] +=power.color.main;
		if (current.charge.status == "enabled") {counter[current.charge.color] +=power.color.charge;}
		if (current.split.status == "enabled") {counter[current.split.color] +=power.color.split;}


		if (current.split.status == "enabled") {
			$.each(comp.split[current.charge.position], function(index, value){
				counter[value] +=power.charge;
			});
		}

		$.each(comp.color[current.main.color], function(index, value){
				counter[value] +=power.color.main;
			});


		updateCounters();

	});
