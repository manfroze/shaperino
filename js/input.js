function modifier(e, kind, target){
	if (!target) {
		target = $(e.currentTarget).attr("id");
	}
	if (e.shiftKey) {
		if(current.charge.status == "enabled"){
			setCurrent("charge", kind, target);
		}
	} else if (e.altKey) {
		if(current.split.status == "enabled"){
			setCurrent("split", kind, target);
		}
	} else {
		setCurrent("main", kind, target);
	}
}

$(document).on( "click", ".item.shape.active", function(e) {
	modifier(e, "shape");
});
$(document).on( "click", ".item.color.active", function(e) {
	modifier(e, "color");
});

$(document).on( "click", ".item.charge.active", function(e) {
	var target = $(e.currentTarget).attr("id");
	setCurrent("charge", "position", target);
	setCurrent("charge", "status", "enabled");
	setCurrent("split", "status", "disabled");
});
$(document).on( "click", ".item.split.active", function(e) {
	var target = $(e.currentTarget).attr("id");
	setCurrent("split", "position", target);
	setCurrent("charge", "position", split[target]);
	setCurrent("split", "status", "enabled");
	setCurrent("charge", "status", "enabled");
});

$(document).on( "click", ".item.active", function(e) {
	update();
});

$(document).on("click", ".item.unlocked.buyable", function(e) {
	var target = $(e.currentTarget).attr("id");
	itemBuy(target);
});

$(document).on( "click", "#shaperino", function(e) {
	clickShaperino();
});

// DEBUG //

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

$(document).on( "click", "#random", function(e) {
	randomShape();
	update();
});

$(document).keydown(function(event) {
	if (event.which === 68) {
		$('#debug').toggle();
	} });