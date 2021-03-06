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

const price = {
	square: {
		unlock: [25, "circle"],
		price: [100, "circle"]
	},
	rhombus: {
		unlock: [100, "square"],
		price: [200, "white"]
	},
	white: {
		unlock: [100, "black"],
		price: [200, "square"]
	},
	red: {
		unlock: [150, "white"],
		price: [200, "rhombus"]
	},
	yellow: {
		unlock: [200, "white"],
		price: [250, "circle"]
	},
	blue: {
		unlock: [250, "red"],
		price: [150, "yellow"]
	},
	green: {
		unlock: [200, "yellow"],
		price: [450, "top"]
	},
	orange: {
		unlock: [1200, "red"],
		price: [800, "right"]
	},
	violet: {
		unlock: [2000, "blue"],
		price: [5000, "circle"]
	},
	grey: {
		unlock: [10000, "black"],
		price: [7000, "bottom"]
	},
	top: {
		unlock: [150, "rhombus"],
		price: [1000, "rhombus"]
	},
	right: {
		unlock: [600, "top"],
		price: [2600, "blue"]
	},
	bottom: {
		unlock: [1500, "right"],
		price: [3000, "red"]
	},
	left: {
		unlock: [2000, "bottom"],
		price: [2000, "right"]
	},
	topleft: {
		unlock: [1000, "square"],
		price: [1000, "rhombus"]
	},
	topright: {
		unlock: [600, "top"],
		price: [2600, "blue"]
	},
	bottomleft: {
		unlock: [1500, "right"],
		price: [3000, "red"]
	},
	bottomright: {
		unlock: [2000, "bottom"],
		price: [2000, "right"]
	},
	topbottom: {
		unlock: [1000, "square"],
		price: [1000, "rhombus"]
	},
	leftright: {
		unlock: [600, "top"],
		price: [2600, "blue"]
	},
	toprightbottomleft: {
		unlock: [1500, "right"],
		price: [3000, "red"]
	},
	topleftbottomright: {
		unlock: [2000, "bottom"],
		price: [2000, "right"]
	},
	cross: {
		unlock: [175000, "rhombus"],
		price: [1000000, "left"]
	},
	octagon: {
		unlock: [175000, "cross"],
		price: [1000000, "blue"]
	},
	lightred: {
		unlock: [100000, "red"],
		price: [10000, "cross"]
	},
	lightyellow: {
		unlock: [100000, "yellow"],
		price: [10000, "octagon"]
	},
	lightblue: {
		unlock: [100000, "blue"],
		price: [1000000, "circle"]
	},
	darkred: {
		unlock: [1000000, "red"],
		price: [10000000, "square"]
	},
	darkyellow: {
		unlock: [1000000, "yellow"],
		price: [10000000, "blue"]
	},
	darkblue: {
		unlock: [1000000, "blue"],
		price: [100000, "octagon"]
	},
	lightgreen: {
		unlock: [1000, "yellow"],
		price: [450, "top"]
	},
	lightorange: {
		unlock: [100000000, "yellow"],
		price: [1000000000, "cross"]
	},
	lightviolet: {
		unlock: [100000000, "red"],
		price: [1000000000, "octagon"]
	},
	darkgreen: {
		unlock: [100000000, "blue"],
		price: [10000000000, "rhombus"]
	},
	darkorange: {
		unlock: [1200, "red"],
		price: [700, "right"]
	},
	darkviolet: {
		unlock: [2000, "blue"],
		price: [5000, "circle"]
	},
}

var labelDiv = '<div class="label"></div>';
var powerDiv = '<div class="power"></div>';
var counterDiv = '<div class="counter">0</div>';
var chargeButtons = '<div class="chargebuttons" class="container"><div class="button small main active selected"><span>main</span></div><div class="button small charge inactive"><span>charge</span><span class="modifier">shift</span></div><div class="button small split inactive"><span>split</span><span class="modifier">alt</span></div><div class="button small hyper inactive"><span>hyper</span></div></div>';

function addSection(section){
	if (sectionUnlock[section] == "locked") {
		sectionUnlock[section] = "unlocked"
		$("#" + section + "").append('<div class="title">' + section.toUpperCase() + '</div>' );
		if (section == "charge"){
			$("#" + section + " .title").append('<div class="button small remove inactive">&#10005;</div>');
		}
		if (section == "charge"){
			$("#color > .title").after(chargeButtons);
			$("#shape.section > .title").after(chargeButtons);
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
	addSection(items[item].sec);
	addSubSection(items[item].sec, items[item].subsec);
	if (items[item].status == "locked") {
		items[item].status = "unlocked"
		if (items[item].card == "card") {
			dash = labelDiv + powerDiv + counterDiv;
		} else { dash = labelDiv};
		$('<div id="' + item + '" class="item unbuyable unlocked ' + classes[items[item].subsec].join(' ') + " " + items[item].card + '">' + dash + '</div>' ).hide().appendTo('#' + items[item].subsec + ' > .container').fadeIn(2000);
		if (price[item]){
			$('#' + item + '').append('<div class="pricetag ' + price[item].price[1] + '"><span>' + formatNumber(price[item].price[0]) + '</span></div>');
		}
	}
	style();
}

function addItem(item){
	if (items[item].status == "unlocked") {
		items[item].status = "active"
		$('#' + item + '').removeClass("unlocked").addClass("active");
		$('#' + item + ' .pricetag').remove();
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
		$('#' + item + '').removeClass("buyable");
	}	
}

addComplete("circle");
addComplete("black");

// INPUT //

$(document).on("click", ".item.unlocked.buyable", function(e) {
	var target = $(e.currentTarget).attr("id");
	itemBuy(target);
});