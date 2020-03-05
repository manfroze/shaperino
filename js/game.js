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
		main: 0.1,
		charge: 0.05,
		split: 0.01,
	},
	charge: {
		position: 0.1,
	},
	color: {
		main: 0.1,
		charge: 0.04,
		split: 0.02,
	},
}

var clickMult = 0.5;
var idleMult = 0.5;

var currentPowerCounter = {
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

const price = {
	square: {
		preview: [25, "circle"],
		unlock: [50, "circle"],
		price: [100, "circle"]
	},
	rhombus: {
		preview: [90, "square"],
		unlock: [150, "square"],
		price: [200, "white"]
	},
	white: {
		preview: [50, "black"],
		unlock: [90, "black"],
		price: [125, "black"]
	},
	red: {
		preview: [100, "white"],
		unlock: [150, "white"],
		price: [350, "square"]
	},
	yellow: {
		preview: [150, "red"],
		unlock: [200, "red"],
		price: [450, "circle"]
	},
	blue: {
		preview: [180, "yellow"],
		unlock: [250, "yellow"],
		price: [500, "rhombus"]
	},
	green: {
		preview: [700, "blue"],
		unlock: [1000, "yellow"],
		price: [450, "top"]
	},
	orange: {
		preview: [1000, "yellow"],
		unlock: [1200, "red"],
		price: [700, "right"]
	},
	violet: {
		preview: [1400, "red"],
		unlock: [2000, "blue"],
		price: [5000, "circle"]
	},
	top: {
		preview: [1000, "circle"],
		unlock: [1000, "square"],
		price: [1000, "rhombus"]
	},
	right: {
		preview: [500, "top"],
		unlock: [600, "top"],
		price: [2600, "blue"]
	},
	bottom: {
		preview: [1000, "right"],
		unlock: [1500, "right"],
		price: [3000, "red"]
	},
	left: {
		preview: [1500, "bottom"],
		unlock: [2000, "bottom"],
		price: [2000, "right"]
	},

}

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

function priceUnlock(){
	$.each(price, function(key, value) {
		if (counter[value.preview[1]] > value.preview[0] - 1) {
			addPreview(key);
		}
		if (counter[value.unlock[1]] > value.unlock[0] - 1) {
			addUnlock(key);
		}
		if (counter[value.price[1]] > value.price[0] - 1) {
			buyableStatus(key, "on");
		}
		if (counter[value.price[1]] < value.price[0] - 1) {
			buyableStatus(key, "off");
		}
	});
}

function itemBuy(item){
	if (counter[price[item].price[1]] > price[item].price[0] - 1) { addItem(item)}
		counter[price[item].price[1]] -= price[item].price[0];
}

function idleBoost(kind, mode, amount){
	idlePower[kind][mode] +=amount;
}

function clickBoost(kind, mode, amount){
	clickPower[kind][mode] +=amount;
}

function loop(){
	setInterval(function(){ 
		priceUnlock();
		idling();
		writeCounters();
		debugData();
	}, 300);
}

loop();