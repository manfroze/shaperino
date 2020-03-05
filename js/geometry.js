// VARIABLES //

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
			zero: (size.charge-rhombusSizeDiff.charge)/2 + 38,
			middle: middle,
			full: canvasSize - ((size.charge-rhombusSizeDiff.charge)/2 + 38)
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

var centerPositions = {
	"left": ["zero", "middle"],
	"top": ["middle", "zero"],
	"right": ["full", "middle"],
	"bottom": ["middle", "full"],
	"topleft": ["zero", "zero"],
	"topright": ["full", "zero"],
	"bottomright": ["full", "full"],
	"bottomleft": ["zero", "full"]
}

var mirror = {
	"full": "zero",
	"zero": "full",
	"middle": "middle"
}

var colorCode = {
	black: "#222222",
	white: "#FFFFFF",
	red: "#FF4329",
	yellow: "#FFD600",
	blue: "#0085FF",
	orange: "#FF9A3D",
	green: "#47E24D",
	violet: "#883BEB",
	grey: "#9F9F9F",
	darkred: "#823525",
	darkyellow: "#CCB152",
	darkblue: "#1A3782",
	lightred: "#FFC2C2",
	lightyellow: "#FCFF81",
	lightblue: "#7CC0FF",
	darkorange: "#825933",
	darkgreen: "#239727",
	darkviolet: "#400072",
	lightorange: "#FFBF5F",
	lightgreen: "#C8FF54",
	lightviolet: "#E64EFF",
}

// DRAW GEOMETRY //

function draw() {

	clearCanvas();
	chargePosition();

	geometry = SVG('shaperino').size(500, 500).group();

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
		square(size[kind], center.normal[kind][0], center.normal[kind][1], colorCode[current[kind].color])
	} else if (current[kind].shape == "circle") {
		circle(size[kind], center.normal[kind][0], center.normal[kind][1], colorCode[current[kind].color])
	} else if (current[kind].shape == "rhombus") {
		rhombus(size[kind]-rhombusSizeDiff[kind], center.rhombus[kind][0], center.rhombus[kind][1], colorCode[current[kind].color])
	}
}

// SET CHARGES POSITION //

function chargePosition(){
	$.each(centerPositions, function(index, value){
		if (current.charge.position == index) {
			$.each(value, function(i, v){
				center.normal.charge[i] = centerPoints.normal.charge[v]
				center.normal.split[i] = centerPoints.normal.charge[mirror[v]]
				center.rhombus.charge[i] = centerPoints.rhombus.charge[v]
				center.rhombus.split[i] = centerPoints.rhombus.charge[mirror[v]]
			});
		}
	});
}

// CLEAR //

function clearCanvas(){
	document.getElementById("shaperino").innerHTML = "";
}