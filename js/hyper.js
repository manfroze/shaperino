// HYPER //

var hyperTimer = 100;

function hyperAdd(){
	if (toggleStatus.hyper == "locked") {
		toggleStatus.hyper = "unlocked";
		current.hypertoken = rand(token);
		hyperDraw();
	}
}

function hyperDraw(){
	addSection("toggles");
	addSubSection("toggles", "hyper");
	$("#hyper.subsection .container").append('<div id="hyperActivate" class="button large unlocked hyper buyable active"><span class="name">'+ toggle.hyper.name +' charge</span><span class="tag timer" hidden></span><span class="tag price '+ current.hypertoken +'"><span>10K+</span></span><span class="desc">'+ toggle.hyper.desc +' <span class="time"></span></span></div>');
}

function hyperUnlock() {
	if(counter[current.hypertoken] > 10000){
		buyableStatus("hyperActivate", "on");
		$("#hyperActivate .tag.price span").html(formatNumber(counter[current.hypertoken]));
	}
	if(counter[current.hypertoken] < 10000){
		buyableStatus("hyperActivate", "off");
		$("#hyperActivate .tag.price span").html("10K+");
	}
}

function hyperActivate(){
	hyperTimer = Math.min(Math.floor(counter[current.hypertoken]/1000), 86400);
	counter[current.hypertoken] = 0;
	current.hyper.shape = rand(shape);
	current.hyper.color = rand(colors);
	current.hyper.status = "enabled";
	$("#hyperActivate .tag.price").hide();
	$("#hyperActivate .tag.timer").show().html(formatTime(hyperTimer));
	$("#hyperActivate").addClass("inactive").removeClass("active");
	$("#hyperActivate .name").html("hyper charge active ");
	$("#hyperActivate .desc").html(rand(toggle.hyper.slogan));
	$("#hyperActivate .tag.price").removeClass(current.hypertoken);
	current.hypertoken = rand(token)
	$("#hyperActivate .tag.price").addClass(current.hypertoken);
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
			$("#hyperActivate .tag.timer").hide().html("");
			$("#hyperActivate .tag.price").show();
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