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

}

var shapes = ["circle", "square", "rhombus"];


var current = {

	mode: "plain",

	main: {
		shape: "circle",
		color: color.black,
	}, 
	charge: {
		position: "top",
		shape: "rhombus",
		color: color.red,
	},

	split: {
		shape: "circle",
		color: color.blue,
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
			square(size[kind], center.normal[kind][0], center.normal[kind][1], current[kind].color)
		} else if (current[kind].shape == "circle") {
			circle(size[kind], center.normal[kind][0], center.normal[kind][1], current[kind].color)
		} else if (current[kind].shape == "rhombus") {
			rhombus(size[kind]-rhombusSizeDiff[kind], center.rhombus[kind][0], center.rhombus[kind][1], current[kind].color)
		}

	}


	generate();

	function clear(){
		document.getElementById("drawing").innerHTML = "";

	}

	function rand(name) {
		if (name instanceof Array == true) {
			var randomNumber = Math.floor(Math.random() * name.length);
			return name[randomNumber];
		} 
	}


	$( ".item.shape" ).click(function(e) {

		var selectedShape = $(this).attr("id");

		if (e.shiftKey) {
			current.charge.shape = selectedShape;
		} else if (e.altKey) {
			current.split.shape = selectedShape;
		} else {
			current.main.shape = selectedShape; }
			generate();

		});

	$( ".item.color" ).click(function(e) {

		var selectedColor = $(this).attr("id");

		if (e.shiftKey) {
			current.charge.color = color[selectedColor];
		} else if (e.altKey) {
			current.split.color = color[selectedColor];
		} else {
			current.main.color = color[selectedColor]; }
			generate();

		});

	$( ".item.charge" ).click(function(e) {

		var selectedPosition = $(this).attr("id");
		current.charge.position = selectedPosition;
		current.mode = "charge";
		generate();

	});

	$( ".item.split" ).click(function(e) {

		var selectedPosition = $(this).attr("id");
		current.charge.position = selectedPosition;
		current.mode = "split";
		generate();

	});



	var components = []

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

		}

	}


	function updateSelectors(){

		$("*").removeClass('selected');
		$("*").removeClass('bordered');
		$(".label").html('');

		$("#" + current.main.shape).addClass('selected');
		$("#" + current.main.shape + " .label").append('MAIN');

		if (current.mode == "charge") {

			$(".charge#" + current.charge.position).addClass('selected');

			if (current.charge.position == "topright" || current.charge.position == "topleft" || current.charge.position == "bottomright" || current.charge.position == "bottomleft"){

				components = comp.charge[current.charge.position];
				$(".charge#" + components.join(", .charge#")).addClass('bordered');

			}

		}

		if (current.mode == "split") {

			$(".split#" + current.charge.position).addClass('selected');

			$("#" + current.split.shape).addClass('selected');
			$("#" + current.split.shape + " .label").append('SPLIT');

			components = comp.split[current.charge.position];
			$(".charge#" + components.join(", .charge#")).addClass('bordered');

		}

		if (current.mode == "charge" || current.mode == "split") {
			
			$("#" + current.charge.shape).addClass('selected');
			$("#" + current.charge.shape + " .label").append('CHARGE');

		}


	}

