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

shape = ["circle", "square", "rhombus"]

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


	function rand(name) {
		if (name instanceof Array == true) {
			var randomNumber = Math.floor(Math.random() * name.length);
			return name[randomNumber];
		} 
	}

	function randomShape(){

		setCurrent("main", "shape", rand(shape) );
		setCurrent("main", "colorType", rand(["primary", "secondary"]) );
		if (current.main.colorType == "primary") {
		setCurrent("main", "color", rand(["black", "white", "red", "yellow", "blue"]) );
        }
        if (current.main.colorType == "secondary") {
		setCurrent("main", "color", rand(["orange", "green", "violet", "grey", "darkred", "darkyellow", "darkblue", "lightred", "lightyellow", "lightblue", "darkorange", "darkgreen", "darkviolet", "lightorange", "lightgreen", "lightviolet"]) );
        }

		setCurrent("charge", "status", rand(["enabled", "disabled"]) );
		
		if (current.charge.status == "enabled") {

		setCurrent("charge", "position", rand(["top", "right", "left", "bottom", "topright", "topleft", "bottomright", "bottomleft"]) );
		setCurrent("charge", "shape", rand(shape) );
		setCurrent("charge", "colorType", rand(["primary", "secondary"]) );
		if (current.main.colorType == "primary") {
		setCurrent("charge", "color", rand(["black", "white", "red", "yellow", "blue"]) );
        }
        if (current.main.colorType == "secondary") {
		setCurrent("charge", "color", rand(["orange", "green", "violet", "grey", "darkred", "darkyellow", "darkblue", "lightred", "lightyellow", "lightblue", "darkorange", "darkgreen", "darkviolet", "lightorange", "lightgreen", "lightviolet"]) );
        }

		setCurrent("split", "status", rand(["enabled", "disabled"]) );

		} else { setCurrent("split", "status", "disabled" ); }

		if (current.split.status == "enabled") {

		setCurrent("split", "shape", rand(shape) );
		setCurrent("split", "colorType", rand(["primary", "secondary"]) );
		if (current.main.colorType == "primary") {
		setCurrent("split", "color", rand(["black", "white", "red", "yellow", "blue"]) );
        }
        if (current.main.colorType == "secondary") {
		setCurrent("split", "color", rand(["orange", "green", "violet", "grey", "darkred", "darkyellow", "darkblue", "lightred", "lightyellow", "lightblue", "darkorange", "darkgreen", "darkviolet", "lightorange", "lightgreen", "lightviolet"]) );
        }
		}	

	}

	draw();
	updateSelectors();
