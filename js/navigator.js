function drawNavigator(){
	$('#shaperino').css('visibility','hidden');
	$('#navigator').show();
	shaperinoToggleDraw('navigator');
	$('#navigator').html('<div class="container"><div id="board"><div id="grid"></div><div id="ground"></div><div id="ui"><div id="score" class="top">0</div><div id="score" class="bottom">0</div><div id="score" class="left">0</div><div id="score" class="right">0</div></div><div id="shapeCloneNav"></div></div></div>')
	$.each(position.side, function(i, pos){
		$('#grid #score.' + pos).html(current.navigator.score[pos]);
	})
	drawNavItems();
	updateNavScore();
	cloner('shapeCloneNav');
	cloner('shapeClone');
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
if (current.charge.status == "enabled") {
	direction = rand(position.corner.concat(position.side));
	$('#board #ground').append('<div dir="' + direction + '" class="trinket ' + rand(["square", "circle", "rhombus"]) + '" id="' + trinketId + '"></div>');
	$('#board .trinket#' + trinketId).css('animation-name', 'trinket-' + direction);
	$('#board .trinket#' + trinketId).css('background-color', colorCode[trinketColor]);
	min = 2,
	max = 5;
  var randN = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
}
  setTimeout(drawNavItems, randN * 1000);
  trinketIds.push(trinketId);
  trinketColors.push(trinketColor);
}

var trinkets = {};
setInterval(function(){
	trinketIds.forEach((key, i) => trinkets[key] = trinketColors[i]);
	$.each(trinkets, function(trId, trColor){
		trinketPos = $('#board .trinket[dir="' + current.charge.position + '"]#' + trId).position();
		if(trinketPos){
			if(current.charge.color == trColor && trinketPos.top >= 210 && trinketPos.top <= 260 && trinketPos.left >= 210 && trinketPos.left <= 260){
				$('#board .trinket[dir="'+current.charge.position+'"]#' + trId).remove();
				$('#shapeCloneNav').animate( {scale: 1.2}, 100);
				setTimeout(() => { $("#shapeCloneNav").animate( {scale: 1}, 100); }, 0)
				updateNavScore();
			}
		}
	});
}, 100)

function updateNavScore(){
	current.navigator.score[current.charge.position] += 1;
	$.each(position.side, function(i, pos){
		$('#board #score.' + pos).html(current.navigator.score[pos]);
	})
}


$(document).bind('keydown', function (event) {
	
	if (current.navigator.show == "show"){
		$(".column").css("overflow-y", "hidden");
		$(".center.column").css("overflow-x", "hidden");

		if (event.key == "ArrowLeft" || event.key == "a") {
			current.charge.position = "left";
			update();
		}
		if (event.key == "ArrowUp" || event.key == "w") {
			current.charge.position = "top";
			update();
		}
		if (event.key == "ArrowRight" || event.key == "d") {
			current.charge.position = "right";
			update();
		}
		if (event.key == "ArrowDown" || event.key == "s") {
			current.charge.position = "bottom";
			update();
		}
	}
});

$(document).bind('keyup', function (event) {
	$(".column").css("overflow-y", "scroll");
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