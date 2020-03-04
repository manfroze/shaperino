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
		position: "topleft",
		shape: "square",
		color: "black",
		colorType: "primary",
	},
	split: {
		status: "disabled",
		position: "topbottom",
		shape: "circle",
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
		topbottom: ["top", "bottom"],
		leftright: ["left", "right"],
		topleftbottomright: ["top", "left", "bottom", "right"],
		toprightbottomleft: ["top", "left", "bottom", "right"],
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
		lightorange: ["red", "yellow", "white"],
		lightgreen: ["yellow", "blue", "white"],
		lightviolet: ["blue", "red", "white"],
	}
}

var split = {

"topbottom": "top",
"leftright": "left",
"topleftbottomright": "topleft",
"toprightbottomleft": "topright"

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

function highlight(mode, kind, label){
	$("#" + current[mode][kind]).addClass('selected');
	$("#" + current[mode][kind] + " .label").append(label);
}

function highlightComp(type, mode, kind, label){
	if (comp[type][current[mode][kind]] != ""){
		components = comp[type][current[mode][kind]];

		$("#" + components.join(", #")).addClass('bordered');
		$("#" + components.join(" .label , #")+ " .label").append(label);
	}
}

function clearSelectors(){
	$("*").removeClass('selected');
	$("*").removeClass('bordered');
	$(".label").html('');
}

function updateSelectors(){
	clearSelectors();
	//updatePowerCounters("main", "shape");
	highlight("main", "shape", "M");
	highlight("main", "color", "M");
	if (current.main.colorType == "secondary") {
		highlightComp("color", "main", "color", "m");
	}
	if (current.charge.status == "enabled" && current.split.status == "disabled") {
		highlight("charge", "position");
		if (current.charge.type == "corner"){
			highlightComp("charge", "charge", "position");
		}
	}

	if (current.charge.status == "enabled") {
			//updatePowerCounters("shape", "charge");
			highlight("charge", "shape", "C");
			highlight("charge", "color", "C");
			if (current.charge.colorType == "secondary") {
				highlightComp("color", "charge", "color", "c");
			}
		}

		if (current.split.status == "enabled") {
			//updatePowerCounters("shape", "split");
			highlight("split", "position");
			highlight("split", "shape", "S");
			highlight("split", "color", "S");
			highlightComp("split", "split", "position");
			if (current.split.colorType == "secondary") {
				highlightComp("color", "split", "color", "s");
			}
		}
	}

// CLICKS //

$(document).on( "click", ".item.shape", function(e) {
	modifier(e, "shape");
});

$(document).on( "click", ".item.color", function(e) {
	modifier(e, "color");
});

$(document).on( "click", ".item.primary", function(e) {
	modifier(e, "colorType", "primary");
});

$(document).on( "click", ".item.secondary", function(e) {
	modifier(e, "colorType", "secondary");
});

$(document).on( "click", ".item.charge", function(e) {
	var target = $(e.currentTarget).attr("id");
	setCurrent("charge", "position", target);
	setCurrent("charge", "status", "enabled");
	setCurrent("split", "status", "disabled");
});




$(document).on( "click", ".item.split", function(e) {
	var target = $(e.currentTarget).attr("id");
	setCurrent("split", "position", target);
	setCurrent("charge", "position", split[target]);
	setCurrent("split", "status", "enabled");
	setCurrent("charge", "status", "enabled");
});

$(document).on( "click", ".item.side", function(e) {
	setCurrent("charge", "type", "side");
});

$(document).on( "click", ".item.corner", function(e) {
	setCurrent("charge", "type", "corner");
});

$(document).on( "click", ".item", function(e) {
	draw();
	updateSelectors();
});


draw();
updateSelectors();
