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

		var geo = {
			main: {},
			charge: {},
			split: {},
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

		var current = {

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
				color: color.blue
			} 

		}

		var truth = [true, false]


		var shapeList = ["circle", "square", "rhombus"];


		var chargeTypeList = ["corner", "side"]

		var positionList = {
			x: ["left", "right"],
			y: ["top", "bottom"],
			xy: ["left", "right", "top", "bottom"]
		}

		function generate() {

			clear();

			position = {

				side: current.charge.position,
			}


        // SET CHARGES TYPE//

        if (geo.charge.draw == true) {
        	geo.charge.type = "side"
        } else {
			geo.charge.type = "side"
        }



        // SET CHARGES positionList //

        if (geo.charge.type == "corner") {
        	if (position.cornerX == "left") {
        		center.normal.charge[0] = centerPoints.normal.charge.zero;
        	}
        	if (position.cornerY == "top") {
        		center.normal.charge[1] = centerPoints.normal.charge.zero
        	}
        	if (position.cornerX == "right") {
        		center.normal.charge[0] = centerPoints.normal.charge.full
        	}
        	if (position.cornerY == "bottom") {
        		center.normal.charge[1] = centerPoints.normal.charge.full
        	}
        }

        if (geo.charge.type == "side") {
        	if (position.side == "left") {
        		center.normal.charge[0] = centerPoints.normal.charge.zero
        		center.normal.charge[1] = centerPoints.normal.charge.middle
        	}
        	if (position.side == "top") {
        		center.normal.charge[0] = centerPoints.normal.charge.middle
        		center.normal.charge[1] = centerPoints.normal.charge.zero

        	}
        	if (position.side == "right") {
        		center.normal.charge[0] = centerPoints.normal.charge.full
        		center.normal.charge[1]  = centerPoints.normal.charge.middle
        	}
        	if (position.side == "bottom") {
        		center.normal.charge[0] = centerPoints.normal.charge.middle
        		center.normal.charge[1] = centerPoints.normal.charge.full
        	}
        }

        // ASSIGN OTHER positionList //

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

    }


	// DRAW FUNCTION //

	function drawGeometry() {

		draw = SVG('drawing').size(500, 500);
		geometry = draw.group();

		// MAIN SHAPE //

		drawShape("main");

		// CHARGE //

		drawShape("charge");


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

	//document.onclick = function() {clear(); generate();};

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
		} else {
		current.main.shape = selectedShape; }
		generate();

	});

	$( ".item.color" ).click(function(e) {

		var selectedColor = $(this).attr("id");

		if (e.shiftKey) {
			current.charge.color = color[selectedColor];
		} else {
		current.main.color = color[selectedColor]; }
		generate();

	});

	$( ".item.position" ).click(function(e) {

		var selectedPosition = $(this).attr("id");
		current.charge.position = selectedPosition;
		generate();

	});