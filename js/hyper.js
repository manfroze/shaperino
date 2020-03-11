// HYPER //

var hypertoken = rand(tokens);
var hyperTimer = 100;

function hyperAdd(){
	addSection("hyper");
	addSubSection("hyper", "hyper");
	if (current.hyperbutton.status == "disabled") {
		current.hyperbutton.status = "enabled";
		$("#hyper .container").append('<div id="hyperActivate" class="button large unlocked hyper buyable active"><span class="name">activate hyper charge </span><span class="timer" hidden></span><div class="pricetag '+ hypertoken +'"><span>half your</span></div></div>');
	}
}

function hyperUnlock() {
	if(counter[hypertoken] > 100){
		buyableStatus("hyperActivate", "on");
	}
	if(counter[hypertoken] < 100){
		buyableStatus("hyperActivate", "off");
	}
}

function hyperActivate(){
	hyperTimer = counter[hypertoken];
	counter[hypertoken] = counter[hypertoken]*0.5;
	current.hyper.shape = rand(shape);
	current.hyper.color = rand(colors);
	current.hyper.status = "enabled";
	$("#hyperActivate .pricetag").hide();
	$("#hyperActivate .timer").show().html(formatTime(hyperTimer));
	$("#hyperActivate").addClass("inactive").removeClass("active");
	$("#hyperActivate .name").html("hyper charge active ");
	$("#hyperActivate .pricetag").removeClass(hypertoken);
	hypertoken = rand(tokens)
	$("#hyperActivate .pricetag").addClass(hypertoken);
	updateSelectors();
	draw();
	setInterval(function(){ 
		if(hyperTimer > 0){
			hyperTimer--;
			$("#hyperActivate .timer").html(formatTime(hyperTimer));
		} else if (hyperTimer == 0) {
			$("#hyperActivate").addClass("active").removeClass("inactive");
			$("#hyperActivate .name").html("activate hyper charge");
			$("#hyperActivate .timer").hide().html("");
			$("#hyperActivate .pricetag").show();
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