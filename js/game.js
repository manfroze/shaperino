// BOARD //

const split = {
	"topbottom": "top",
	"leftright": "left",
	"topleftbottomright": "topleft",
	"toprightbottomleft": "topright"
}

const splitto = swap(split);

function setCurrent(mode, kind, selected){
	current[mode][kind] = selected;
}

function highlightCharge(){
	$("#" + current.charge.position).addClass('selected').addClass('sel-position');
}

function highlight(mode, kind){
	$("#" + current[mode][kind]).addClass('selected').addClass('sel-' + mode).addClass('sel-' + kind);
	$("#" + current[mode][kind] + " .label").append('<span class="pip sel-'+ mode +'"></span>');
}

function highlightComp(type, mode, kind){
	if (comp[type][current[mode][kind]] != ""){
		components = comp[type][current[mode][kind]];
		$("#" + components.join(", .card#")).addClass('bordered comp').addClass('sel-' + mode);
		$("#" + components.join(" .label , .card#") + " .label").append('<span class="pip comp sel-' + mode + '"></span>');
	}
}

function clearSelectors(){
	$.each(mode, function(key, value){
		$(".item").removeClass('sel-' + value);
	});
	$(".item").removeClass('selected');
	$("*").removeClass('bordered');
	$("*").removeClass('comp');
	$(".label").html('');
}

function updateSelectors(){
	clearSelectors();
	highlight("main", "shape");
	highlight("main", "color");
	if (color.composite.includes(current.main.color)) {
		highlightComp("color", "main", "color");
	}
	if (current.charge.status == "enabled" && current.split.status == "disabled") {
		//highlight("charge", "position");
		highlightCharge();
		if (position.corner.includes(current.charge.position)){
			highlightComp("charge", "charge", "position");
		}
	}
	if (current.charge.status == "enabled") {
		highlight("charge", "shape");
		highlight("charge", "color");
		if (color.composite.includes(current.charge.color)) {
			highlightComp("color", "charge", "color");
		}
		$('.button.charge').addClass("active").removeClass("inactive");
		$('#charge .button.remove').addClass("active").removeClass("inactive");
	} 
	if (current.split.status == "enabled") {
		highlight("split", "position");
		highlight("split", "shape");
		highlight("split", "color");
		highlightComp("split", "split", "position");
		if (color.composite.includes(current.split.color)) {
			highlightComp("color", "split", "color");
		}
		$('.button.split').addClass("active").removeClass("inactive");
	}

	if (current.hyper.status == "enabled") {
		highlight("hyper", "position");
		highlight("hyper", "shape");
		highlight("hyper", "color");
		if (color.composite.includes(current.hyper.color)) {
			highlightComp("color", "hyper", "color");
		}
		$('.button.small.hyper').addClass("active").removeClass("inactive");
		$('#hyper .button.remove').addClass("active").removeClass("inactive");
	}

	if (current.charge.status == "disabled"){
		$('.button.charge').addClass("inactive").removeClass("active");
		$('#charge .button.remove').addClass("inactive").removeClass("active");
	}
	if (current.split.status == "disabled"){
		$('.button.split').addClass("inactive").removeClass("active");
	}
	if (current.hyper.status == "disabled"){
		$('.button.small.hyper').addClass("inactive").removeClass("active");
		$('#hyper .button.remove').addClass("inactive").removeClass("active");
	}
	//selector("main");
}

function writePowerCounters(){
	$.each(token, function(key, value){
		$.each(powertype, function(key, powertypeValue){
			$('#' + value + ' .power .' + powertypeValue + ' span').html(formatNumber(powerCounters()[powertypeValue][value]));
		});
	});
}

function setTypes(){
	$.each(splitto, function(key, value){
		if (current.charge.position == key) {
			setCurrent("split", "position", value);
		}
	});
}

function randomShape(){
	findActiveItems();
	setCurrent("main", "shape", rand(activeShapes) );
	setCurrent("main", "color", rand(activeColors) );
	//setCurrent("hyper", "status", rand(["enabled", "disabled"]));
	if (activeItems.includes('top' || 'left' || 'right' || 'bottom')){
		setCurrent("charge", "status", rand(["enabled", "disabled"]) );
	}
	if (current.charge.status == "enabled") {
		setCurrent("charge", "position", rand(activeChargePositions) );
		setCurrent("charge", "shape", rand(activeShapes) );
		setCurrent("charge", "color", rand(activeColors) );
		if (activeItems.includes('topbottom' || 'leftright' || 'topleftbottomright' || 'toprightbottomleft')){
			setCurrent("split", "status", rand(["enabled", "disabled"]) );
		}
	} else { setCurrent("split", "status", "disabled" ); }
	if (current.split.status == "enabled") {
		setCurrent("split", "shape", rand(activeShapes) );
		setCurrent("split", "color", rand(activeColors) );
	}
	if (current.hyper.status == "enabled") {
		setCurrent("hyper", "shape", rand(activeShapes) );
		setCurrent("hyper", "color", rand(activeColors) );
	}
	update();
}

