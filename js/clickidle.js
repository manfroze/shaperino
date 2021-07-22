function writeCounters(){	
	$.each(counter, function(index){
		$("#" + index + " .counter").html(formatNumber(counter[index]));
	});
}

function writeHyperTime(){	
	$("#hyperActivate .time").html(formatTime(Math.min(Math.floor(counter[current.hypertoken]/1000), 86400)));
}

function increaseCounters(powertype){
	$.each(mode, function(key, value){
		if (current[value].status == "enabled") {
			counter[current[value].shape] +=power[powertype].shape * multi[value];
			if(current[value].colorType == "basic") {
				counter[current[value].color] +=power[powertype].color * multi[value];
			}
		}
	});

	if (current.charge.status == "enabled" && current.charge.type == "side") {
		counter[current.charge.position] +=power[powertype].position;
	}

	// COMP //

	if (current.charge.status == "enabled" && current.charge.type == "corner") {
		$.each(comp.charge[current.charge.position], function(index, value){
			counter[value] +=power[powertype].position * multi.comp;
		});
	}
	if (current.split.status == "enabled") {
		$.each(comp.split[current.split.position], function(index, value){
			counter[value] +=power[powertype].position * multi.comp;
		});
	}
	if (current.main.colorType == "composite") {
		$.each(comp.color[current.main.color], function(index, value){
			counter[value] +=power[powertype].color * multi.comp;
		});
	} 
	if (current.charge.status == "enabled" && current.charge.colorType == "composite") {
		$.each(comp.color[current.charge.color], function(index, value){
			counter[value] +=power[powertype].color  * multi.charge  * multi.comp;
		});
	}
	if (current.split.status == "enabled" && current.split.colorType == "composite") {
		$.each(comp.color[current.split.color], function(index, value){
			counter[value] +=power[powertype].color * multi.split * multi.comp;
		});
	} 

	writeCounters();

}

function boost(type, kind, amount){
	power[type][kind] +=amount *=amount;
}

function loop(){
	setInterval(function(){ 
		increaseCounters("idle");
		writeCounters();
		writeHyperTime();
	}, 300);
	setInterval(function(){ 
		priceUnlock();
		upgradeUnlock();
		achievementCheck();
		hyperUnlock();
		//debugData();
	}, 1000);
}

loop();

// INPUT //

$(document).on( "click", "#shaperino", function(e) {
	increaseCounters("click");
	updatePower();
});