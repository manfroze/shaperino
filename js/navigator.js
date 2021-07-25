function drawNavigator(){
	shaperinoToggleDraw('navigator');
	$('#navigator').html('<div class="container"><div id="board"><div id="grid"><div id="ground"></div><div id="shapeCloneNav"></div><div id="ui"><div id="score">0</div></div></div></div></div>')
	$('#grid #score').html(current.navigator.score);
	drawNavItems();
	cloner('shapeCloneNav');
	cloner('shapeClone');
	gridMove();
}

function gridMove() {
	if (current.navigator.show == "show"){
		if (current.charge.status == "enabled") {
			$('#grid').css('animation-name', 'move-' + current.charge.position);			
		} else {
			$('#grid').css('animation-name', 'none');
		}
	}
	//$('#grid #ground').css('animation-name', 'ground-' + current.charge.position);
	//$('#grid #ground').animate( {transform: 'translateX(500px)'}, 1000);

}

const trinketIds = [];
const trinketColors = [];

function drawNavItems(){
	trinketColor = rand(colors);
	trinketId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
	$('#grid #ground').append('<div class="trinket" id="' + trinketId + '"></div>');
	$('#grid .trinket#' + trinketId).css('animation-name', 'trinket-' + current.charge.position);
	$('#grid .trinket#' + trinketId).css('background-color', colorCode[trinketColor]);
	min = 2,
	max = 5;
  var randN = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
  setTimeout(drawNavItems, randN * 1000);
	trinketIds.push(trinketId);
	trinketColors.push(trinketColor);

}

var trinkets = {};

setInterval(function(){
	trinketIds.forEach((key, i) => trinkets[key] = trinketColors[i]);
	$.each(trinkets, function(trId, trColor){
		trinketPos = $('#grid .trinket#' + trId).position();
		if(trinketPos){
		if(current.charge.color == trColor && trinketPos.top >= 210 && trinketPos.top <= 260 && trinketPos.left >= 210 && trinketPos.left <= 260){
			$('#grid .trinket#' + trId).remove();
			current.navigator.score += 1;
			$('#grid #score').html(current.navigator.score);
		}
		}
	});
}, 100)

$(document).bind('keydown', function (event) {
	if (current.navigator.show == "show"){
		$(".center.column").css("overflow-y", "hidden");
		$(".center.column").css("overflow-x", "hidden");
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
	}
});

$(document).bind('keyup', function (event) {
	$(".center.column").css("overflow-y", "scroll");
	$(".center.column").css("overflow-x", "hidden");
});


$(document).keydown(function(event) {
	if (event.key === 'n') {
		toggleToggle('navigator');
	} });

$(document).on( "click", "#navigatorToggle", function(e) {
	toggleToggle('navigator');
	style();
});