menu = ["options", "themes", "achievements", "catalogue",]

function addMenuButton(item) {
	$("#menu").append('<div class="button inactive" id="' + item + '">' + item + '</div>');
}

function activateMenuButton(item) {
	$("#menu #" + item).addClass("active").removeClass("inactive");
}

function selectMenuButton(item) {
	$("#menu .button").removeClass("selected")
	$("#menu #" + item).addClass("selected");
}

panelContent = {
	options: "panel"
}

function addPanel(item) {
	$("#panel").empty();
	$("#panel").append('<div class="panel" id="' + item + '">' + panelContent[item] + '</div>')
	selectMenuButton(item);
	activateMenuButton("remove")
}

$.each(menu, function(index, value){
	$(document).on( "click", "#menu .button.active#" + value + "", function(e) {
		addPanel(value);
	});

});

$(document).on( "click", "#menu .button.active#remove", function(e) {
	$("#panel").empty();
	$("#menu .button").removeClass("selected")
	$("#menu #remove").addClass("inactive").removeClass("active");

});

$.each(menu, function(index, value){
	addMenuButton(value);
});

activateMenuButton("options");
activateMenuButton("themes");