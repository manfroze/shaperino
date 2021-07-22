const comp = {
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
	$("*").removeClass('selected');
	$("*").removeClass('bordered');
	$("*").removeClass('comp');
	$(".label").html('');
}

function updateSelectors(){
	clearSelectors();
	highlight("main", "shape");
	highlight("main", "color");
	if (current.main.colorType == "composite") {
		highlightComp("color", "main", "color");
	}
	if (current.charge.status == "enabled" && current.split.status == "disabled") {
		//highlight("charge", "position");
		highlightCharge();
		if (current.charge.type == "corner"){
			highlightComp("charge", "charge", "position");
		}
	}
	if (current.charge.status == "enabled") {
		highlight("charge", "shape");
		highlight("charge", "color");
		if (current.charge.colorType == "composite") {
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
		if (current.split.colorType == "composite") {
			highlightComp("color", "split", "color");
		}
		$('.button.split').addClass("active").removeClass("inactive");
	}

	if (current.hyper.status == "enabled") {
		highlight("hyper", "position");
		highlight("hyper", "shape");
		highlight("hyper", "color");
		if (current.hyper.colorType == "composite") {
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
	selector("main");
}

function updatePower(){
	$.each(powertype, function(key, powertypeValue){
		$.each(kind, function(key, kindValue){
			$.each(mode, function(key, modeValue){
				$('.sel-' + kindValue + '.sel-' + modeValue + ' .power .' + powertypeValue + ' span').html(formatNumber(power[powertypeValue][kindValue] * multi[modeValue]));
				$('.sel-' + kindValue + '.comp.sel-' + modeValue + ' .power .' + powertypeValue + ' span').html(formatNumber(power[powertypeValue][kindValue] * multi[modeValue] * multi.comp));
				
				$.each(mode, function(key, modeValueTwo){
					if(modeValue != modeValueTwo) {	
						$('.sel-' + kindValue + '.sel-' + modeValue + '.sel-' + modeValueTwo + ' .power .' + powertypeValue + ' span').html(formatNumber((power[powertypeValue][kindValue] * multi[modeValue]) + (power[powertypeValue][kindValue] * multi[modeValueTwo])));
						$('.sel-' + kindValue + '.comp.sel-' + modeValue + '.sel-' + modeValueTwo + ' .power .' + powertypeValue + ' span').html(formatNumber((power[powertypeValue][kindValue] * multi[modeValue]) + (power[powertypeValue][kindValue] * multi[modeValueTwo]) * multi.comp ));
					}
					$.each(mode, function(key, modeValueThree){
						if(modeValue != modeValueTwo && modeValueTwo != modeValueThree && modeValue != modeValueThree) {	
							$('.sel-' + kindValue + '.sel-' + modeValue + '.sel-' + modeValueTwo + '.sel-' + modeValueThree + ' .power .' + powertypeValue + ' span').html(formatNumber((power[powertypeValue][kindValue] * multi[modeValue]) + (power[powertypeValue][kindValue] * multi[modeValueTwo]) + (power[powertypeValue][kindValue] * multi[modeValueThree])));
							$('.sel-' + kindValue + '.comp.sel-' + modeValue + '.sel-' + modeValueTwo + '.sel-' + modeValueThree + ' .power .' + powertypeValue + ' span').html(formatNumber((power[powertypeValue][kindValue] * multi[modeValue]) + (power[powertypeValue][kindValue] * multi[modeValueTwo]) + (power[powertypeValue][kindValue] * multi[modeValueThree]) * multi.comp ));
						}
					});
				});
			});
		});
	});
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
	updatePower();
}

update();

// INPUT //

$(document).bind('keydown', function (event) {
	if (current.charge.status == "enabled") {
		if (event.key == "Shift") {
			selector("charge")
		}
	}
	if (event.key == "Alt") {
		if (current.split.status == "enabled") {
			selector("split")
		}
	}

});

$(document).bind('keyup', function (event) {
	if (event.key == "Shift" || event.key == "Alt") {
		selector("main")
	}
});

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

$(document).on( "click", "#charge .button.remove", function(e) {
	setCurrent("charge", "status", "disabled");
	setCurrent("split", "status", "disabled");
	update();
});

$(document).on( "click", "#hyper .button.remove", function(e) {
	setCurrent("hyper", "status", "disabled");
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