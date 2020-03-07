var current = {
	main: {
		shape: "circle",
		color: "black",
		colorType: "basic",
	}, 
	charge: {
		status: "disabled",
		type: "side",
		position: "topleft",
		shape: "square",
		color: "black",
		colorType: "basic",
	},
	split: {
		status: "disabled",
		position: "topbottom",
		shape: "circle",
		color: "black",
		colorType: "basic",
	},
	wonderbar: {
		status: "disabled",
		color: "black",
	},
	select: "main"
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

var splitto = swap(split);

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
	highlight("main", "shape", "M");
	highlight("main", "color", "M");
	if (current.main.colorType == "composite") {
		highlightComp("color", "main", "color", "m");
	}
	if (current.charge.status == "enabled" && current.split.status == "disabled") {
		highlight("charge", "position");
		if (current.charge.type == "corner"){
			highlightComp("charge", "charge", "position");
		}
	}
	if (current.charge.status == "enabled") {
		highlight("charge", "shape", "C");
		highlight("charge", "color", "C");
		if (current.charge.colorType == "composite") {
			highlightComp("color", "charge", "color", "c");
		}
		$('.button.charge').addClass("active").removeClass("inactive");
		$('.button.remove').addClass("active").removeClass("inactive");
	} 
	if (current.split.status == "enabled") {
		highlight("split", "position");
		highlight("split", "shape", "S");
		highlight("split", "color", "S");
		highlightComp("split", "split", "position");
		if (current.split.colorType == "composite") {
			highlightComp("color", "split", "color", "s");
		}
		$('.button.split').addClass("active").removeClass("inactive");
	} 

	if (current.charge.status == "disabled"){
		$('.button.charge').addClass("inactive").removeClass("active");
		$('.button.remove').addClass("inactive").removeClass("active");
	}
	if (current.split.status == "disabled"){
		$('.button.split').addClass("inactive").removeClass("active");
	}

}


function setTypes(){
	if (position.side.includes(current.charge.position)) {
		setCurrent("charge", "type", "side");
	} else if (position.corner.includes(current.charge.position)) {
		setCurrent("charge", "type", "corner");
	}

	$.each(mode, function(key, value){
		if (color.basic.includes(current[value].color)) {
			setCurrent(value, "colorType", "basic");
		} else if (color.composite.includes(current[value].color)) {
			setCurrent(value, "colorType", "composite");
		}
	});
	$.each(splitto, function(key, value){
		if (current.charge.position == key) {
			setCurrent("split", "position", value);
		}
	});
}

function randomShape(){
	setCurrent("main", "shape", rand(shape) );
	setCurrent("main", "color", rand(colors) );
	setCurrent("charge", "status", rand(["enabled", "disabled"]) );
	if (current.charge.status == "enabled") {
		setCurrent("charge", "position", rand(chargePositions) );
		setCurrent("charge", "shape", rand(shape) );
		setCurrent("charge", "color", rand(colors) );
		setCurrent("split", "status", rand(["enabled", "disabled"]) );
	} else { setCurrent("split", "status", "disabled" ); }
	if (current.split.status == "enabled") {
		setCurrent("split", "shape", rand(shape) );
		setCurrent("split", "color", rand(colors) );
	}	
}

function selector(mode){
	current.select = mode;
	if (mode == "main"){
		$('.button.active').removeClass("selected");	
	} else {
		$('.button.active').removeClass("selected");
		$('.button.active.' + mode).addClass("selected");
	}
}

function update(){
	setTypes();
	draw();
	updateSelectors();
	writeBlazon();
}

update();

// INPUT //

$(document).bind('keydown', function (event) {
	if (current.charge.status =="enabled") {
		if (event.keyCode == 16) {
			selector("charge")
		}
	}
	if (event.keyCode == 18) {
		if (current.split.status =="enabled") {
			selector("split")
		}
	}
});

$(document).bind('keyup', function (event) {
	if (event.keyCode == 16 || event.keyCode == 18) {
		selector("main")
	}
});

$(document).on( "click", "#charge .button.charge", function(e) {
	selector("charge");
});

$(document).on( "click", "#charge .button.split", function(e) {
	selector("split");
});

$(document).on( "click", "#charge .button.remove", function(e) {
	setCurrent("charge", "status", "disabled");
	setCurrent("split", "status", "disabled");
	update();
});

$(document).on( "click", ".item.shape.active", function(e) {
	target = $(e.currentTarget).attr("id");
	setCurrent(current.select, "shape", target);
});
$(document).on( "click", ".item.color.active", function(e) {
	target = $(e.currentTarget).attr("id");
	setCurrent(current.select, "color", target);
});

$(document).on( "click", ".item.charge.active", function(e) {
	var target = $(e.currentTarget).attr("id");
	setCurrent("charge", "position", target);
	setCurrent("charge", "status", "enabled");
	setCurrent("split", "status", "disabled");
});
$(document).on( "click", ".item.split.active", function(e) {
	var target = $(e.currentTarget).attr("id");
	setCurrent("split", "position", target);
	setCurrent("charge", "position", split[target]);
	setCurrent("split", "status", "enabled");
	setCurrent("charge", "status", "enabled");
});

$(document).on( "click", ".item.active", function(e) {
	update();
});