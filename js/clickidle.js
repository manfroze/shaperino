function writeCounters(){	
	$.each(counter, function(index){
		$("#" + index + " .counter").html(formatNumber(counter[index]));
	});
}

function writeHyperTime(){	
	$("#hyperActivate .time").html(formatTime(Math.min(Math.floor(counter[current.hypertoken]/1000), 86400)));
}

function powerCounters(){

var powerCalc = {
		idle: {
			circle: 0,
			square: 0,
			rhombus: 0,
			cross: 0,
			octagon: 0,
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			black: 0,
			white: 0,
			red: 0,
			yellow: 0,
			blue: 0,
		},
		click: {
			circle: 0,
			square: 0,
			rhombus: 0,
			cross: 0,
			octagon: 0,
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			black: 0,
			white: 0,
			red: 0,
			yellow: 0,
			blue: 0,
		},
	}

$.each(powertype, function(k, powertype){
	$.each(mode, function(key, value){
		if (current[value].status == "enabled") {
			powerCalc[powertype][current[value].shape] += power[powertype].shape * multi[value];
			if(color.basic.includes(current[value].color)) {
				powerCalc[powertype][current[value].color] += power[powertype].color * multi[value];

			}
		}
	});
	if (current.charge.status == "enabled" && position.side.includes(current.charge.position)) {
		powerCalc[powertype][current.charge.position] += power[powertype].position;
	}

	// COMP //

	if (current.charge.status == "enabled" && position.corner.includes(current.charge.position)) {
		$.each(comp.charge[current.charge.position], function(index, value){
			powerCalc[powertype][value] += power[powertype].position * multi.comp;
		});
	}
	if (current.split.status == "enabled") {
		$.each(comp.split[current.split.position], function(index, value){
			powerCalc[powertype][value] += power[powertype].position * multi.comp;
		});
	}
	if (color.composite.includes(current.main.color)) {
		$.each(comp.color[current.main.color], function(index, value){
			powerCalc[powertype][value] += power[powertype].color * multi.comp;
		});
	} 
	if (current.charge.status == "enabled" && color.composite.includes(current.charge.color)) {
		$.each(comp.color[current.charge.color], function(index, value){
			powerCalc[powertype][value] += power[powertype].color  * multi.charge  * multi.comp;
		});
	}
	if (current.split.status == "enabled" && color.composite.includes(current.split.color)) {
		$.each(comp.color[current.split.color], function(index, value){
			powerCalc[powertype][value] += power[powertype].color  * multi.charge  * multi.comp;
		});
	}
	if (current.hyper.status == "enabled" && color.composite.includes(current.hyper.color)) {
		$.each(comp.color[current.hyper.color], function(index, value){
			powerCalc[powertype][value] += power[powertype].color * multi.split * multi.comp;
		});
	}
});
	return powerCalc;
}

powerCalculate = powerCounters();

function increaseCounters(powertype){
	$.each(mode, function(key, value){ 
		if (current[value].status == "enabled") {
			counter[current[value].shape] += powerCalculate[powertype][current[value].shape]
			if(color.basic.includes(current[value].color)) {
				counter[current[value].color] += powerCalculate[powertype][current[value].color];
			}
		}
	});

	if (current.charge.status == "enabled" && position.side.includes(current.charge.position)) {
		counter[current.charge.position] += powerCalculate[powertype][current.charge.position];
	}

	// COMP //

	if (current.charge.status == "enabled" && position.corner.includes(current.charge.position)) {
		$.each(comp.charge[current.charge.position], function(index, value){
			counter[value] += powerCalculate[powertype][value];
		});
	}
	if (current.split.status == "enabled") {
		$.each(comp.split[current.split.position], function(index, value){
			counter[value] += powerCalculate[powertype][value];
		});
	}
	if (color.composite.includes(current.main.color)) {
		$.each(comp.color[current.main.color], function(index, value){
			counter[value] += powerCalculate[powertype][value];
		});
	} 

	if (current.charge.status == "enabled" && color.composite.includes(current.charge.color)) {
		$.each(comp.color[current.charge.color], function(index, value){
			counter[value] += powerCalculate[powertype][value];
		});
	}
	if (current.split.status == "enabled" && color.composite.includes(current.split.color)) {
		$.each(comp.color[current.split.color], function(index, value){
			counter[value] += powerCalculate[powertype][value];
		});
	}
	if (current.hyper.status == "enabled" && color.composite.includes(current.hyper.color)) {
		$.each(comp.color[current.hyper.color], function(index, value){
			counter[value] += powerCalculate[powertype][value];
		});
	}
	writeCounters(); 
}

function boost(type, kind, amount){
	power[type][kind] +=amount *=amount;
}

function loop(){
	setInterval(function(){ 
		powerCalculate = powerCounters();
		writePowerCounters();
		writeHyperTime();
	}, 300);
	setInterval(function(){ 
		increaseCounters("idle");
		writeCounters();
		priceUnlock();
		upgradeUnlock();
		achievementCheck();
		catalogueCheck();
		hyperUnlock();
	}, 1000);
	setInterval(function(){ 
		//selector("main")
	}, 10000);
}

loop();

// INPUT //

$(document).on( "click", "#shaperino", function(e) {
	increaseCounters("click");
});