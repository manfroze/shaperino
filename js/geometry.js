const canvasSize = 500;
const middle = canvasSize/2;
const size = {
	main: 400,
	hyper: 280,
	charge: 220,
	split: 220
}

const modif = {
	rhombus: {
		size: -50,
		offset: 38,
	},
	cross: {
		size: 0.4,
	},
	octagon: {
		size: 0.5,
	}
}

const chargeCenter = {
	circle: {
			zero: size.charge/2,
			middle: middle,
			full: canvasSize - size.charge/2
		},
	square: {
			zero: size.charge/2,
			middle: middle,
			full: canvasSize - size.charge/2
		},
	rhombus: {
			zero: (size.charge+modif.rhombus.size)/2 + modif.rhombus.offset,
			middle: middle,
			full: canvasSize - ((size.charge+modif.rhombus.size)/2 + modif.rhombus.offset)
	},
	cross: {
			zero: size.charge/2,
			middle: middle,
			full: canvasSize - size.charge/2
	},
	octagon: {
			zero: size.charge/2,
			middle: middle,
			full: canvasSize - size.charge/2
	},
}

const wonderBarSizeList = {
	x: [300, 350, 400, 420, 490],
	y: [80, 100, 120]
}
const wonderBarCenterOffsetList = [0, 25, 50, 100]

const centerPositions = {
	"left": ["zero", "middle"],
	"top": ["middle", "zero"],
	"right": ["full", "middle"],
	"bottom": ["middle", "full"],
	"topleft": ["zero", "zero"],
	"topright": ["full", "zero"],
	"bottomright": ["full", "full"],
	"bottomleft": ["zero", "full"]
}

const mirror = {
	"full": "zero",
	"zero": "full",
	"middle": "middle"
}

const colorCode = {
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

var center = {
	circle: {
		main: [middle, middle],
		charge: [],
		split: [],
		hyper: [middle, middle]
	},
	square: {
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
	},
	cross: {
		main: [middle, middle],
		charge: [],
		split: [],
		hyper: [middle, middle]
	},
	octagon: {
		main: [middle, middle],
		charge: [],
		split: [],
		hyper: [middle, middle]
	}
}

var wonderBarCenter = [middle, middle]
var wonderBarRotation = 0;
var wonderBarCenterOffset = 0;

// SET CHARGES POSITION //

function chargePosition(){
	$.each(centerPositions, function(index, value){
		if (current.charge.position == index) {
			$.each(value, function(i, v){
				$.each(shape, function(key, sha){
					center[sha].charge[i] = chargeCenter[sha][v]
					center[sha].split[i] = chargeCenter[sha][mirror[v]]
				});
			});
		}
	});
}

// DRAW GEOMETRY //

function draw() {
	clearCanvas();
	chargePosition();
	shaperino = SVG('shaperino').size(500, 500).group();
	$.each(mode, function(j, k){
		if (current[k].status == "enabled") {
			drawShape(k);
		}
	});

}

// DRAW SHAPE FUNCTION //

/*function drawShape(kind) {
	shapeDraw(current[kind].shape, size[kind]-shapeData[current[kind].shape].size[kind], center[current[kind].shape][kind][0], center[current[kind].shape][kind][1], colorCode[current[kind].color])
}*/

function drawShape(kind) {
	shapeDraw(current[kind].shape, size[kind], center[current[kind].shape][kind][0], center[current[kind].shape][kind][1], colorCode[current[kind].color])
}

function shapeDraw(shape, size, centerX, centerY, color) {
	if (shape == "circle") {
		shaperino.circle(size, size).center(centerX, centerY).attr({ fill: color })
	}
	if (shape == "square") {
		shaperino.rect(size, size).center(centerX, centerY).attr({ fill: color })
	}
	if (shape == "rhombus") {
		shaperino.rect(size+modif.rhombus.size, size+modif.rhombus.size).center(centerX, centerY).attr({ fill: color }).transform({ rotation: 45 })
	}
	if (shape == "cross") {
		shaperino.rect(size, size*modif.cross.size).center(centerX, centerY).attr({ fill: color })
		shaperino.rect(size*modif.cross.size, size).center(centerX, centerY).attr({ fill: color })
	}
	if (shape == "octagon") {
		shaperino.polygon().ngon({radius: size*modif.octagon.size, edges: 8}).center(centerX, centerY).attr({ fill: color }).transform({ rotation: 22.5 })
	}
}

// DRAW WONDER BAR //

function drawWonderBar() {
	avColors = colors.filter(e => e !== current.main.color && e !== current.charge.color && e !== current.split.color && e !== current.hyper.color);
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

	//wonder.animate().rotate(wonderBarRotation + 360);
}

// CLEAR //

function clearCanvas(){
	document.getElementById("shaperino").innerHTML = "";
}