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
		size: 0.3,
		offset: 73,
	},
	octagon: {
		size: 0.5,
		offset: 56,
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
			zero: (size.charge*modif.cross.size)/2 + modif.cross.offset,
			middle: middle,
			full: canvasSize - ((size.charge*modif.cross.size)/2 + modif.cross.offset)
	},
	octagon: {
			zero: (size.charge*modif.octagon.size)/2 + modif.octagon.offset,
			middle: middle,
			full: canvasSize - ((size.charge*modif.octagon.size)/2 + modif.octagon.offset)
	},
}

const wonderBarSizeList = {
	x: [300, 350, 400, 450],
	y: [80, 100, 120]
}
const wonderBarCenterOffsetList = [0, 30, 50, 80]

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

var center = {
	circle: {},
	square: {},
	rhombus: {},
	cross: {},
	octagon: {}
}

$.each(shape, function(key, sha){
 center[sha].main = [middle, middle];
 center[sha].charge = [];
 center[sha].split = [];
 center[sha].hyper = [middle, middle];
});

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

	mainShape = SVG('main-canvas').size(500, 500).group();
	chargeShape = SVG('charge-canvas').size(500, 500).group();
	splitShape = SVG('split-canvas').size(500, 500).group();
	hyperShape = SVG('hyper-canvas').size(500, 500).group();

	$.each(mode, function(j, k){
		if (current[k].status == "enabled") {
			drawShape(k);
			if(current.chargenav.status == "enabled"){
			cloneCopy();
		}
		}
	});
}

function canvas(mode){
	canvasname = mode + "Shape";
	return canvasname;
}

// DRAW SHAPE FUNCTION //

function drawShape(mode) {
	shapeDraw(mode, current[mode].shape, size[mode], center[current[mode].shape][mode][0], center[current[mode].shape][mode][1], colorCode[current[mode].color])
}

function shapeDraw(mode, shape, size, centerX, centerY, color) {
	cmode = eval(canvas(mode))
	if (shape == "circle") {
		cmode.circle(size, size).center(centerX, centerY).attr({ fill: color })
	}
	if (shape == "square") {
		cmode.rect(size, size).center(centerX, centerY).attr({ fill: color })
	}
	if (shape == "rhombus") {
		cmode.rect(size+modif.rhombus.size, size+modif.rhombus.size).center(centerX, centerY).attr({ fill: color }).transform({ rotation: 45 })
	}
	if (shape == "cross") {
		cmode.rect(size, size*modif.cross.size).center(centerX, centerY).attr({ fill: color }).transform({ rotation: 45 })
		cmode.rect(size*modif.cross.size, size).center(centerX, centerY).attr({ fill: color }).transform({ rotation: 45 })
	}
	if (shape == "octagon") {
		cmode.polygon().ngon({radius: size*modif.octagon.size, edges: 8}).center(centerX, centerY).attr({ fill: color }).transform({ rotation: 22.5 })
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
	wonder = SVG('wonder-canvas').size(500, 500).group().rect(wonderBarSize.x, wonderBarSize.y).center(wonderBarCenter[0], wonderBarCenter[1]).attr({ fill: colorCode[rand(avColors)] }).transform({ rotation: wonderBarRotation });

	//wonder.animate().rotate(wonderBarRotation + 360);
}

function cloneCopy(){
	if(document.getElementById('shapeClone')){
	document.getElementById('shapeClone').innerHTML = "";
	smallclone = SVG('shapeClone').size(100, 100);
	mainClone = mainShape.clone();
	chargeClone = chargeShape.clone();
	splitClone = splitShape.clone();
	hyperClone = hyperShape.clone();
	mainClone.transform({scale: 0.2, cx: 0, cy: 0});
	chargeClone.transform({scale: 0.2, cx: 0, cy: 0});
	splitClone.transform({scale: 0.2, cx: 0, cy: 0});
	hyperClone.transform({scale: 0.2, cx: 0, cy: 0});
	mainClone.addTo(smallclone);
	hyperClone.addTo(smallclone);
	chargeClone.addTo(smallclone);
	splitClone.addTo(smallclone);
	}
}


// CLEAR //

function clearCanvas(){
	$.each(mode, function(j, k){
		document.getElementById(k + '-canvas').innerHTML = "";
	});
	document.getElementById('wonder-canvas').innerHTML = "";
}