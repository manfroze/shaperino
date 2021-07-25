function drawPlayground(){
	shaperinoToggleDraw('playground');
	updatePlaygroundTabs();
	cloner('shapeClone');
}

function updatePlaygroundTabs(){
	$('#playground').html('<div id="tabbar"></div>');
	$.each(colors, function(key, color){
		$('#tabbar').append('<div class="tab disabled" id="'+ color +'-tab"></div>');
		if(itemStatus[color] == "active"){
			$('.tab#'+ color +'-tab').removeClass("disabled").addClass("inactive");
			$('.tab#'+ color +'-tab').css( "background-color", colorCode[color] );
		}
	});
	$('#playground').append('<div id="playgroundPanel"></div>');
	playgroundTab(current.playground.tab);
}

// COLOR TOKENS //

pgPower = {};

function colorTokenIncrease(){
	$.each(colors, function(k, v){
		pgPower[v] = 0;
	});
	if (toggleStatus.playground == "unlocked") {
			// PRIMARY //
			$.each(mode, function(key, value){
				if (current[value].status == "enabled"){
					colorToken[current[value].color].primary +=1*multi[value];
					pgPower[current[value].color] += 1*multi[value];
				}
			});
			// SECONDARY //
			$.each(colors, function(key, color){
				if (colorToken[color].actor >= 0){
					colorToken[color].secondary +=0.01*colorToken[color].actor;
				}
			});
		}
	}

	function colorTokenDraw(){
		$.each(colors, function(key, col){
			$('#playgroundPanel.' + col + ' .primary .amount').html(formatNumber(colorToken[col].primary));
			$('#playgroundPanel.' + col + ' .secondary .amount').html(formatNumber(colorToken[col].secondary));
			$('#playgroundPanel.' + col + ' .tertiary .amount').html(formatNumber(colorToken[col].tertiary));
			$('#playgroundPanel.' + col + ' .actor .amount').html(formatNumber(colorToken[col].actor));
			$('#playgroundPanel.' + col + ' .final .amount').html(formatNumber(colorToken[col].final));
			$('#playgroundPanel.' + col + ' .primary .power').html(formatNumber(pgPower[col]) + '/s');

			$('#playgroundPanel.' + col + ' .secondary .desc').html('your <strong>' + formatNumber(colorToken[col].actor) + ' ' + playground[col].actor + '</strong> are producing <strong>' + formatNumber(colorToken[col].actor*0.01) + ' ' + playground[col].secondary + '</strong> per second');


		});
	}

// CLICK ON TAB //

