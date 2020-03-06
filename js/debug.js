// DEBUG //

function addAll(){
	$.each(items, function(item) {
		addComplete(item);
	});
}

function addAllPreviews(){
	$.each(items, function(item) {
		addPreview(item);
	});
}

function addAllUnlock(){
	$.each(items, function(item) {
		addPreview(item);
		addUnlock(item);
	});
}

function earn(){
	$.each(counter, function(key, value) {
		counter[value] = 1000;
		writeCounters();
	});
}

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
	$(".data#click-power-shape span").html(clickPower.shape.main + " " + clickPower.shape.charge + " " + clickPower.shape.split);
	$(".data#click-power-color span").html(clickPower.color.main + " " + clickPower.color.charge + " " + clickPower.color.split);
	$(".data#idle-power-shape span").html(idlePower.shape.main + " " + idlePower.shape.charge + " " + idlePower.shape.split);
	$(".data#idle-power-color span").html(idlePower.color.main + " " + idlePower.color.charge + " " + idlePower.color.split);
	$(".data#idle-power-charge span").html(idlePower.charge.position);
	$(".data#click-power-charge span").html(clickPower.charge.position);
	$(".data#click-mult span").html(clickMult);
	$(".data#idle-mult span").html(idleMult);
}

// INPUT //

$(document).on( "click", "#clickboost", function(e) {
	clickBoost("shape", "main", 10);
	clickBoost("color", "main", 10);
	clickBoost("charge", "position", 10);
});

$(document).on( "click", "#idleboost", function(e) {
	idleBoost("shape", "main", 10);
	idleBoost("color", "main", 10);
	idleBoost("charge", "position", 10);
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

$(document).on( "click", "#random", function(e) {
	randomShape();
	update();
});

$(document).on( "click", "#addupgrades", function(e) {
	$.each(upgrade, function(item) {
		addUpgrade(item);
	});
});

$(document).keydown(function(event) {
	if (event.which === 68) {
		$('#debug').toggle();
	} });