var color = {
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

var shape = ["circle", "square", "rhombus"];
var mode = ["main", "charge", "split"];


var current = {
	main: {
		shape: "circle",
		color: "black",
		colorType: "primary",
	}, 
	charge: {
		status: "disabled",
		type: "side",
		position: "top",
		shape: "square",
		color: "black",
		colorType: "primary",
	},
	split: {
		status: "disabled",
		shape: "rhombus",
		color: "black",
		colorType: "primary",
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
		topleft: ["top", "left", "bottom", "right"],
		topright: ["top", "left", "bottom", "right"],
	},
	color: {
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

function clear(){
	document.getElementById("drawing").innerHTML = "";
}

function setCurrent(mode, kind, selected){
	current[mode][kind] = selected;
}

function modifier(e, kind, target){
	if (!target) {
		target = $(e.currentTarget).attr("id");
	}
	if (e.shiftKey) {
		if(current.charge.status == "enabled"){
			setCurrent("charge", kind, target);
		}
	} else if (e.altKey) {
		if(current.split.status == "enabled"){
			setCurrent("split", kind, target);
		}
	} else {
		setCurrent("main", kind, target);
	}
}

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
		updatePowerCounters("main", "shape");
		highlight("main", "shape", "shape", "M");
		highlight("main", "color", "color", "M");
		if (current.main.colorType == "secondary") {
			highlightComp("color", "main", "color", "color", "m");
		}
		if (current.charge.status == "enabled" && current.split.status == "disabled") {
			highlight("charge", "position", "charge");
			if (current.charge.type == "corner"){
				highlightComp("charge", "charge", "position", "charge");
			}
		}


		if (current.charge.status == "enabled") {
			//updatePowerCounters("shape", "charge");
			highlight("charge", "shape", "shape", "C");
			highlight("charge", "color", "color", "C");
			if (current.charge.colorType == "secondary") {
				highlightComp("color", "charge", "color", "color", "c");
			}
		}

		if (current.split.status == "enabled") {
			//updatePowerCounters("shape", "split");
			highlight("charge", "position", "split");
			highlight("split", "shape", "shape", "S");
			highlight("split", "color", "color", "S");
			highlightComp("split", "charge", "position", "charge");
			if (current.split.colorType == "secondary") {
				highlightComp("color", "split", "color", "color", "s");
			}
		}
	}

		// CLICKS //

	$( ".item.shape" ).click(function(e) {
		modifier(e, "shape");
	});

	$( ".item.color" ).click(function(e) {
		modifier(e, "color");
	});

	$( ".item.primary" ).click(function(e) {
		modifier(e, "colorType", "primary");
	});

	$( ".item.secondary" ).click(function(e) {
		modifier(e, "colorType", "secondary");
	});

	$( ".item.charge" ).click(function(e) {
		var target = $(e.currentTarget).attr("id");
		setCurrent("charge", "position", target);
		setCurrent("charge", "status", "enabled");
		setCurrent("split", "status", "disabled");
	});

	$( ".item.split" ).click(function(e) {
		var target = $(e.currentTarget).attr("id");
		setCurrent("charge", "position", target);
		setCurrent("split", "status", "enabled");
		setCurrent("charge", "status", "enabled");
	});

	$( ".item.side" ).click(function(e) {
		setCurrent("charge", "type", "side");
	});

	$( ".item.corner" ).click(function(e) {
		setCurrent("charge", "type", "corner");
	});

	$( ".item" ).click(function(e) {
		generate();
	});



generate();