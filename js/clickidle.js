function writeCounters(){	
	$.each(counter, function(index){
		$("#" + index + " .counter").html(formatNumber(counter[index]));
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
	if (current.charge.status == "enabled" && current.charge.type == "side") {
		counter[current.charge.position] +=power[powertype].charge;
	}
	if(current.main.colorType == "basic") {
		counter[current.main.color] +=power[powertype].color;
	}
	if (current.charge.status == "enabled" && current.charge.colorType == "basic") {
		counter[current.charge.color] +=power[powertype].color * multi.charge;
	}
	if (current.split.status == "enabled" && current.split.colorType == "basic") {
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
	power[type][kind] +=amount;
}

function loop(){
	setInterval(function(){ 
		increaseCounters("idle");
		writeCounters();
	}, 300);
	setInterval(function(){ 
		priceUnlock();
		upgradeUnlock();
		debugData();
	}, 1000);
}

loop();

// INPUT //

$(document).on( "click", "#shaperino", function(e) {
	increaseCounters("click");
});