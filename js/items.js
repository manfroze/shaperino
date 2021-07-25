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
	if (itemStatus[item] == "locked") {
		itemStatus[item] = "unlocked";
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
	if (itemStatus[item] == "unlocked") {
		itemStatus[item] = "active"
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

// INPUT //

$(document).on("click", ".item.unlocked.buyable", function(e) {
	var target = $(e.currentTarget).attr("id");
	itemBuy(target);
});