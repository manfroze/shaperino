var canvasSize = 500;
var middle = canvasSize/2;
var size = {
	main: 400,
	hyper: 280,
	charge: 220,
	split: 220
}
var rhombusSizeDiff = {
	main: 50,
	charge: 50,
	split: 50,
	hyper: 0
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
		split: [],
		hyper: [middle, middle]
	},
	rhombus: {
		main: [middle, middle],
		charge: [],
		split: [],
		hyper: [middle, middle]
	}
}
var wonderBarRotation = 0;
var wonderBarCenter = [middle, middle]
var wonderBarSizeList = {
	x: [300, 350, 400, 420, 490],
	y: [80, 100, 120]
}
var wonderBarCenterOffset = 0;
var wonderBarCenterOffsetList = [0, 25, 50, 100]

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

// DRAW GEOMETRY //

function draw() {
	clearCanvas();
	chargePosition();
	shaperino = SVG('shaperino').size(500, 500).group();
	drawShape("main");
	if (current.hyper.status == "enabled") {
		drawShape("hyper");
	}
	if (current.charge.status == "enabled") {
		drawShape("charge");
	}
	if (current.split.status == "enabled") {
		drawShape("split");
	}

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

// SINGLE SHAPE FUNCTIONS //

function circle(size, centerX, centerY, color) {
	shaperino.circle(size, size).center(centerX, centerY).attr({ fill: color })
}
function square(size, centerX, centerY, color) {
	shaperino.rect(size, size).center(centerX, centerY).attr({ fill: color })
}
function rhombus(size, centerX, centerY, color) {
	shaperino.rect(size, size).center(centerX, centerY).attr({ fill: color }).transform({ rotation: 45 })
}

// DRAW WONDER BAR //

function drawWonderBar() {

	avColors = colors.filter(e => e !== current.main.color && e !== current.charge.color && e !== current.split.color);

	if (current.wonderbar.status == "enabled") {wonder.remove();}
	current.wonderbar.status = "enabled"
	wonderBarSize = {
		x: rand(wonderBarSizeList.x),
		y: rand(wonderBarSizeList.y),
	}
	wonderBarCenter = [middle, middle];

	if (current.split.status == "enabled") {
		wonderBarCenterOffset = 0;
	} else {
		wonderBarCenterOffset = rand(wonderBarCenterOffsetList);
	}

	if (current.charge.status == "enabled") {
		if ((current.charge.position == "topleft") || (current.charge.position == "bottomright"))  {
			wonderBarRotation = 45
		}
		if ((current.charge.position == "topright") || (current.charge.position == "bottomleft")) {
			wonderBarRotation = -45
		}
		if (current.charge.position == "left") {
			wonderBarRotation = 0
			wonderBarCenter[0] = wonderBarCenter[0] - wonderBarCenterOffset
		}
		if (current.charge.position == "top") {
			wonderBarRotation = 90
			wonderBarCenter[1] = wonderBarCenter[1] - wonderBarCenterOffset
		}
		if (current.charge.position == "right") {
			wonderBarRotation = 0
			wonderBarCenter[0] = wonderBarCenter[0] + wonderBarCenterOffset
		}
		if (current.charge.position == "bottom") {
			wonderBarRotation = 90
			wonderBarCenter[1] = wonderBarCenter[1] + wonderBarCenterOffset
		}

	} else if (current.charge.status == "disabled") {

		wonderBarRotation = rand([0, 45, -45, 90]);

	}
	wonder = shaperino.rect(wonderBarSize.x, wonderBarSize.y).center(wonderBarCenter[0], wonderBarCenter[1]).attr({ fill: colorCode[rand(avColors)] }).transform({ rotation: wonderBarRotation });

}

// CLEAR //

function clearCanvas(){
	document.getElementById("shaperino").innerHTML = "";
}