function selector(mode){
	current.select = mode;
	$('.button.small.active').removeClass("selected");
	$('.button.small.active.' + mode).addClass("selected");
}

function update(){
	setTypes();
	draw();
	shaperinoShadow();
	updateSelectors();
	writeBlazon();
	writePowerCounters();
	cloner('shapeClone');
	cloner('viewportCanvas');
	updateFavicon();
	updateCopyClone();
}

update();

// ITEMS //

const classes = {
	"shape": ["shape"],
	"side": ["side", "charge"],
	"corner": ["corner", "charge"],
	"split": ["split"],
	"primary": ["color", "basic", "primary"],
	"secondary": ["color", "composite", "secondary"],
	"light": ["color", "composite", "light"],
	"dark": ["color", "composite", "dark"],
	"secondarylight": ["color", "composite", "secondarylight"],
	"secondarydark": ["color", "composite", "secondarydark"],
}

if (navigator.platform == "MacIntel"){
	hKey = "cmd"
} else {
	hKey = "ctrl"
}

var labelDiv = '<div class="label"></div>';
var powerDiv = '<div class="power"><div class="click">+<span>1</span></div><div class="idle"><span>0</span>/s</div></div>';
var counterDiv = '<div class="counter">0</div>';
var chargeButtons = '<div class="chargebuttons" class="container"><div class="button small main active selected"><span>main</span></div><div class="button small charge inactive"><span>charge</span><span class="modifier">shift</span></div><div class="button small split inactive"><span>split</span><span class="modifier">alt</span></div><div class="button small hyper inactive"><span>hyper</span><span class="modifier">' + hKey + '</span></div></div>';

function addSection(section){
	if (sectionUnlock[section] == "locked") {
		sectionUnlock[section] = "unlocked"
		$("#" + section + "").append('<div class="title">' + section.toUpperCase() + '</div>' );
		if (section == "charge"){
			$("#" + section + " .title").append('<div class="button small remove inactive">&#10005;</div>');
			$("#title").after(chargeButtons);
		}
	}
}

function addSubSection(section, subsection){
	if (subSectionUnlock[subsection] == "locked") {
		subSectionUnlock[subsection] = "unlocked"
		$("#" + section + "").append('<div id="' + subsection + '" class="subsection"> <div class="title sub">' + subsection.toUpperCase() + '</div> <div class="container"></div></div>')
	}
}
function addUnlock(item){
	if (currentStatus.item[item] == "locked") {
		currentStatus.item[item] = "unlocked";
		drawItem(item, "unlocked");
	}
}

function drawItem(item, status){
	addSection(items[item].sec);
	addSubSection(items[item].sec, items[item].subsec);
	if (items[item].card == "card") {
		dash = labelDiv + powerDiv + counterDiv;
	} else { dash = labelDiv};
	$('<button id="' + item + '" class="item unbuyable ' + status + " " + classes[items[item].subsec].join(' ') + " " + items[item].card + '">' + dash + '</buttonx>' ).hide().appendTo('#' + items[item].subsec + ' > .container').fadeIn(2000);
	if (price[item]){
		$('#' + item + '').append('<div class="price tag ' + price[item].price[1] + '"><span>' + formatNumber(price[item].price[0]) + '</span></div>');
	}
	style();
}

function addItem(item){
	if (currentStatus.item[item] == "unlocked") {
		currentStatus.item[item] = "active"
		$('#' + item + '').removeClass("unlocked").addClass("active");
		$('#' + item + ' .price.tag').animate( {scale: 1.3}, 30).fadeOut();
	}
	style();
}

function buyableStatus(item, state){
	if (state == "on") {
		$('#' + item + '').removeClass("unbuyable").addClass("buyable");
	} else if (state == "off") {
		$('#' + item + '').removeClass("buyable").addClass("unbuyable");
	}
	style();
}

function addComplete(item){
	addUnlock(item);
	addItem(item);
}

function priceUnlock(){
	$.each(price, function(key, value) {
		if (counter[value.unlock[1]] > value.unlock[0] - 1) {
			addUnlock(key);
		}
		if (counter[value.price[1]] > value.price[0] - 1) {
			buyableStatus(key, "on");
		}
		if (counter[value.price[1]] < value.price[0] - 1) {
			buyableStatus(key, "off");
		}
	});
}

