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
	draw();
	setTypes();
	updateSelectors();
});

$(document).on("click", ".item.unlocked", function(e) {
	var target = $(e.currentTarget).attr("id");
	itemBuy(target);
});

$(document).on( "click", "#shaperino", function(e) {
	clickShaperino();
});


$(document).keydown(function(event) {
	if (event.which === 82) {
		randomShape();
		draw();
		updateSelectors();

} });