menu = ["options", "themes", "catalogue", "debug"]

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
	options: "panel",
	debug: '<div class="container"><div id="clickboost" class="button">click boost</div> <div id="idleboost" class="button">idle boost</div> </div> <div class="container"> <div id="preview" class="button">preview</div> <div id="unlock" class="button">unlock</div> <div id="complete" class="button">complete</div> <div id="earn" class="button">earn</div> <div id="addupgrades" class="button">add upgrades</div> </div> <div class="container"> <div id="random" class="button">random</div><div id="wonder-bar" class="button">wonder bar</div> <div id="hyper-debug" class="button">hyper</div> </div> <div class="container"> <div id="main-shape" class="data">shape: <span></span></div> <div id="main-color" class="data">color: <span></span></div> </div> <div class="container"> <div id="charge-status" class="data">charge: <span></span></div> <div id="charge-shape" class="data">shape: <span></span></div> <div id="charge-color" class="data">color: <span></span></div> <div id="charge-position" class="data">pos: <span></span></div> <div id="charge-type" class="data">type: <span></span></div> </div> <div class="container"> <div id="split-status" class="data">split: <span></span></div> <div id="split-shape" class="data">shape: <span></span></div> <div id="split-color" class="data">color: <span></span></div> <div id="split-position" class="data">pos: <span></span></div> </div> <div class="container"> <div id="click-power-shape" class="data">shape click power: <span></span></div> <div id="click-power-charge" class="data">charge click power: <span></span></div> <div id="click-power-color" class="data">color click power: <span></span></div> </div> <div class="container"> <div id="idle-power-shape" class="data">shape idle power: <span></span></div> <div id="idle-power-charge" class="data">charge idle power: <span></span></div> <div id="idle-power-color" class="data">color idle power: <span></span></div> </div>'
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

activateMenuButton("debug");