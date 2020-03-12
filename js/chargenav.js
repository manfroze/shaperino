function addChargeNav(){
	current.chargenav.status = "enabled";
	$('#chargenav').append('<div class="container"><div class="title">CHARGE NAVIGATOR</div><div id="board"><div id="grid"><div id="shapeClone"></div></div></div></div>')
}

function gridMove() {
	if (current.charge.status == "enabled"){
		$('#grid').css('animation-name', 'move-' + current.charge.position);
	} else {$('#grid').css('animation-name', 'none');}
}

gridMove();


$(document).bind('keydown', function (event) {
	if (event.key == "ArrowLeft") {
		current.charge.position = "left";
		update();
	}
	if (event.key == "ArrowUp") {
		current.charge.position = "top";
		update();
	}
	if (event.key == "ArrowRight") {
		current.charge.position = "right";
		update();
	}
	if (event.key == "ArrowDown") {
		current.charge.position = "bottom";
		update();
	}
	if (event.key == "ArrowDown" && event.key == "ArrowRight") {
		current.charge.position = "bottomright";
		update();
	}
});