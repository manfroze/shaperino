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

function playgroundTokenIncrease(){
	$.each(colors, function(k, v){
		pgPower[v] = 0;
	});
	if (toggleStatus.playground == "unlocked") {
			// PRIMARY //
			$.each(mode, function(key, value){
				if (current[value].status == "enabled"){
					playgroundToken[current[value].color].primary +=1*multi[value];
					pgPower[current[value].color] += 1*multi[value];
				}
			});
			// SECONDARY //
			$.each(colors, function(key, color){
				if (playgroundToken[color].actor >= 0){
					playgroundToken[color].secondary +=playground[color].rate*playgroundToken[color].actor;
				}
			});
		}
	}

	function playgroundTokenDraw(){
		$.each(colors, function(key, col){
			$('#playgroundPanel.' + col + ' .primary .amount').html(formatNumber(playgroundToken[col].primary));
			$('#playgroundPanel.' + col + ' .secondary .amount').html(formatNumber(playgroundToken[col].secondary));
			$('#playgroundPanel.' + col + ' .tertiary .amount').html(formatNumber(playgroundToken[col].tertiary));
			$('#playgroundPanel.' + col + ' .actor .amount').html(formatNumber(playgroundToken[col].actor));
			$('#playgroundPanel.' + col + ' .final .amount').html(formatNumber(playgroundToken[col].final));
			$('#playgroundPanel.' + col + ' .primary .power').html(formatNumber(pgPower[col]) + '/s');

			$('#playgroundPanel.' + col + ' .secondary .desc').html('your <strong>' + formatNumber(playgroundToken[col].actor) + ' ' + playground[col].actor + '</strong> are producing <strong>' + formatNumber(playgroundToken[col].actor*playground[col].rate) + ' ' + playground[col].secondary + '</strong> per second');


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

	$('#' + colorName + "-tab").removeClass("inactive").addClass("active").css('background-image', 'url("svg/' + colorName + '-playgroundToken.svg")');

	// PANEL //

	$('#playgroundPanel .name').empty();
	$('#playgroundPanel').removeClass().addClass(colorName);
	$('#playgroundPanel').css( "background-color", colorCode[colorName]);
	$('#playgroundPanel').css( "color", colorCode[colorName]);

	// PANEL CONTENT //

	$('#playground #playgroundPanel').empty();

	if(playground[colorName].type == "trict"){
		$('#playground #playgroundPanel').html('<div class="primary box"><span class="amount"></span><span class="name"></span><span class="power"></span></div><div class="content"><div class="actor box"><div class="text"><span class="amount"></span><span class="name"></span><span class="flavor"></span></div><div class="buy" item="' + colorName + '"><span>hire one</span><span class="price">for ' + playground[colorName].price[0] + ' ' + playground[colorName].primary + '</span></div></div><div class="items"><div class="secondary box"><span class="amount"></span><span class="name"></span><span class="desc"></span></div><div class="tertiary box"><div class="head"><div class="text"><span class="amount"></span><span class="name"></span></div><div class="buy" item="' + colorName + '"><span>+1</span><span class="price">' + playground[colorName].price[1] + ' ' + playground[colorName].secondary + '</span></div></div><div class="buyBox"></div></div></div>');
		$('#playgroundPanel .box.primary').css( "background", "url('svg/" + colorName + "-primary.svg'), linear-gradient(to top, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.9) 100%)");			
		$('#playgroundPanel .box.actor').css( "background", "url('svg/" + colorName + "-actor.svg'), linear-gradient(to top, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.9) 100%)");
		$('#playgroundPanel .box.secondary').css( "background", "linear-gradient(to top, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.9) 100%)");
		$('#playgroundPanel .box.tertiary').css( "background", "linear-gradient(to top, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.9) 100%)");
		$('#playgroundPanel.' + colorName + ' .primary .name').html(playground[colorName].primary);
		$('#playgroundPanel.' + colorName + ' .actor .name').html(playground[colorName].actor);
		$('#playgroundPanel.' + colorName + ' .actor .flavor').html(playground[colorName].flavor);
		$('#playgroundPanel.' + colorName + ' .secondary .name').html(playground[colorName].secondary);
		$('#playgroundPanel.' + colorName + ' .tertiary .name').html(playground[colorName].tertiary);
		$('#playgroundPanel .buy').css( "background-color", colorCode[colorName]);
		$.each(comp.color[colorName], function(key, col){
			$('#playgroundPanel.' + colorName + ' .tertiary .buyBox').append('<div class="buyFinal" id="' + col + '-f" item="' + colorName + '" final="'+ col + '">1 ' + playground[col].final + '<span class="price">' + formatNumber(playground[colorName].price[2]) + ' ' + playground[colorName].tertiary +'</></div>');
			$('#playgroundPanel.' + colorName + ' .tertiary .buyFinal#'+ col + '-f').css("background-color", colorCode[col]);
			if(playgroundUnlock[colorName][col] == "bought"){
				$('#playgroundPanel.' + colorName + ' .buyFinal#' + col + '-f').removeClass("disabled").addClass("deactivated");
			}
		});

	}
	if(playground[colorName].type == "final"){
		$('#playground #playgroundPanel').html('<div class="primary box"><span class="amount"></span><span class="name"></span><span class="power"></span></div><div class="content"><div class="final box"><span class="amount"></span><span class="name"></span></div></div>');
		$('#playgroundPanel.' + colorName + ' .primary .name').html(playground[colorName].primary);
		$('#playgroundPanel .box.primary').css( "background", "url('svg/" + colorName + "-primary.svg'), linear-gradient(to top, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.9) 100%)");		
		$('#playgroundPanel .box.final').css( "background", "linear-gradient(to top, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.9) 100%)");
		$('#playgroundPanel.' + colorName + ' .final .name').html(playground[colorName].final);
	}

}

// BUY //

function playgroundBuyState(){
	$.each(colors, function(key, col){
		if(playground[col].price){
			if (playgroundToken[col].primary >= playground[col].price[0]){
				$('#playgroundPanel.' + col + ' .actor .buy').addClass("enabled").removeClass("disabled");
			} else {
				$('#playgroundPanel.' + col + ' .actor .buy').addClass("disabled").removeClass("enabled");
			}
			if (playgroundToken[col].secondary >= playground[col].price[1]){
				$('#playgroundPanel.' + col + ' .tertiary .buy').addClass("enabled").removeClass("disabled");
			} else {
				$('#playgroundPanel.' + col + ' .tertiary .buy').addClass("disabled").removeClass("enabled");
			}
			$.each(comp.color[col], function(key, c){	
				if (playgroundToken[col].tertiary >= playground[col].price[2]){
					$('#playgroundPanel.' + col + ' .buyFinal#' + c + '-f').addClass("enabled").removeClass("disabled");
				} else {
					$('#playgroundPanel.' + col + ' .buyFinal#' + c + '-f').addClass("disabled").removeClass("enabled");
				}
			});
		}
	});
}

function playgroundBuy(item, item2, rank){
	if (rank == "actor"){
		if (playgroundToken[item].primary >= playground[item].price[0]) {
			playgroundToken[item].primary -= playground[item].price[0];
			playgroundToken[item].actor += 1;
		}	
	} else	if (rank == "tertiary"){
		if (playgroundToken[item].secondary >= playground[item].price[1]) {
			playgroundToken[item].secondary -= playground[item].price[1];
			playgroundToken[item].tertiary += 1;
		}	
	} else if (rank == "final"){
		if (playgroundToken[item].tertiary >= playground[item].price[2] && playgroundUnlock[item][item2] == "buyable") {
			playgroundToken[item].tertiary -= playground[item].price[2];
			playgroundToken[item2].final += 1;

			playgroundUnlock[item][item2] = "bought";
			$('#playgroundPanel.' + item + ' .buyFinal#' + item2 + '-f').removeClass("disabled").addClass("deactivated");
		}	
	}
}

// LOOP //

function colorLoop(){
	setInterval(function(){ 
		playgroundTokenIncrease();
	}, 1000);
	setInterval(function(){ 
		playgroundTokenDraw();
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