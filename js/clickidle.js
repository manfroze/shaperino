var counter = {
	circle: 0,
	square: 0,
	rhombus: 0,
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	black: 0,
	white: 0,
	red: 0,
	yellow: 0,
	blue: 0,
}

var clickPower = {
	shape: {
		main: 1,
		charge: 0.5,
		split: 0.1,
	},
	charge: {
		position: 1,
	},
	color: {
		main: 1,
		charge: 0.4,
		split: 0.2,
	},
}

var idlePower = {
	shape: {
		main: 0,
		charge: 0,
		split: 0,
	},
	charge: {
		position: 0,
	},
	color: {
		main: 0,
		charge: 0,
		split: 0,
	},
}

var clickMult = 0.5;
var idleMult = 0.5;

function writeCounters(){	
	$.each(counter, function(index){
		$("#" + index + " .counter").html(Math.floor(counter[index]));
	});
}

function clickShaperino(){

// SHAPE //

counter[current.main.shape] +=clickPower.shape.main;
if (current.charge.status == "enabled") {
	counter[current.charge.shape] +=clickPower.shape.charge;
}
if (current.split.status == "enabled") {
	counter[current.split.shape] +=clickPower.shape.split;
}

// CHARGE //

if (current.charge.status == "enabled") {
	counter[current.charge.position] +=clickPower.charge.position;
}

// COLOR //

counter[current.main.color] +=clickPower.color.main;
if (current.charge.status == "enabled") {
	counter[current.charge.color] +=clickPower.color.charge;
}
if (current.split.status == "enabled") {
	counter[current.split.color] +=clickPower.color.split;
}

// CORNER COMP //

if (current.charge.status == "enabled" && current.charge.type == "corner") {
	$.each(comp.charge[current.charge.position], function(index, value){
		counter[value] +=clickPower.charge.position*clickMult;
	});
}

// SPLIT COMP //

if (current.split.status == "enabled") {
	$.each(comp.split[current.split.position], function(index, value){
		counter[value] +=clickPower.charge.position*clickMult;
	});
}

// COLOR COMP //

$.each(comp.color[current.main.color], function(index, value){
	counter[value] +=clickPower.color.main*clickMult;
});

if (current.charge.status == "enabled") {
	$.each(comp.color[current.charge.color], function(index, value){
		counter[value] +=clickPower.color.charge*clickMult;
	});
}

if (current.split.status == "enabled") {
	$.each(comp.color[current.split.color], function(index, value){
		counter[value] +=clickPower.color.split*clickMult;
	});
}

writeCounters();

}

function idling(){

// SHAPE //

counter[current.main.shape] +=idlePower.shape.main;
if (current.charge.status == "enabled") {
	counter[current.charge.shape] +=idlePower.shape.charge;
}
if (current.split.status == "enabled") {
	counter[current.split.shape] +=idlePower.shape.split;
}

// CHARGE //

if (current.charge.status == "enabled") {
	counter[current.charge.position] +=idlePower.charge.position;
}

// COLOR //

counter[current.main.color] +=idlePower.color.main;
if (current.charge.status == "enabled") {
	counter[current.charge.color] +=idlePower.color.charge;
}
if (current.split.status == "enabled") {
	counter[current.split.color] +=idlePower.color.split;
}

// CORNER COMP //

if (current.charge.status == "enabled" && current.charge.type == "corner") {
	$.each(comp.charge[current.charge.position], function(index, value){
		counter[value] +=idlePower.charge.position*idleMult;
	});
}

// SPLIT COMP //

if (current.split.status == "enabled") {
	$.each(comp.split[current.split.position], function(index, value){
		counter[value] +=idlePower.charge.position*idleMult;
	});
}

// COLOR COMP //

$.each(comp.color[current.main.color], function(index, value){
	counter[value] +=idlePower.color.main*idleMult;
});

if (current.charge.status == "enabled") {
	$.each(comp.color[current.charge.color], function(index, value){
		counter[value] +=idlePower.color.charge*idleMult;
	});
}

if (current.split.status == "enabled") {
	$.each(comp.color[current.split.color], function(index, value){
		counter[value] +=idlePower.color.split*idleMult;
	});
}

}

function loop(){
	setInterval(function(){ 
		priceUnlock();
		upgradeUnlock();
		idling();
		writeCounters();
		debugData();
	}, 300);
}

loop();

// INPUT //

$(document).on( "click", "#shaperino", function(e) {
	clickShaperino();
});