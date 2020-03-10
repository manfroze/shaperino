const colorBar = {
	black: 0,
	white: 0,
	red: 0,
	yellow: 0,
	blue: 0,
	orange: 0,
	green: 0,
	violet: 0,
	grey: 0,
	darkred: 0,
	darkyellow: 0,
	darkblue: 0,
	lightred: 0,
	lightyellow: 0,
	lightblue: 0,
	darkorange: 0,
	darkgreen: 0,
	darkviolet: 0,
	lightorange: 0,
	lightgreen: 0,
	lightviolet: 0,
}

function colorBarActivate() {
	current.colorbar.status = "enabled"
	$("#colorbar").show();
	$.each(colors, function(key, value){
		$("#colorbar").append('<div class="piece ' + value + '"><span></span></div>')
		$(".piece." + value ).css('background-color', colorCode[value])
		$("#footer").css('bottom', '38px')
	});
}

function colorBarIncrease(){
	setInterval(function(){ 
		if (current.colorbar.status == "enabled") {
			$.each(mode, function(key, value){
				if (current[value].status == "enabled"){
					if (colorBar[current[value].color] <= 100-(0.1*multi[value])) {
						colorBar[current[value].color] +=0.1*multi[value];
					}
					$(".piece." + current[value].color ).css('width', 100/21/100 * colorBar[current[value].color] + 'vw');
					$(".piece." + current[value].color + " span").html(Math.floor(colorBar[current[value].color]) + "%");
				}
			});
		}
	}, 300);
}

colorBarIncrease();