function itemBuy(item){
	if (counter[price[item].price[1]] > price[item].price[0] - 1) {
		addItem(item);
		counter[price[item].price[1]] -= price[item].price[0];
		$('#' + item).removeClass("buyable");
	}	
	updatePlaygroundTabs();
}

// CLICKING/IDLING //

function writeCounters(){	
	$.each(counter, function(index){
		$("#" + index + " .counter").html(formatNumber(counter[index]));
	});
}

function writeHyperTime(){	
	$("#hyperActivate .time").html(formatTime(Math.min(Math.floor(counter[current.hypertoken]/1000), 86400)));
}

function powerCounters(){

	var powerCalc = {}	

	$.each(powertype, function(k, powertype){
		powerCalc[powertype] = {};
		$.each(allItems, function(key, item){
			powerCalc[powertype][item] = 0;
		});
	});

	$.each(powertype, function(k, powertype){
		$.each(mode, function(key, value){
			if (current[value].status == "enabled") {
				powerCalc[powertype][current[value].shape] += power[powertype].shape * multi[value];
				if(color.basic.includes(current[value].color)) {
					powerCalc[powertype][current[value].color] += power[powertype].color * multi[value];

				}
			}
		});
		if (current.charge.status == "enabled" && position.side.includes(current.charge.position)) {
			powerCalc[powertype][current.charge.position] += power[powertype].position;
		}

	// COMP //

	if (current.charge.status == "enabled" && position.corner.includes(current.charge.position)) {
		$.each(comp.charge[current.charge.position], function(index, value){
			powerCalc[powertype][value] += power[powertype].position * multi.comp;
		});
	}
	if (current.split.status == "enabled") {
		$.each(comp.split[current.split.position], function(index, value){
			powerCalc[powertype][value] += power[powertype].position * multi.comp;
		});
	}
	if (color.composite.includes(current.main.color)) {
		$.each(comp.color[current.main.color], function(index, value){
			powerCalc[powertype][value] += power[powertype].color * multi.comp;
		});
	} 
	if (current.charge.status == "enabled" && color.composite.includes(current.charge.color)) {
		$.each(comp.color[current.charge.color], function(index, value){
			powerCalc[powertype][value] += power[powertype].color  * multi.charge  * multi.comp;
		});
	}
	if (current.split.status == "enabled" && color.composite.includes(current.split.color)) {
		$.each(comp.color[current.split.color], function(index, value){
			powerCalc[powertype][value] += power[powertype].color  * multi.charge  * multi.comp;
		});
	}
	if (current.hyper.status == "enabled" && color.composite.includes(current.hyper.color)) {
		$.each(comp.color[current.hyper.color], function(index, value){
			powerCalc[powertype][value] += power[powertype].color * multi.split * multi.comp;
		});
	}
});
	return powerCalc;
}

function increaseCounters(powertype){
	$.each(mode, function(key, value){ 
		if (current[value].status == "enabled") {
			counter[current[value].shape] += powerCounters()[powertype][current[value].shape]
			if(color.basic.includes(current[value].color)) {
				counter[current[value].color] += powerCounters()[powertype][current[value].color];
			}
		}
	});

	if (current.charge.status == "enabled" && position.side.includes(current.charge.position)) {
		counter[current.charge.position] += powerCounters()[powertype][current.charge.position];
	}

	// COMP //

	if (current.charge.status == "enabled" && position.corner.includes(current.charge.position)) {
		$.each(comp.charge[current.charge.position], function(index, value){
			counter[value] += powerCounters()[powertype][value];
		});
	}
	if (current.split.status == "enabled") {
		$.each(comp.split[current.split.position], function(index, value){
			counter[value] += powerCounters()[powertype][value];
		});
	}
	if (color.composite.includes(current.main.color)) {
		$.each(comp.color[current.main.color], function(index, value){
			counter[value] += powerCounters()[powertype][value];
		});
	} 

	if (current.charge.status == "enabled" && color.composite.includes(current.charge.color)) {
		$.each(comp.color[current.charge.color], function(index, value){
			counter[value] += powerCounters()[powertype][value];
		});
	}
	if (current.split.status == "enabled" && color.composite.includes(current.split.color)) {
		$.each(comp.color[current.split.color], function(index, value){
			counter[value] += powerCounters()[powertype][value];
		});
	}
	if (current.hyper.status == "enabled" && color.composite.includes(current.hyper.color)) {
		$.each(comp.color[current.hyper.color], function(index, value){
			counter[value] += powerCounters()[powertype][value];
		});
	}
	writeCounters(); 
}

