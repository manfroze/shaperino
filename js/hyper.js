// HYPER //

var hyperTimer = 100;

var hyperSlogan = ["look at it go!", "isn't it beautiful?", "wow. just... wow.", "oh my colorful god.", "*_________*", "click on it, presto!", "this is what science brought us.", "positively amazing.", "a true wonder of geometry."];

function hyperAdd(){
	if (current.hyperbutton.status == "disabled") {
		current.hyperbutton.status = "enabled";
		current.hypertoken = rand(token);
		hyperDraw();
	}
}

function hyperDraw(){
	addSection("hyper");
	addSubSection("hyper", "hyper");
	$("#hyper .container").append('<div id="hyperActivate" class="button large unlocked hyper buyable active"><span class="name">hyper charge</span><span class="timer" hidden></span><div class="pricetag '+ current.hypertoken +'"><span>10K+</span></div><span class="desc">activate for <span class="time"></span></span></div>');
}

function hyperUnlock() {
	if(counter[current.hypertoken] > 10000){
		buyableStatus("hyperActivate", "on");
		$("#hyperActivate .pricetag span").html(formatNumber(counter[current.hypertoken]));
	}
	if(counter[current.hypertoken] < 10000){
		buyableStatus("hyperActivate", "off");
		$("#hyperActivate .pricetag span").html("10K+");
	}
}

function hyperActivate(){
	hyperTimer = Math.min(Math.floor(counter[current.hypertoken]/1000), 86400);
	counter[current.hypertoken] = 0;
	current.hyper.shape = rand(shape);
	current.hyper.color = rand(colors);
	current.hyper.status = "enabled";
	$("#hyperActivate .pricetag").hide();
	$("#hyperActivate .timer").show().html(formatTime(hyperTimer));
	$("#hyperActivate").addClass("inactive").removeClass("active");
	$("#hyperActivate .name").html("hyper charge active ");
	$("#hyperActivate .desc").html(rand(hyperSlogan));
	$("#hyperActivate .pricetag").removeClass(current.hypertoken);
	current.hypertoken = rand(token)
	$("#hyperActivate .pricetag").addClass(current.hypertoken);
	updateSelectors();
	draw();

	var timer = setInterval(function (){ 
		if(hyperTimer > 0){
			hyperTimer--;
			$("#hyperActivate .timer").html(formatTime(hyperTimer));
		} else if (hyperTimer == 0) {
			clearInterval(timer);
			$("#hyperActivate").addClass("active").removeClass("inactive");
			$("#hyperActivate .name").html("activate hyper charge");
			$("#hyperActivate .timer").hide().html("");
			$("#hyperActivate .pricetag").show();
			$("#hyperActivate .desc").html('activate the hyper charge for <span class="time"></span>');
			current.hyper.status = "disabled";
			updateSelectors();
			draw();
		}
	}, 1000);
}

// INPUT //

$(document).on("click", "#hyperActivate.buyable.active", function(e) {
	hyperActivate();
});