function playgroundTab(colorName){
	current.playground.tab = colorName;

	// TABS //

	$.each(colors, function(key, col){
		if (itemStatus[col] == "active"){
			$('.tab#'+ col +'-tab').removeClass("active").addClass("inactive").css('background-image', 'linear-gradient(to top, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 40%');
		}
	});

	$('#' + colorName + "-tab").removeClass("inactive").addClass("active").css('background-image', 'url("svg/' + colorName + '-colortoken.svg")');

	// PANEL //

	$('#playgroundPanel .name').empty();
	$('#playgroundPanel').removeClass().addClass(colorName);
	$('#playgroundPanel').css( "background-color", colorCode[colorName]);
	$('#playgroundPanel').css( "color", colorCode[colorName]);

	// PANEL CONTENT //

	if(color.composite.includes(colorName)){
		$('#playground #playgroundPanel').html('<div class="primary box"><span class="amount"></span><span class="name"></span><span class="power"></span></div><div class="content"><div class="actor box"><div class="text"><span class="amount"></span><span class="name"></div><div class="buy" item="' + colorName + '"><span>+1</span><span class="price">10 ' + playground[colorName].primary + '</span></div></div><div class="items"><div class="secondary box"><span class="amount"></span><span class="name"></span><span class="desc"></span></div><div class="tertiary box"><div class="buy" item="' + colorName + '"><span>+1</span><span class="price">10 ' + playground[colorName].secondary + '</span></div><div class="text"><span class="amount"></span><span class="name"></span></div><div class="buyBox"></div></div></div>');
		$('#playgroundPanel .box.actor').css( "background", "url('svg/" + colorName + "-actor.svg'), linear-gradient(to top, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.9) 100%)");
		$('#playgroundPanel .box.secondary').css( "background", "url('svg/" + colorName + "-secondary.svg'), linear-gradient(to top, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.9) 100%)");
		$('#playgroundPanel .box.tertiary').css( "background", "url('svg/" + colorName + "-tertiary.svg'), linear-gradient(to top, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.9) 100%)");
		$('#playgroundPanel.' + colorName + ' .actor .name').html(playground[colorName].actor);
		$('#playgroundPanel.' + colorName + ' .secondary .name').html(playground[colorName].secondary);
		$('#playgroundPanel.' + colorName + ' .tertiary .name').html(playground[colorName].tertiary);
		$('#playgroundPanel .buy').css( "background-color", colorCode[colorName]);
		$.each(comp.color[colorName], function(key, col){
			$('#playgroundPanel.' + colorName + ' .tertiary .buyBox').append('<div class="buyFinal" id="' + col + '-f" item="' + colorName + '" final="'+ col + '">1 ' + playground[col].final + '<span class="price">10 ' + playground[colorName].tertiary +'</></div>');
			$('#playgroundPanel.' + colorName + ' .tertiary .buyFinal#'+ col + '-f').css("background-color", colorCode[col]);
		});

	} else if(color.basic.includes(colorName)){
		$('#playground #playgroundPanel').html('<div class="primary box"><span class="amount"></span><span class="name"></span><span class="power"></span></div><div class="content"><div class="final box"><span class="amount"></span><span class="name"></span></div></div>');
		$('#playgroundPanel .box.final').css( "background", "linear-gradient(to top, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.9) 100%)");

		$('#playgroundPanel.' + colorName + ' .final .name').html(playground[colorName].final);
	}

	$('#playgroundPanel.' + colorName + ' .primary .name').html(playground[colorName].primary);
	$('#playgroundPanel .box.primary').css( "background", "url('svg/" + colorName + "-primary.svg'), linear-gradient(to top, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.9) 100%)");
}

// BUY //

function playgroundBuyState(){
	$.each(colors, function(key, col){
		if (colorToken[col].primary >= 10){
			$('#' + col + '-buy').addClass("enabled").removeClass("disabled");
		} else {
			$('#' + col + '-buy').addClass("disabled").removeClass("enabled");
		}
		if (colorToken[col].secondary >= 10){
			$('#' + col + '-buyT').addClass("enabled").removeClass("disabled");
		} else {
			$('#' + col + '-buyT').addClass("disabled").removeClass("enabled");
		}

	});
}

function playgroundBuy(item, item2, rank){
	if (rank == "actor"){
		if (colorToken[item].primary >= 10) {
			colorToken[item].primary -= 10;
			colorToken[item].actor += 1;
		}	
	} else	if (rank == "tertiary"){
		if (colorToken[item].secondary >= 10) {
			colorToken[item].secondary -= 10;
			colorToken[item].tertiary += 1;
		}	
	} else if (rank == "final"){
		if (colorToken[item].tertiary >= 10) {
			colorToken[item].tertiary -= 10;
			colorToken[item2].final += 1;

			$('#playgroundPanel.' + item + ' .buyFinal#' + item2 + '-f').hide();

		}	
	}
}

// LOOP //

function colorLoop(){
	setInterval(function(){ 
		colorTokenIncrease();
	}, 1000);
	setInterval(function(){ 
		colorTokenDraw();
		playgroundBuyState();
	}, 300);
}

colorLoop();

// INPUT //

$(document).on( "click", ".tab.inactive", function(e) {
	var target = $(e.currentTarget).attr("id").slice(0, -4);
	playgroundTab(target);
});

$(document).on( "click", ".actor .buy", function(e) {
	var target = $(e.currentTarget).attr("item");
	playgroundBuy(target, null, "actor");
});

$(document).on( "click", ".tertiary .buy", function(e) {
	var target = $(e.currentTarget).attr("item");
	playgroundBuy(target, null, "tertiary");
});

$(document).on( "click", ".buyFinal", function(e) {
	var tertiary = $(e.currentTarget).attr("item");
	var final = $(e.currentTarget).attr("final");
	playgroundBuy(tertiary, final, "final");
});

$(document).keydown(function(event) {
	if (event.key === 'p') {
		toggleToggle('playground');
	} });

$(document).on( "click", "#playgroundToggle", function(e) {
	toggleToggle('playground');
	style();
});