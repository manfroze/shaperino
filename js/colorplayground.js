playgrounds = {
	black: { name: 'pitch'},
	white: { name: 'snow'},
	red: { name: 'blood'},
	yellow: { name: 'saffron'},
	blue: { name: 'water'},
	orange: { name: 'juice'},
	green: { name: 'lettuce'},
	violet: { name: 'magic'},
	grey: { name: 'smog'},
	darkred: { name: 'rust'},
	darkyellow: { name: 'gold'},
	darkblue: { name: 'biz'},
	lightred: { name: 'candy'},
	lightyellow: { name: 'butter'},
	lightblue: { name: 'sky'},
	darkorange: { name: 'chocolate'},
	darkgreen: { name: 'tree'},
	darkviolet: { name: 'mystique'},
	lightorange: { name: 'salmon'},
	lightgreen: { name: 'luck'},
	lightviolet: { name: 'craze'},
}

playgroundActive = "inactive";
playgroundStatus = "disabled";

function playground(){
	if (playgroundStatus == "disabled"){
		playgroundStatus = "enabled";
		$('#shaperino').hide();
		$('#playground').show();
		drawPlayground();
	} else if (playgroundStatus == "enabled"){
		playgroundStatus = "disabled";
		$('#shaperino').show();
		$('#playground').hide();
	}
}

function drawPlayground(){
		playgroundActive = "active"
		$('#playground').html('<div id="tabbar"></div>');
		$.each(colors, function(key, color){
			if(itemStatus[color] == "active"){
				$('#tabbar').append('<div class="tab" id="'+ color +'-tab"></div>');
				$('.tab#'+ color +'-tab').css( "background-color", colorCode[color] );
			}
		});
		$('#playground').append('<div id="playgroundPanel"><div class="header"><span class="amount"></span><span class="name"></span></div></div>');
}

function colorTokenIncrease(){
	setInterval(function(){ 
		if (playgroundActive == "active") {
			$.each(mode, function(key, value){
				if (current[value].status == "enabled"){
						colorToken[current[value].color] +=0.1*multi[value];
				}
			});
		}
	}, 300);
}

function colorTokenDraw(){
	$.each(colors, function(key, color){
		$('#playgroundPanel.' + color + ' .name').html(playgrounds[color].name);
		$('#playgroundPanel.' + color + ' .amount').html(formatNumber(colorToken[color]));

	});
}

function colorLoop(){
	setInterval(function(){ 
		colorTokenIncrease();
		colorTokenDraw();
	}, 300);
}

colorLoop();

$(document).on( "click", ".tab", function(e) {
	$('#playgroundPanel').css( "background-color", colorCode[event.target.id.slice(0, -4)]  );
	$('#playgroundPanel').removeClass().addClass(event.target.id.slice(0, -4));
});

$(document).keydown(function(event) {
	if (event.key === 'p') {
		playground();
	} });