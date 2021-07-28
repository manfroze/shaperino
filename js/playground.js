function drawPlayground(){
	shaperinoToggleDraw('playground');
	updatePlaygroundTabs();
	cloner('shapeClone');
}

function updatePlaygroundTabs(){
	$('#playground').html('<div id="tabbar"></div>');
	$.each(colors, function(key, color){
		$('#tabbar').append('<div class="tab disabled" id="'+ color +'-tab"></div>');
		if(currentStatus.item[color] == "active"){
			$('.tab#'+ color +'-tab').removeClass("disabled").addClass("inactive");
			$('.tab#'+ color +'-tab').css( "background-color", colorCode[color] );
		} else if (currentStatus.item[color] != "active"){
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
	if (currentStatus.toggle.playground == "unlocked") {
			// PRIMARY //
			$.each(mode, function(key, value){
				if (current[value].status == "enabled"){
					playgroundToken[current[value].color].primary +=1*multi[value];
					pgPower[current[value].color] += 1*multi[value];
					$.each(comp.color[current[value].color], function(index, comp){
						playgroundToken[comp].primary +=1*multi[value]*multi.comp;
						pgPower[comp] += 1*multi[value]*multi.comp;
					});
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

			if(playground[col].type == "trict"){
				$('#playgroundPanel.' + col + ' .tertiary .buy.enabled .howmuch').html('+' + formatNumber(Math.floor(playgroundToken[col].secondary/playground[col].price[1])));
				$('#playgroundPanel.' + col + ' .tertiary .buy.enabled .price').html(formatNumber(playgroundToken[col].secondary) + ' ' + playground[col].secondary);
			}

		});
	}

// CLICK ON TAB //

function playgroundTab(colorName){
	current.playground.tab = colorName;
	$.each(colors, function(key, col){
		if (currentStatus.item[col] == "active"){
			$('.tab#'+ col +'-tab').removeClass("active").addClass("inactive").css('background-image', 'linear-gradient(to top, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 40%');
		}
	});
	$('#' + colorName + "-tab").removeClass("inactive").addClass("active").css('background-image', 'url("svg/' + colorName + '-playgroundToken.svg")');
	playgroundPanel(colorName);
}

function nextColors(colorName){
	nextCol = [colors[(colors.indexOf(colorName)+1)], colors[(colors.indexOf(colorName)+2)]]
	return nextCol;
}

function prevColors(colorName){
	prevCol = [colors[(colors.indexOf(colorName)-1)], colors[(colors.indexOf(colorName)-2)]]
	return prevCol;
}

function playgroundPanel(colorName){
	$('#playground #playgroundPanel').empty();
	$('#playgroundPanel').removeClass().addClass(colorName);
	$('#playgroundPanel').css( "background-color", colorCode[colorName]);
	$('#playgroundPanel').css( "color", colorCode[colorName]);
	// TRICT //

	if(playground[colorName].type == "trict"){
		$(`#playground #playgroundPanel`).html(`
			<div class="primary box">
			<span class="amount"></span>
			<span class="name"></span>
			<span class="power"></span>
			</div>
			<div class="content">
			<div class="actor box">
			<div class="text">
			<span class="amount"></span>
			<span class="name"></span>
			<span class="flavor"></span>
			</div>
			<div class="buy" item="${colorName}">
			<span>hire one</span>
			<span class="price">for ${playground[colorName].price[0]} ${playground[colorName].primary}</span>
			</div>
			</div>
			<div class="items">
			<div class="secondary box">
			<div class="head">
			<div class="text">
			<span class="amount"></span>
			<span class="name"></span>
			</div>
			<div class="buy hire ${nextColors(colorName)[0]} ${nextColors(colorName)[1]} ">hire...<span class="indicator ${nextColors(colorName)[0]}"></span>
			<span class="indicator ${nextColors(colorName)[1]}"></span>
			</div>
			<div class="buy upgrade">upgrade...</div>
			</div>
			<span class="desc"></span>
			</div>
			<div class="tertiary box">
			<div class="head">
			<div class="text">
			<span class="amount"></span>
			<span class="name"></span>
			</div>
			<div class="buy" item="${colorName }">
			<span class="howmuch">+1</span>
			<span class="price">${playground[colorName].price[1]} ${playground[colorName].secondary}</span>
			</div>
			</div>
			<div class="buyBox"></div>
			</div>
			</div>`);

		$('#playgroundPanel .box.primary').css( "background", "url('svg/" + colorName + "-primary.svg'), linear-gradient(to top, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.9) 100%)");			
		$('#playgroundPanel .box.actor').css( "background", "url('svg/" + colorName + "-actor.svg'), linear-gradient(to top, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.9) 100%)");
		$('#playgroundPanel .box.secondary').css( "background", "linear-gradient(to top, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.9) 100%)");
		$('#playgroundPanel .box.tertiary').css( "background", "linear-gradient(to top, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.9) 100%)");
		$('#playgroundPanel.' + colorName + ' .primary .name').html(playground[colorName].primary);
		$('#playgroundPanel.' + colorName + ' .actor .name').html(playground[colorName].actor);
		$('#playgroundPanel.' + colorName + ' .actor .flavor').html(playground[colorName].flavor);
		$('#playgroundPanel.' + colorName + ' .secondary .name').html(playground[colorName].secondary);
		$('#playgroundPanel.' + colorName + ' .tertiary .name').html(playground[colorName].tertiary);

		$.each(comp.color[colorName], function(key, col){
			$('#playgroundPanel.' + colorName + ' .tertiary .buyBox').append('<div class="buyFinal" id="' + col + '-f" item="' + colorName + '" final="'+ col + '">1 ' + playground[col].final + '<span class="price">' + formatNumber(playground[colorName].price[2]) + ' ' + playground[colorName].tertiary +'</></div>');
			$('#playgroundPanel.' + colorName + ' .tertiary .buyFinal#'+ col + '-f').css("background-color", colorCode[col]);
			if(playgroundUnlock[colorName][col] == "bought"){
				$('#playgroundPanel.' + colorName + ' .buyFinal#' + col + '-f').removeClass("disabled").addClass("deactivated");
				$('#playgroundPanel.' + colorName + ' .buyFinal#' + col + '-f .price').html("bought");
			}
		});

		$.each(colors, function(key, color){
			$('#playgroundPanel.' + colorName + ' .secondary .hire .indicator.' + color).css('background-color', colorCode[color]);
			if(currentStatus.item[color] == "active"){
				$('#playgroundPanel .buy.hire .' + color).show();
				//$('#playgroundPanel .buy.hire.' + color).addClass("enabled").removeClass("disabled");
			} else if (currentStatus.item[color] != "active"){
				$('#playgroundPanel .buy.hire .' + color).hide();
				//$('#playgroundPanel .buy.hire.' + color).addClass("disabled").removeClass("enabled");
			}
		});
	}

	// ADVENTURE //

	if(playground[colorName].type == "adventure"){
		$('#playground #playgroundPanel').html('<div class="game box"><div class="gameCanvas box"></div><div class="primary small box"><span class="amount"></span><span class="name"></span><span class="power"></span></div><div class="input box"></div></div>');
		$('#playgroundPanel.' + colorName + ' .primary .name').html(playground[colorName].primary);
		$('#playgroundPanel .box.primary').css( "background", "url('svg/" + colorName + "-primary.svg'), linear-gradient(to top, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.9) 100%)");		
	}

	// FINAL //

	if(playground[colorName].type == "final"){
		$('#playground #playgroundPanel').html(`
			<div class="primary box">
				<span class="amount"></span><span class="name"></span><span class="power"></span>
			</div>
			<div class="content">
				<div class="final box">
					
					<span class="amount"></span><span class="name"></span>
					<div id="gemBox"></div>
						<div class="buy disabled">
							<span>infuse ${playground[colorName].final}</span>
							<span class="price">${formatNumber(10000)} ${playground[colorName].primary}</span>
						</div>
						<div class="buy disabled">
							<span>buy final ${colorName}</span>
							<span class="price">8 ${playground[colorName].primary}-infused ${playground[colorName].final}</span>
						</div>
				</div>
			</div>`);
		$('#playgroundPanel.' + colorName + ' .primary .name').html(playground[colorName].primary);
		$('#playgroundPanel .box.primary').css( "background", "url('svg/" + colorName + "-primary.svg'), linear-gradient(to top, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.9) 100%)");		
		$('#playgroundPanel .box.final').css( "background", "linear-gradient(to top, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.9) 100%)");
		$('#playgroundPanel.' + colorName + ' .final .name').html(playground[colorName].final);
		for (var i = 1; i <= playgroundToken[colorName].final; i++) {
			$(`.${colorName} #gemBox`).append(`<div class="gem ${colorName} unlocked"></div>`)
		}
		for (var i = 1; i <= 8-(playgroundToken[colorName].final); i++) {
			$(`.${colorName} #gemBox`).append(`<div class="gem ${colorName} locked"></div>`)
		}
	}

	// GLOBAL //

	$('#playgroundPanel .buy').css( "background-color", colorCode[colorName]);
	$('#playgroundPanel .amount').html('<img src="svg/loading.gif" />');
	style();
}

// OVERLAY //

function playgroundOverlay(colorName, kind){
	$('#playgroundPanel.' + colorName + ' .secondary').append('<div class="overlay"><div class="close"></div></div>');
	if (kind == "hire"){
		$('#playgroundPanel.' + colorName + ' .secondary .overlay').append('<div class="buy ' + nextColors(colorName)[0] + '">hire 10 ' + playground[nextColors(colorName)[0]].actor + '<div class="price">for ' + formatNumber(playground[colorName].price[3]) + ' ' + playground[colorName].secondary + '</div></div><div class="buy ' + nextColors(colorName)[1] + '">hire 10 ' + playground[nextColors(colorName)[1]].actor + '<div class="price">for ' + formatNumber(playground[colorName].price[3]) + ' ' + playground[colorName].secondary + '</div></div>');
		$('#playgroundPanel .overlay .buy.' + nextColors(colorName)[0]).css( "background-color", colorCode[nextColors(colorName)[0]]);	
		$('#playgroundPanel .overlay .buy.' + nextColors(colorName)[1]).css( "background-color", colorCode[nextColors(colorName)[1]]);
		
		$.each(colors, function(key, color){
			if(currentStatus.item[color] == "active"){
				$('#playgroundPanel .overlay .buy.' + color).show();
			} else if (currentStatus.item[color] != "active"){
				$('#playgroundPanel .overlay .buy.' + color).hide();
			}
		});
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
			if (playgroundToken[col].secondary >= playground[col].price[3] && (currentStatus.item[nextColors(col)[0]] == "active" || currentStatus.item[nextColors(col)[1]] == "active" )){
				$('#playgroundPanel.' + col + ' .secondary .buy.hire').addClass("enabled").removeClass("disabled");
				$('#playgroundPanel.' + col + ' .secondary .overlay .buy').addClass("enabled").removeClass("disabled");
			} else {
				$('#playgroundPanel.' + col + ' .secondary .buy.hire').addClass("disabled").removeClass("enabled");
				$('#playgroundPanel.' + col + ' .secondary .overlay .buy').addClass("disabled").removeClass("enabled");
			}
			if (playgroundToken[col].secondary >= playground[col].price[1]){
				$('#playgroundPanel.' + col + ' .tertiary .buy').addClass("enabled").removeClass("disabled");
			} else {
				$('#playgroundPanel.' + col + ' .tertiary .buy').addClass("disabled").removeClass("enabled");
				$('#playgroundPanel.' + col + ' .tertiary .buy .howmuch').html('+1');
				$('#playgroundPanel.' + col + ' .tertiary .buy .price').html(formatNumber(playground[col].price[1]) + ' ' + playground[col].secondary);
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

function playgroundBuy(item, item2, type){
	if (type == "actor"){
		if (playgroundToken[item].primary >= playground[item].price[0]) {
			playgroundToken[item].primary -= playground[item].price[0];
			playgroundToken[item].actor += 1;
		}	
	} else	if (type == "tertiary"){
		amount = Math.floor(playgroundToken[item].secondary/playground[item].price[1]);
		if (playgroundToken[item].secondary >= playground[item].price[1]) {
			playgroundToken[item].secondary -= playgroundToken[item].secondary;
			playgroundToken[item].tertiary += amount;
		}	
	} else if (type == "final"){
		if (playgroundToken[item].tertiary >= playground[item].price[2] && playgroundUnlock[item][item2] == "buyable") {
			playgroundToken[item].tertiary -= playground[item].price[2];
			playgroundToken[item2].final += 1;
			playgroundUnlock[item][item2] = "bought";
			$('#playgroundPanel.' + item + ' .buyFinal#' + item2 + '-f').removeClass("disabled").addClass("deactivated");
			$('#playgroundPanel.' + item + ' .buyFinal#' + item2 + '-f .price').html("bought");
		}	
	} else if (type == "hireForward"){
		if (playgroundToken[item].secondary >= playground[item].price[3]) {
			playgroundToken[item].secondary -= playground[item].price[3];
			playgroundToken[item2].actor += 10;
		}	
	}
}

function gameScreen(){

	$("#container").append('<div id="screenDark"></div><div id="gameScreen"></div>')
	$("#screenDark").fadeIn(10000).delay(5000);
	$("#gameScreen").show("clip", {"direction": "horizontal"}, 10000 );

}

// INPUT //

$(document).bind('keydown', function (event) {
	if (current.playground.show == "show"){
		if ((event.key == "ArrowLeft" || event.key == "a") && current.playground.tab != "black" && currentStatus.item[prevColors(current.playground.tab)[0]] == "active") {
			playgroundTab(prevColors(current.playground.tab)[0])
		}
		if ((event.key == "ArrowRight" || event.key == "d") && current.playground.tab != "darkviolet" && currentStatus.item[nextColors(current.playground.tab)[0]] == "active") {
			playgroundTab(nextColors(current.playground.tab)[0])
		}

	}
});

$(document).on( "click", ".buy.enabled", function(e) {
	$(e.currentTarget).animate( {scale: 0.95}, 50);
	setTimeout(() => { $(e.currentTarget).animate( {scale: 1}, 50); }, 0);
});

$(document).on( "click", ".tab.inactive", function(e) {
	var target = $(e.currentTarget).attr("id").slice(0, -4);
	playgroundTab(target);
});

$(document).on( "click", ".actor .buy", function(e) {
	var target = $(e.currentTarget).attr("item");
	playgroundBuy(target, null, "actor");
});

$.each(colors, function(key, col){
	$(document).on( "click", '#playgroundPanel.' + col + ' .secondary .buy.hire.enabled', function(e) {
		playgroundOverlay(col, "hire");
	});
});

$.each(colors, function(key, col){
	$(document).on( "click", '#playgroundPanel.' + col + ' .secondary .buy.upgrade', function(e) {
		playgroundOverlay(col, "upgrade");
	});
});

$.each(colors, function(key, col){
	$(document).on( "click", '#playgroundPanel.' + col + ' .secondary .overlay .close', function(e) {
		$('#playgroundPanel.' + col + ' .secondary .overlay').remove();
	});
});

$.each(colors, function(key, col){
	$(document).on( "click", '#playgroundPanel.' + col + ' .secondary .overlay .buy.' + nextColors(col)[0], function(e) {
		playgroundBuy(col, nextColors(col)[0], "hireForward")
	});
});

$.each(colors, function(key, col){
	$(document).on( "click", '#playgroundPanel.' + col + ' .secondary .overlay .buy.' + nextColors(col)[1], function(e) {
		playgroundBuy(col, nextColors(col)[1], "hireForward")
	});
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