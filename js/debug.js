// DEBUG //

function addAll(){
	$.each(items, function(item) {
		addComplete(item);
	});
	hyperAdd();
	playgroundAdd();
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
		counter[key] += 784;
		writeCounters();
	});
}

function debugData(){
	$(".data#main-shape span").html(current.main.shape);
	$(".data#main-color span").html(current.main.color + " (" + current.main.colorType + ")");
	$(".data#charge-status span").html(current.charge.status);
	$(".data#split-status span").html(current.split.status);
	$(".data#charge-position span").html(current.charge.position);
	$(".data#charge-shape span").html(current.charge.shape);
	$(".data#charge-color span").html(current.charge.color + " (" + current.charge.colorType + ")");
	$(".data#charge-type span").html(current.charge.type);
	$(".data#split-shape span").html(current.split.shape);
	$(".data#split-color span").html(current.split.color + " (" + current.split.colorType + ")");
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
	boost("click", "charge", 10);
});

$(document).on( "click", "#idleboost", function(e) {
	boost("idle", "shape", 10);
	boost("idle", "color", 10);
	boost("idle", "charge", 10);
});

$(document).on( "click", "#complete", function(e) {
	addAll();
});
$(document).on( "click", "#preview", function(e) {
	addAllPreviews();
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

$(document).on( "click", "#chargenav-debug", function(e) {
	addChargeNav();
});

$(document).on( "click", "#addupgrades", function(e) {
	$.each(upgradeLevel, function(key, value) {
		$.each(value, function(levelKey, levelValue) {
			addUpgrade(key, levelKey);
		});
	});
});

$(document).keydown(function(event) {
	if (event.key === 'd') { 
		$('#debug').toggle();
	} });
$(document).keydown(function(event) {
	if (event.key === 'c') { 
		addAll();
	} });

$(document).keydown(function(event) {
	if (event.key === 'q') {
		reset();
	} });
