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
	shape: {
		main: 1,
		charge: 0.5,
		split: 0.1,
	},
	charge: 1,
	color: {
		main: 1,
		charge: 0.4,
		split: 0.2,
	},
}

var mult = 0.5;

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
		preview: [10, "circle"],
		unlock: [20, "circle"],
		price: [30, "circle"]
	},
	rhombus: {
		preview: [10, "square"],
		unlock: [20, "square"],
		price: [30, "square"]
	},

	white: {
		preview: [10, "black"],
		unlock: [20, "black"],
		price: [30, "black"]
	},
	red: {
		preview: [10, "white"],
		unlock: [20, "white"],
		price: [30, "white"]
	},
	yellow: {
		preview: [10, "red"],
		unlock: [20, "red"],
		price: [30, "red"]
	},
	blue: {
		preview: [10, "yellow"],
		unlock: [20, "yellow"],
		price: [30, "yellow"]
	},
	top: {
		preview: [10, "blue"],
		unlock: [20, "blue"],
		price: [30, "blue"]
	},
	right: {
		preview: [10, "top"],
		unlock: [20, "top"],
		price: [30, "top"]
	},
	bottom: {
		preview: [10, "right"],
		unlock: [20, "right"],
		price: [30, "right"]
	},
	left: {
		preview: [10, "bottom"],
		unlock: [20, "bottom"],
		price: [30, "bottom"]
	},

}

function writeCounters(){	
	$.each(counter, function(index){
		$("#" + index + " .counter").html(Math.floor(counter[index]));
	});
}

/*function updatePowerCounters(mode, kind){
		currentPowerCounter[current[mode][kind]] += power[kind][mode];
		$("#" + current[mode][kind] + " .power").html(currentPowerCounter[current[mode][kind]]);
	}*/

function clickShaperino(){

// SHAPE //

counter[current.main.shape] +=power.shape.main;
if (current.charge.status == "enabled") {
	counter[current.charge.shape] +=power.shape.charge;
}
if (current.split.status == "enabled") {
	counter[current.split.shape] +=power.shape.split;
}

// CHARGE //

if (current.charge.status == "enabled") {
	counter[current.charge.position] +=power.charge;
}

// COLOR //

counter[current.main.color] +=power.color.main;
if (current.charge.status == "enabled") {
	counter[current.charge.color] +=power.color.charge;
}
if (current.split.status == "enabled") {
	counter[current.split.color] +=power.color.split;
}

// CORNER COMP //

if (current.charge.status == "enabled" && current.charge.type == "corner") {
	$.each(comp.charge[current.charge.position], function(index, value){
		counter[value] +=power.charge*mult;
	});
}

// SPLIT COMP //

if (current.split.status == "enabled") {
	$.each(comp.split[current.split.position], function(index, value){
		counter[value] +=power.charge*mult;
	});
}

// COLOR COMP //

$.each(comp.color[current.main.color], function(index, value){
	counter[value] +=power.color.main*mult;
});

if (current.charge.status == "enabled") {
	$.each(comp.color[current.charge.color], function(index, value){
		counter[value] +=power.color.charge*mult;
	});
}

if (current.split.status == "enabled") {
	$.each(comp.color[current.split.color], function(index, value){
		counter[value] +=power.color.split*mult;
	});
}
writeCounters();
}

function priceUnlock(){
	$.each(price, function(key, value) {
		if (counter[value.preview[1]] > value.preview[0] - 1) { addPreview(key) }
		if (counter[value.unlock[1]] > value.unlock[0] - 1) { addUnlock(key) }
		if (counter[value.price[1]] > value.price[0] - 1) { buyableStatus(key, "on") }
		if (counter[value.price[1]] < value.price[0] - 1) { buyableStatus(key, "off") }
	});
}

function itemBuy(item){
	if (counter[price[item].price[1]] > price[item].price[0] - 1) { addItem(item)}

	counter[price[item].price[1]] -= price[item].price[0];
}

function loop(){
	setInterval(function(){ 
		priceUnlock();
		writeCounters();
	}, 300);
} 

loop();