function boost(type, kind, amount){
	power[type][kind] +=amount *=amount;
}

function loop(){
	setInterval(function(){ 
		writePowerCounters();
		writeHyperTime();
		increaseCounters("idle");
		writeCounters();
		priceUnlock();
		upgradeUnlock();
		achievementCheck();
		catalogueCheck();
		hyperUnlock();
		playgroundTokenIncrease();
	}, 1000);
	setInterval(function(){ 
		playgroundTokenDraw();
		playgroundBuyState();
	}, 100);
}

loop();

// ANIMATE //

$( document ).on( "click", "#shaperino svg g", _.throttle(animateShaperino, 200) );

function animateShaperino(){
	$("#shaperino #main-canvas svg").animate( {scale: 0.80}, 100);
	setTimeout(() => { $("#shaperino #main-canvas svg ").animate( {scale: 1}, 100); }, 0);
	$("#shaperino #charge-canvas svg").animate( {scale: 0.60}, 100);
	setTimeout(() => { $("#shaperino #charge-canvas svg ").animate( {scale: 1}, 100); }, 0);
	$("#shaperino #split-canvas svg").animate( {scale: 0.60}, 100);
	setTimeout(() => { $("#shaperino #split-canvas svg ").animate( {scale: 1}, 100); }, 0);
	$("#shaperino #hyper-canvas svg").animate( {scale: 0.70}, 100);
	setTimeout(() => { $("#shaperino #hyper-canvas svg ").animate( {scale: 1}, 100); }, 0);
	$("#shaperino #wonder-canvas svg").animate( {scale: 0.50}, 100);
	setTimeout(() => { $("#shaperino #wonder-canvas svg ").animate( {scale: 1}, 100); }, 0);
}

$( document ).on( "click", "#viewport", _.throttle(animateViewport, 200) );
function animateViewport(){
	$("#viewport svg").animate( {scale: 0.80}, 100);
	setTimeout(() => { $("#viewport svg").animate( {scale: 1}, 100); }, 0);
}

function shaperinoShadow(){
	$("#shaperino svg g").hover(function() {
		$("#shaperino svg g").css("filter", "drop-shadow(0px 0px 5px rgb(0 0 0 / 0.3))");
	}, function() {
		$("#shaperino svg g").css("filter", "none");
	});
}

// HYPER //

var hyperTimer = 100;

function hyperAdd(){
	if (currentStatus.toggle.hyper == "locked") {
		currentStatus.toggle.hyper = "unlocked";
		current.hypertoken = rand(token);
		hyperDraw();
	}
}

function hyperDraw(){
	addSection("toggles");
	addSubSection("toggles", "toggles");
	$("#toggles.subsection .container").append('<div id="hyperActivate" class="button toggle large unlocked hyper buyable active"><span class="name">'+ toggle.hyper.name +' charge</span><span class="tag timer" hidden></span><span class="tag price '+ current.hypertoken +'"><span>10K+</span></span><span class="desc">'+ toggle.hyper.desc +' <span class="time"></span></span></div>');
}

function hyperUnlock() {
	if(counter[current.hypertoken] >= 10000){
		buyableStatus("hyperActivate", "on");
		$("#hyperActivate .tag.price span").html(formatNumber(counter[current.hypertoken]));
	}
	if(counter[current.hypertoken] < 10000){
		buyableStatus("hyperActivate", "off");
		$("#hyperActivate .tag.price span").html("10K+");
	}
}

