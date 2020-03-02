// ABSOLUTE VARIABLES //

		var cloneIndex = 0;

		var canvasSize = 500;
		var middle = canvasSize/2;

		var size = {
			main: 400,
			small: 220,
			mirror: 220
		}

		var rhombusSizeDiff = {
			main: 50,
			small: 50,
			mirror: 50
		}

		// RELATIVE VARIABLES //

		var geo = {
			main: {},
			small: {},
			mirror: {},
		}

		var centerPoints = {
			normal: {
				small: {
					zero: size.small/2,
					middle: middle,
					full: canvasSize - size.small/2
				}
			},
			rhombus: {

				small: {
					zero: (size.small-rhombusSizeDiff.small)/2 + 43,
					middle: middle,
					full: canvasSize - ((size.small-rhombusSizeDiff.small)/2 + 43)
				}
			}
		}

		var center = {
			normal: {
				main: [middle, middle],
				small: [],
				mirror: []
			},
			rhombus: {
				main: [middle, middle],
				small: [],
				mirror: []
			}
		}

		// LISTS //

		var truth = [true, false]
		var colorList = ["#333333", "#002A97", "#0084FF", "#009006", "#400072", "#47E24D", "#545454", "#883BEB", "#956F4C", "#95CCFF", "#9F9F9F", "#A61E00", "#C7F16E", "#CDB329", "#DADADA", "#E64EFF", "#FF603D", "#FF9A3D", "#FFAEB3", "#FFC38C", "#FFD600", "#FFEE97", "#FFFFFF"]
		var shapeList = ["square", "circle", "rhombus"];


		var smallChargeTypeList = ["corner", "side"]

		var positionList = {
			x: ["left", "right"],
			y: ["top", "bottom"],
			xy: ["left", "right", "top", "bottom"]
		}

		function generate() {

			shuffle(shapeList);
			shuffle(colorList);

			while (colorList[0] == "#FFFFFF") {
				console.log(colorList);
				shuffle(colorList);
			}

			shape = {
				main: shapeList[0],
				small: shapeList[2],
				mirror: shapeList[1]
			}

			color = {
				main: colorList[0],
				small: colorList[2],
				mirror: colorList[1],
			}

			position = {
				cornerX: rand(positionList.x),
				cornerY: rand(positionList.y),
				side: rand(positionList.xy),
			}


        // SET SMALL CHARGE PRESENCE //


        geo.small.draw = rand(truth)


        // SET SMALL CHARGES TYPE//

        if (geo.small.draw == true) {
        	geo.small.type = rand(smallChargeTypeList)
        } else {
        	geo.small.type = "none";
        }

        // SET MIRROR SMALL CHARGE PRESENCE //

        	geo.mirror.draw = rand(truth)


        // SET SMALL CHARGES positionList //

        if (geo.small.type == "corner") {
        	if (position.cornerX == "left") {
        		center.normal.small[0] = centerPoints.normal.small.zero;
        	}
        	if (position.cornerY == "top") {
        		center.normal.small[1] = centerPoints.normal.small.zero
        	}
        	if (position.cornerX == "right") {
        		center.normal.small[0] = centerPoints.normal.small.full
        	}
        	if (position.cornerY == "bottom") {
        		center.normal.small[1] = centerPoints.normal.small.full
        	}
        }

        if (geo.small.type == "side") {
        	if (position.side == "left") {
        		center.normal.small[0] = centerPoints.normal.small.zero
        		center.normal.small[1] = centerPoints.normal.small.middle
        	}
        	if (position.side == "top") {
        		center.normal.small[0] = centerPoints.normal.small.middle
        		center.normal.small[1] = centerPoints.normal.small.zero

        	}
        	if (position.side == "right") {
        		center.normal.small[0] = centerPoints.normal.small.full
        		center.normal.small[1]  = centerPoints.normal.small.middle
        	}
        	if (position.side == "bottom") {
        		center.normal.small[0] = centerPoints.normal.small.middle
        		center.normal.small[1] = centerPoints.normal.small.full
        	}
        }

        // ASSIGN OTHER positionList //

        for (var i = 0; i < 2; i++) {

        	if (center.normal.small[i] == centerPoints.normal.small.zero) {
        		center.normal.mirror[i] = centerPoints.normal.small.full;
        		center.rhombus.small[i] = centerPoints.rhombus.small.zero;
        		center.rhombus.mirror[i] = centerPoints.rhombus.small.full
        	} else if (center.normal.small[i] == centerPoints.normal.small.full) {
        		center.normal.mirror[i] = centerPoints.normal.small.zero;
        		center.rhombus.small[i] = centerPoints.rhombus.small.full;
        		center.rhombus.mirror[i] = centerPoints.rhombus.small.zero
        	} else if (center.normal.small[i] == centerPoints.normal.small.middle) {
        		center.normal.mirror[i] = centerPoints.normal.small.middle;
        		center.rhombus.small[i] = centerPoints.rhombus.small.middle;
        		center.rhombus.mirror[i] = centerPoints.rhombus.small.middle
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

		// SMALL CHARGE //

		if (geo.small.draw == true) {
			drawShape("small");
		}

		// MIRROR SMALL CHARGE //

		if (geo.mirror.draw == true) {
			drawShape("mirror");
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

		if (shape[kind] == "square") {
			square(size[kind], center.normal[kind][0], center.normal[kind][1], color[kind])
		} else if (shape[kind] == "circle") {
			circle(size[kind], center.normal[kind][0], center.normal[kind][1], color[kind])
		} else if (shape[kind] == "rhombus") {
			rhombus(size[kind]-rhombusSizeDiff[kind], center.rhombus[kind][0], center.rhombus[kind][1], color[kind])
		}

	}

	// SHUFFLE FUNCTION //

	function shuffle(a) {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}

	function rand(name) {
		if (name instanceof Array == true) {
			var randomNumber = Math.floor(Math.random() * name.length);
			return name[randomNumber];
		} 
	}

	generate();

	function clear(){
		document.getElementById("drawing").innerHTML = "";

	}

	document.onclick = function() {clear(); generate();};