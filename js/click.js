$(document).on( "click", ".item.shape", function(e) {
	modifier(e, "shape");
});
$(document).on( "click", ".item.color", function(e) {
	modifier(e, "color");
});
$(document).on( "click", ".item.primary", function(e) {
	modifier(e, "colorType", "primary");
});
$(document).on( "click", ".item.secondary", function(e) {
	modifier(e, "colorType", "secondary");
});
$(document).on( "click", ".item.charge", function(e) {
	var target = $(e.currentTarget).attr("id");
	setCurrent("charge", "position", target);
	setCurrent("charge", "status", "enabled");
	setCurrent("split", "status", "disabled");
});
$(document).on( "click", ".item.split", function(e) {
	var target = $(e.currentTarget).attr("id");
	setCurrent("split", "position", target);
	setCurrent("charge", "position", split[target]);
	setCurrent("split", "status", "enabled");
	setCurrent("charge", "status", "enabled");
});
$(document).on( "click", ".item.side", function(e) {
	setCurrent("charge", "type", "side");
});
$(document).on( "click", ".item.corner", function(e) {
	setCurrent("charge", "type", "corner");
});
$(document).on( "click", ".item", function(e) {
	draw();
	updateSelectors();
});


$(document).on( "click", "#shaperino", function(e) {
	clickShaperino();
});