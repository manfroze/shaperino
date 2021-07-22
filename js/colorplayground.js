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

function playgroundToggle(){
	if (current.playground.show == "hide"){
		current.playground.show = "show";
		$('#shaperino').hide();
		$('#playground').show();
		drawPlayground();
	} else if (current.playground.show == "show"){
		current.playground.show = "hide";
		$('#shaperino').show();
		$('#playground').hide();
	}
}

function drawPlayground(){
	current.playground.status = "enabled"
	$('#playground').html('<div id="tabbar"></div>');
	$.each(colors, function(key, color){
		if(itemStatus[color] == "active"){
			$('#tabbar').append('<div class="tab inactive" id="'+ color +'-tab"></div>');
			$('.tab#'+ color +'-tab').css( "background-color", colorCode[color] );
		}
	});
	$('#playground').append('<div id="playgroundPanel"><div class="header"><span class="amount"></span><span class="name"></span></div></div>');
}

// COLOR TOKENS //

function colorTokenIncrease(){
	setInterval(function(){ 
		if (current.playground.status == "enabled") {
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

// LOOP //

function colorLoop(){
	setInterval(function(){ 
		colorTokenIncrease();
		colorTokenDraw();
	}, 300);
}

colorLoop();

// CLICK ON TAB //

$(document).on( "click", ".tab", function(e) {
	$.each(colors, function(key, color){
		$('.tab#'+ color +'-tab').removeClass("active").addClass("inactive").css('background-image', 'none');;
	});
	$('#' + event.target.id).removeClass("inactive").addClass("active").css('background-image', 'url("svg/' + event.target.id.slice(0, -4) + '-colortoken.svg")');
	$('#playgroundPanel').removeClass().addClass(event.target.id.slice(0, -4));
	$('#playgroundPanel').css( "background-color", colorCode[event.target.id.slice(0, -4)]  );
});

// INPUT //

$(document).keydown(function(event) {
	if (event.key === 'p') {
		playgroundToggle();
	} });