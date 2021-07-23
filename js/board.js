const split = {
	"topbottom": "top",
	"leftright": "left",
	"topleftbottomright": "topleft",
	"toprightbottomleft": "topright"
}

const splitto = swap(split);

function setCurrent(mode, kind, selected){
	current[mode][kind] = selected;
}

function highlightCharge(){
	$("#" + current.charge.position).addClass('selected').addClass('sel-position');
}

function highlight(mode, kind){
	$("#" + current[mode][kind]).addClass('selected').addClass('sel-' + mode).addClass('sel-' + kind);
	$("#" + current[mode][kind] + " .label").append('<span class="pip sel-'+ mode +'"></span>');
}

function highlightComp(type, mode, kind){
	if (comp[type][current[mode][kind]] != ""){
		components = comp[type][current[mode][kind]];
		$("#" + components.join(", .card#")).addClass('bordered comp').addClass('sel-' + mode);
		$("#" + components.join(" .label , .card#") + " .label").append('<span class="pip comp sel-' + mode + '"></span>');
	}
}

function clearSelectors(){
	$.each(mode, function(key, value){
		$(".item").removeClass('sel-' + value);
	});
	$(".item").removeClass('selected');
	$("*").removeClass('bordered');
	$("*").removeClass('comp');
	$(".label").html('');
}

function updateSelectors(){
	clearSelectors();
	highlight("main", "shape");
	highlight("main", "color");
	if (color.composite.includes(current.main.color)) {
		highlightComp("color", "main", "color");
	}
	if (current.charge.status == "enabled" && current.split.status == "disabled") {
		//highlight("charge", "position");
		highlightCharge();
		if (position.corner.includes(current.charge.position)){
			highlightComp("charge", "charge", "position");
		}
	}
	if (current.charge.status == "enabled") {
		highlight("charge", "shape");
		highlight("charge", "color");
		if (color.composite.includes(current.charge.color)) {
			highlightComp("color", "charge", "color");
		}
		$('.button.charge').addClass("active").removeClass("inactive");
		$('#charge .button.remove').addClass("active").removeClass("inactive");
	} 
	if (current.split.status == "enabled") {
		highlight("split", "position");
		highlight("split", "shape");
		highlight("split", "color");
		highlightComp("split", "split", "position");
		if (color.composite.includes(current.split.color)) {
			highlightComp("color", "split", "color");
		}
		$('.button.split').addClass("active").removeClass("inactive");
	}

	if (current.hyper.status == "enabled") {
		highlight("hyper", "position");
		highlight("hyper", "shape");
		highlight("hyper", "color");
		if (color.composite.includes(current.hyper.color)) {
			highlightComp("color", "hyper", "color");
		}
		$('.button.small.hyper').addClass("active").removeClass("inactive");
		$('#hyper .button.remove').addClass("active").removeClass("inactive");
	}

	if (current.charge.status == "disabled"){
		$('.button.charge').addClass("inactive").removeClass("active");
		$('#charge .button.remove').addClass("inactive").removeClass("active");
	}
	if (current.split.status == "disabled"){
		$('.button.split').addClass("inactive").removeClass("active");
	}
	if (current.hyper.status == "disabled"){
		$('.button.small.hyper').addClass("inactive").removeClass("active");
		$('#hyper .button.remove').addClass("inactive").removeClass("active");
	}
	//selector("main");
}

function writePowerCounters(){
	$.each(token, function(key, value){
		$.each(powertype, function(key, powertypeValue){
			$('#' + value + ' .power .' + powertypeValue + ' span').html(formatNumber(powerCalculate[powertypeValue][value]));
		});
	});
}

function setTypes(){
	$.each(splitto, function(key, value){
		if (current.charge.position == key) {
			setCurrent("split", "position", value);
		}
	});
}

function selector(mode){
	current.select = mode;
	$('.button.small.active').removeClass("selected");
	$('.button.small.active.' + mode).addClass("selected");
}

function update(){
	setTypes();
	draw();
	updateSelectors();
	writeBlazon();
	gridMove();
	writePowerCounters();
	cloneCopy();
}

update();

// INPUT //

// SELECTORS KEYBOARD //

keyDown = false;

$(document).bind('keydown', function (event) {
	if (current.charge.status == "enabled") {
		if (event.key == "Shift") {
			selector("charge")
		}
	}
	if (current.split.status == "enabled") {
		if (event.key == "Alt") {
			selector("split")
		}
	}
	if (current.hyper.status == "enabled") {
		if (navigator.platform == "MacIntel"){
			if (event.key == "Meta") {
				selector("hyper")
			}
		} else {
			if (event.key == "Control") {
				selector("hyper")
			}
		}

	}
	keyDown = true;
});

$(document).bind('keyup', function (event) {
	if (event.key == "Shift" || event.key == "Alt" || event.key == "Meta" || event.key == "Control") {
		selector("main")
	}
	keyDown = false;
});

// SELECTOR CLICK //

$(document).on( "click", ".button.small.main.active", function(e) {
	selector("main");
});

$(document).on( "click", ".button.small.charge.active", function(e) {
	selector("charge");
});

$(document).on( "click", ".button.small.split.active", function(e) {
	selector("split");
});

$(document).on( "click", ".button.small.hyper.active", function(e) {
	selector("hyper");
});

// REMOVE //

$(document).on( "click", "#charge .button.remove", function(e) {
	setCurrent("charge", "status", "disabled");
	setCurrent("split", "status", "disabled");
	update();
});

$(document).on( "click", "#hyper .button.remove", function(e) {
	setCurrent("hyper", "status", "disabled");
	update();
});

// ITEM //

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
	if (keyDown == false){
		selector("main");
	}
});