function hyperActivate(){
	findActiveItems();
	hyperTimer = Math.min(Math.floor(counter[current.hypertoken]/1000), 86400);
	counter[current.hypertoken] = 0;
	current.hyper.shape = rand(activeShapes);
	current.hyper.color = rand(activeColors);
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

// WONDERBAR //

//if (current.wonderbar.status == enabled){
	$('#wonder-canvas').find('svg path').click(function(){
		//alert("ciao");
		setInterval(function(){
			randomShape();
		}, 150) 
	});

//}

// BLAZON //

function addBlazon(){
	$("#blazon").append('<span></span>').hide().fadeIn(2000);
	writeBlazon();
}

function makeBlazon(){
	blazonTerm = {
		main: {
			shape: rand(blazonDict[current.main.shape]),
			color: rand(blazonDict[current.main.color])
		},
		charge: {
			verb: rand(blazonDict.chargeVerb),
			shape: rand(blazonDict[current.charge.shape]),
			color: rand(blazonDict[current.charge.color]),
			position: rand(blazonDict[current.charge.position])
		},
		split: {
			verb: rand(blazonDict.splitVerb),
			shape: rand(blazonDict[current.split.shape]),
			color: rand(blazonDict[current.split.color]),
		}
	}
	blazonPart = {
		main: "A " + blazonTerm.main.color + " " + blazonTerm.main.shape,
		charge: blazonTerm.charge.verb + " " + blazonTerm.charge.color + " " + blazonTerm.charge.shape + " " + blazonTerm.charge.position,
		split: blazonTerm.split.verb + " " + blazonTerm.split.color + " " + blazonTerm.split.shape
	}
	blazon = blazonPart.main;
	if (current.charge.status == "enabled") {
		blazon += " " + blazonPart.charge;
	}
	if (current.split.status == "enabled") {
		blazon += " " + blazonPart.split;
	}
	blazon += ".";
	return blazon;
}

function writeBlazon(){
	$("#blazon span").html(makeBlazon());
}

// VIEWPORT //

vp = "disabled"

function viewport(){
	if(vp == "disabled"){
		vp = "enabled";
		$("#viewport").show();
		$("#viewport").draggable();
		cloner('viewportCanvas');
	} else if (vp == "enabled"){
		vp = "disabled";
		$("#viewport").hide();
	}
}

// INPUT //

// HYPER //

$(document).on("click", "#hyperActivate.buyable.active", function(e) {
	hyperActivate();
});

// SHAPERINO //

$(document).on( "click", "#shaperino svg g", function(e) {
	increaseCounters("click");
});

$(document).on( "click", "#viewportCanvas", function(e) {
	increaseCounters("click");
});

// ITEMS //

$(document).on("click", ".item.unlocked.buyable", function(e) {
	var target = $(e.currentTarget).attr("id");
	itemBuy(target);
});


// SELECTORS KEYBOARD //

keyDown = false;

$(document).bind('keydown', function (event) {
	if (current.charge.status == "enabled") {
		if (event.key == "Shift") {
			selector("charge")
		}
	}
	if (current.split.status == "enabled") {
		if (event.key == "Alt") {
			selector("split")
		}
	}
	if (current.hyper.status == "enabled") {
		if (navigator.platform == "MacIntel"){
			if (event.key == "Meta") {
				selector("hyper")
			}
		} else {
			if (event.key == "Control") {
				selector("hyper")
			}
		}

	}
	keyDown = true;
});

$(document).bind('keyup', function (event) {
	if (event.key == "Shift" || event.key == "Alt" || event.key == "Meta" || event.key == "Control") {
		selector("main")
	}
	keyDown = false;
});

// SELECTOR CLICK //

$(document).on( "click", ".button.small.main.active", function(e) {
	selector("main");
});

$(document).on( "click", ".button.small.charge.active", function(e) {
	selector("charge");
});

$(document).on( "click", ".button.small.split.active", function(e) {
	selector("split");
});

$(document).on( "click", ".button.small.hyper.active", function(e) {
	selector("hyper");
});

// REMOVE //

$(document).on( "click", "#charge .button.remove", function(e) {
	setCurrent("charge", "status", "disabled");
	setCurrent("split", "status", "disabled");
	update();
});

$(document).on( "click", "#hyper .button.remove", function(e) {
	setCurrent("hyper", "status", "disabled");
	update();
});

// ITEM //

$(document).on( "click", ".item.shape.active", function(e) {
	target = $(e.currentTarget).attr("id");
	setCurrent(current.select, "shape", target);
});
$(document).on( "click", ".item.color.active", function(e) {
	target = $(e.currentTarget).attr("id");
	setCurrent(current.select, "color", target);
});

$(document).on( "click", ".item.charge.active", function(e) {
	var target = $(e.currentTarget).attr("id");
	setCurrent("charge", "position", target);
	setCurrent("charge", "status", "enabled");
	setCurrent("split", "status", "disabled");
});
$(document).on( "click", ".item.split.active", function(e) {
	var target = $(e.currentTarget).attr("id");
	setCurrent("split", "position", target);
	setCurrent("charge", "position", split[target]);
	setCurrent("split", "status", "enabled");
	setCurrent("charge", "status", "enabled");
});

$(document).on( "click", ".item.active", function(e) {
	update();
	if (keyDown == false){
		selector("main");
	}
});

// VIEWPORT //

$(document).on( "click", "#viewportToggle", function(e) {
	toggleToggle('viewport');
	style();
});

$(document).bind('keydown', function (event) {
	if (event.key == "v") {
		toggleToggle('viewport');
	}
});