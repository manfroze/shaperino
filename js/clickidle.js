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
		shape: 0,
		charge: 0,
		color: 0,
	},
	click: {
		shape: 1,
		charge: 1,
		color: 1,
	}
}

var multi = {
	charge: 0.5,
	split: 0.25,
	comp: 0.5
}

function writeCounters(){	
	$.each(counter, function(index){
		$("#" + index + " .counter").html(Math.floor(counter[index]));
	});
}

function increaseCounters(powertype){
counter[current.main.shape] +=power[powertype].shape;
if (current.charge.status == "enabled") {
	counter[current.charge.shape] +=power[powertype].shape * multi.charge;
}
if (current.split.status == "enabled") {
	counter[current.split.shape] +=power[powertype].shape * multi.split;
}
if (current.charge.status == "enabled") {
	counter[current.charge.position] +=power[powertype].charge;
}
counter[current.main.color] +=power[powertype].color;
if (current.charge.status == "enabled") {
	counter[current.charge.color] +=power[powertype].color * multi.charge;
}
if (current.split.status == "enabled") {
	counter[current.split.color] +=power[powertype].color * multi.split;
}
if (current.charge.status == "enabled" && current.charge.type == "corner") {
	$.each(comp.charge[current.charge.position], function(index, value){
		counter[value] +=power[powertype].charge * multi.comp;
	});
}
if (current.split.status == "enabled") {
	$.each(comp.split[current.split.position], function(index, value){
		counter[value] +=power[powertype].charge * multi.comp;
	});
}
$.each(comp.color[current.main.color], function(index, value){
	counter[value] +=power[powertype].color * multi.comp;
});

if (current.charge.status == "enabled") {
	$.each(comp.color[current.charge.color], function(index, value){
		counter[value] +=power[powertype].color  * multi.charge  * multi.comp;
	});
}

if (current.split.status == "enabled") {
	$.each(comp.color[current.split.color], function(index, value){
		counter[value] +=power[powertype].color.split  * multi.charge  * multi.comp;
	});
}

writeCounters();

}

function boost(type, kind, amount){
	power[type][kind] +=amount;
}

function loop(){
	setInterval(function(){ 
		priceUnlock();
		upgradeUnlock();
		increaseCounters("idle");
		writeCounters();
		debugData();
	}, 300);
}

loop();

// INPUT //

$(document).on( "click", "#shaperino", function(e) {
	increaseCounters("click");
});