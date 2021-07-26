// DEBUG //

function addAll(){
	$.each(items, function(item) {
		addComplete(item);
	});
	hyperAdd();
	toggleAdd('playground');
	toggleAdd('navigator');
	$.each(upgradeLevel, function(key, value) {
		$.each(value, function(levelKey, levelValue) {
			addUpgrade(key, levelKey);
		});
	});
}

function addAllUnlock(){
	$.each(items, function(item) {
		addUnlock(item);
	});
}

function earn(){
	$.each(counter, function(key, value) {
		counter[key] += 10000;
		writeCounters();
	});
}

function decreaseUpgradePrice(){
	$.each(upgradeLevel, function(k, v){
		$.each(v, function(levelKey, levelValue) {
			if(upgradeLevel[k][levelKey].unlock){upgradeLevel[k][levelKey].unlock[0] /= 10;}
			if(upgradeLevel[k][levelKey].price){upgradeLevel[k][levelKey].price[0] /= 10;}
		});
	});
	update();
}

function decreaseItemPrice(){
	$.each(price, function(k, v){
		price[k].unlock[0] /= 10;
		price[k].price[0] /= 10;
	});
	update();
}

setInterval(function(){ 
	debugData();
}, 300);


function debugData(){
	$(".data#main-shape span").html(current.main.shape);
	$(".data#main-color span").html(current.main.color);
	$(".data#charge-status span").html(current.charge.status);
	$(".data#split-status span").html(current.split.status);
	$(".data#charge-position span").html(current.charge.position);
	$(".data#charge-shape span").html(current.charge.shape);
	$(".data#charge-color span").html(current.charge.color);
	$(".data#charge-type span").html(current.charge.type);
	$(".data#split-shape span").html(current.split.shape);
	$(".data#split-color span").html(current.split.color);
	$(".data#split-position span").html(current.split.position);
	$(".data#click-power-shape span").html(power.click.shape);
	$(".data#click-power-color span").html(power.click.color);
	$(".data#idle-power-shape span").html(power.idle.shape);
	$(".data#idle-power-color span").html(power.idle.color);
	$(".data#idle-power-charge span").html(power.idle.charge);
	$(".data#click-power-charge span").html(power.click.charge);
}

// INPUT //

$(document).on( "click", "#clickboost", function(e) {
	boost("click", "shape", 10);
	boost("click", "color", 10);
	boost("click", "position", 10);
});

$(document).on( "click", "#idleboost", function(e) {
	boost("idle", "shape", 10);
	boost("idle", "color", 10);
	boost("idle", "position", 10);
});

$(document).on( "click", "#complete", function(e) {
	addAll();
});

$(document).on( "click", "#unlock", function(e) {
	addAllUnlock();
});

$(document).on( "click", "#earn", function(e) {
	earn();
});

$(document).on( "click", "#hyper-debug", function(e) {
	hyperAdd();
});

$(document).on( "click", "#wonder-bar", function(e) {
	drawWonderBar();
});

$(document).on( "click", "#color-bar", function(e) {
	colorBarActivate();
});

$(document).on( "click", "#addupgrades", function(e) {
	$.each(upgradeLevel, function(key, value) {
		$.each(value, function(levelKey, levelValue) {
			addUpgrade(key, levelKey);
		});
	});
});

$(document).keydown(function(event) {
	if (event.key === 'c') { 
		addAll();
	} });

$(document).keydown(function(event) {
	if (event.key === 'd') { 
		randomShape();
	} });

$(document).keydown(function(event) {
	if (event.key === 'e') { 
		earn();
	} });
$(document).keydown(function(event) {
	if (event.key === 'u') { 
		addAllUnlock();
	} });

$(document).keydown(function(event) {
	if (event.key === 't') {
		setInterval(function(){
			randomShape();
		}, 150) 
	} });

$(document).keydown(function(event) {
	if (event.key === 'q') {
		reset();
	} });

$(document).keydown(function(event) {
	if (event.key === 'w') {
		drawWonderBar();
	} });

$(document).keydown(function(event) {
	if (event.key === 'v') {
		$.each(catalogue, function(k, v){
			catalogueStatus[k] = "unlocked";
		});
		catalogueDraw();
	} });