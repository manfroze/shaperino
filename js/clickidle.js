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

var power = {
	idle: {
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
		}
	},
	click: {
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

counter[current.main.shape] +=power.click.shape.main;
if (current.charge.status == "enabled") {
	counter[current.charge.shape] +=power.click.shape.charge;
}
if (current.split.status == "enabled") {
	counter[current.split.shape] +=power.click.shape.split;
}

// CHARGE //

if (current.charge.status == "enabled") {
	counter[current.charge.position] +=power.click.charge.position;
}

// COLOR //

counter[current.main.color] +=power.click.color.main;
if (current.charge.status == "enabled") {
	counter[current.charge.color] +=power.click.color.charge;
}
if (current.split.status == "enabled") {
	counter[current.split.color] +=power.click.color.split;
}

// CORNER COMP //

if (current.charge.status == "enabled" && current.charge.type == "corner") {
	$.each(comp.charge[current.charge.position], function(index, value){
		counter[value] +=power.click.charge.position*clickMult;
	});
}

// SPLIT COMP //

if (current.split.status == "enabled") {
	$.each(comp.split[current.split.position], function(index, value){
		counter[value] +=power.click.charge.position*clickMult;
	});
}

// COLOR COMP //

$.each(comp.color[current.main.color], function(index, value){
	counter[value] +=power.click.color.main*clickMult;
});

if (current.charge.status == "enabled") {
	$.each(comp.color[current.charge.color], function(index, value){
		counter[value] +=power.click.color.charge*clickMult;
	});
}

if (current.split.status == "enabled") {
	$.each(comp.color[current.split.color], function(index, value){
		counter[value] +=power.click.color.split*clickMult;
	});
}

writeCounters();

}

function idling(){

// SHAPE //

counter[current.main.shape] +=power.idle.shape.main;
if (current.charge.status == "enabled") {
	counter[current.charge.shape] +=power.idle.shape.charge;
}
if (current.split.status == "enabled") {
	counter[current.split.shape] +=power.idle.shape.split;
}

// CHARGE //

if (current.charge.status == "enabled") {
	counter[current.charge.position] +=power.idle.charge.position;
}

// COLOR //

counter[current.main.color] +=power.idle.color.main;
if (current.charge.status == "enabled") {
	counter[current.charge.color] +=power.idle.color.charge;
}
if (current.split.status == "enabled") {
	counter[current.split.color] +=power.idle.color.split;
}

// CORNER COMP //

if (current.charge.status == "enabled" && current.charge.type == "corner") {
	$.each(comp.charge[current.charge.position], function(index, value){
		counter[value] +=power.idle.charge.position*idleMult;
	});
}

// SPLIT COMP //

if (current.split.status == "enabled") {
	$.each(comp.split[current.split.position], function(index, value){
		counter[value] +=power.idle.charge.position*idleMult;
	});
}

// COLOR COMP //

$.each(comp.color[current.main.color], function(index, value){
	counter[value] +=power.idle.color.main*idleMult;
});

if (current.charge.status == "enabled") {
	$.each(comp.color[current.charge.color], function(index, value){
		counter[value] +=power.idle.color.charge*idleMult;
	});
}

if (current.split.status == "enabled") {
	$.each(comp.color[current.split.color], function(index, value){
		counter[value] +=power.idle.color.split*idleMult;
	});
}

}

function boost(type, kind, mode, amount){
	power[type][kind][mode] +=amount;
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