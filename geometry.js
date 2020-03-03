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

function position(){


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

}


function generate() {

	clear();
	position();
	drawGeometry();
	updateSelectors();

}