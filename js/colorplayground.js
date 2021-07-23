function playgroundAdd(){
	toggleStatus.playground = "unlocked";
	addSection("toggles");
	addSubSection("toggles", "playgroundSec");
	$("#playgroundSec.subsection .container").html('<div id="playgroundToggle" class="button large unlocked playground buyable active"><span class="name">'+ toggle.playground.name +'</span><span class="tag key">P</span><span class="desc">'+ toggle.playground.desc +'</span></div>');
}

function playgroundToggle(){
	if(toggleStatus.playground == "unlocked"){
	if (current.playground.show == "hide"){
		current.playground.show = "show";
		$('#shaperino').css('visibility','hidden')
		$('#playground').css('visibility','visible')

		drawPlayground();
	} else if (current.playground.show == "show"){
		current.playground.show = "hide";
		$('#shaperino').css('visibility','visible')
		$('#playground').css('visibility','hidden')

	$("#playgroundSec.subsection .container").html('<div id="playgroundToggle" class="button large unlocked playground buyable active"><span class="name">'+ toggle.playground.name +'</span><span class="tag key">P</span><span class="desc">'+ toggle.playground.desc +'</span></div>');


	}
	}
}

function drawPlayground(){
	$("#playgroundSec.subsection .container").html('<div id="playgroundToggle" class="button large unlocked shaperino buyable active"><div id="shapeClone"></div><span class="name">'+ toggle.shaperino.name +'</span><span class="tag key">P</span><span class="desc">'+ toggle.shaperino.desc +'</span></div>');
	$('#playground').html('<div id="tabbar"></div>');
	$.each(colors, function(key, color){
		$('#tabbar').append('<div class="tab disabled" id="'+ color +'-tab"></div>');
		if(itemStatus[color] == "active"){
			$('.tab#'+ color +'-tab').removeClass("disabled").addClass("inactive");
					$('.tab#'+ color +'-tab').css( "background-color", colorCode[color] );
		}
	});
	$('#playground').append('<div id="playgroundPanel"><div class="header"><span class="amount"></span><span class="name"></span></div></div>');
	cloneCopy();
}

// COLOR TOKENS //

function colorTokenIncrease(){
	setInterval(function(){ 
		if (toggleStatus.playground == "unlocked") {
			$.each(mode, function(key, value){
				if (current[value].status == "enabled"){
					colorToken[current[value].color] +=0.01*multi[value];
					console.log(0.01*multi[value]);
				}
			});
		}
	}, 300);
}

function colorTokenDraw(){
	$.each(colors, function(key, color){
		$('#playgroundPanel.' + color + ' .name').html(playground[color].name);
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

$(document).on( "click", ".tab.inactive", function(e) {
	$.each(colors, function(key, color){
		if (itemStatus[color] == "active"){
			$('.tab#'+ color +'-tab').removeClass("active").addClass("inactive").css('background-image', 'linear-gradient(to top, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 40%');
		}
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

$(document).on( "click", "#shapeClone", function(e) {
	playgroundToggle();
});

$(document).on( "click", "#playgroundToggle", function(e) {
	playgroundToggle();
	style();
});