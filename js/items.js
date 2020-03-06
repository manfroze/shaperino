var items = {
	circle: {
		sec: "shape",
		subsec: "shape",
		card: "card",
		status: "locked"
	},
	square: {
		sec: "shape",
		subsec: "shape",
		card: "card",
		status: "locked"
	},
	rhombus: {
		sec: "shape",
		subsec: "shape",
		card: "card",
		status: "locked"
	},

	top: {
		sec: "charge",
		subsec: "side",
		card: "card",
		status: "locked"
	},
	left: {	
		sec: "charge",
		subsec: "side",
		card: "card",
		status: "locked"
	},
	right: {
		sec: "charge",
		subsec: "side",
		card: "card",
		status: "locked"
	},
	bottom: {
		sec: "charge",
		subsec: "side",
		card: "card",
		status: "locked"
	},
	topleft: {
		sec: "charge",
		subsec: "corner",
		card: "small",
		status: "locked"
	},
	topright: {	
		sec: "charge",
		subsec: "corner",
		card: "small",
		status: "locked"
	},
	bottomleft: {
		sec: "charge",
		subsec: "corner",
		card: "small",
		status: "locked"
	},
	bottomright: {
		sec: "charge",
		subsec: "corner",
		card: "small",
		status: "locked"
	},
	topbottom: {
		sec: "charge",
		subsec: "split",
		card: "small",
		status: "locked"
	},
	leftright: {	
		sec: "charge",
		subsec: "split",
		card: "small",
		status: "locked"
	},
	topleftbottomright: {
		sec: "charge",
		subsec: "split",
		card: "small",
		status: "locked"
	},
	toprightbottomleft: {
		sec: "charge",
		subsec: "split",
		card: "small",
		status: "locked"
	},
	black: {
		subsec: "primary",
		sec: "color",
		card: "card",
		status: "locked"
	},
	white: {
		sec: "color",
		subsec: "primary",
		card: "card",
		status: "locked"
	},
	red: {
		sec: "color",
		subsec: "primary",
		card: "card",
		status: "locked"
	},
	blue: {
		sec: "color",
		subsec: "primary",
		card: "card",
		status: "locked"
	},
	yellow: {
		sec: "color",
		subsec: "primary",
		card: "card",
		status: "locked"
	},
	green: {
		sec: "color",
		subsec: "secondary",
		card: "small",
		status: "locked"
	},
	orange: {
		sec: "color",
		subsec: "secondary",
		card: "small",
		status: "locked"
	},
	violet: {
		sec: "color",
		subsec: "secondary",
		card: "small",
		status: "locked"
	},
	grey: {
		sec: "color",
		subsec: "secondary",
		card: "small",
		status: "locked"
	},
	lightred: {
		sec: "color",
		subsec: "light",
		card: "small",
		status: "locked"
	},
	lightblue: {
		sec: "color",
		subsec: "light",
		card: "small",
		status: "locked"
	},
	lightyellow: {
		sec: "color",
		subsec: "light",
		card: "small",
		status: "locked"
	},
	darkred: {
		sec: "color",
		subsec: "dark",
		card: "small",
		status: "locked"
	},
	darkblue: {
		sec: "color",
		subsec: "dark",
		card: "small",
		status: "locked"
	},
	darkyellow: {
		sec: "color",
		subsec: "dark",
		card: "small",
		status: "locked"
	},
	lightgreen: {
		sec: "color",
		subsec: "secondarylight",
		card: "small",
		status: "locked"
	},
	lightorange: {
		sec: "color",
		subsec: "secondarylight",
		card: "small",
		status: "locked"
	},
	lightviolet: {
		sec: "color",
		subsec: "secondarylight",
		card: "small",
		status: "locked"
	},
	darkgreen: {
		sec: "color",
		subsec: "secondarydark",
		card: "small",
		status: "locked"
	},
	darkorange: {
		sec: "color",
		subsec: "secondarydark",
		card: "small",
		status: "locked"
	},
	darkviolet: {
		sec: "color",
		subsec: "secondarydark",
		card: "small",
		status: "locked"
	},
}

var sectionUnlock = {
	shape: "locked",
	charge: "locked",
	color: "locked",
	upgrades: "locked"
}
var subSectionUnlock = {
	shape: "locked",
	side: "locked",
	corner: "locked",
	split: "locked",
	primary: "locked",
	secondary: "locked",
	light: "locked",
	dark: "locked",
	secondarylight: "locked",
	secondarydark: "locked",
	upgrades: "locked"
}

var classes = {
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
		preview: [25, "circle"],
		unlock: [50, "circle"],
		price: [100, "circle"]
	},
	rhombus: {
		preview: [90, "square"],
		unlock: [150, "square"],
		price: [200, "white"]
	},
	white: {
		preview: [50, "black"],
		unlock: [90, "black"],
		price: [125, "black"]
	},
	red: {
		preview: [100, "white"],
		unlock: [150, "white"],
		price: [350, "square"]
	},
	yellow: {
		preview: [150, "red"],
		unlock: [200, "red"],
		price: [450, "circle"]
	},
	blue: {
		preview: [180, "yellow"],
		unlock: [250, "yellow"],
		price: [500, "rhombus"]
	},
	green: {
		preview: [700, "blue"],
		unlock: [1000, "yellow"],
		price: [450, "top"]
	},
	orange: {
		preview: [1000, "yellow"],
		unlock: [1200, "red"],
		price: [700, "right"]
	},
	violet: {
		preview: [1400, "red"],
		unlock: [2000, "blue"],
		price: [5000, "circle"]
	},
	top: {
		preview: [1000, "circle"],
		unlock: [1000, "square"],
		price: [1000, "rhombus"]
	},
	right: {
		preview: [500, "top"],
		unlock: [600, "top"],
		price: [2600, "blue"]
	},
	bottom: {
		preview: [1000, "right"],
		unlock: [1500, "right"],
		price: [3000, "red"]
	},
	left: {
		preview: [1500, "bottom"],
		unlock: [2000, "bottom"],
		price: [2000, "right"]
	},
}

var labelDiv = '<div class="label"></div>';
var powerDiv = '<div class="power"></div>';
var counterDiv = '<div class="counter">0</div>';

function addSection(section){
	if (sectionUnlock[section] == "locked") {
		sectionUnlock[section] = "unlocked"
		$("#" + section + "").append('<div class="title">' + section.toUpperCase() + '</div>' );
	}
}

function addSubSection(section, subsection){
	if (subSectionUnlock[subsection] == "locked") {
		subSectionUnlock[subsection] = "unlocked"
		$("#" + section + "").append('<div id="' + subsection + '" class="subsection"> <div class="title sub">' + subsection.toUpperCase() + '</div> <div class="container"></div></div>')
	}
}

function addPreview(item){
	addSection(items[item].sec);
	addSubSection(items[item].sec, items[item].subsec);
	if (items[item].status == "locked") {
		items[item].status = "preview"
		if (items[item].card == "card") {
			dash = labelDiv + powerDiv + counterDiv;
		} else { dash = labelDiv};
		$('#' + items[item].subsec + ' > .container').append('<div id="' + item + '" class="item preview ' + classes[items[item].subsec].join(' ') + " " + items[item].card + '">' + dash + '</div>' );
	}
	style();
}

function addUnlock(item){
	if (items[item].status == "preview") {
		items[item].status = "unlocked"
		$('#' + item + '').removeClass("preview").addClass("unlocked");
		if (price[item]){
			$('#' + item + '').append('<div class="pricetag ' + price[item].price[1] + '">' + price[item].price[0] + '</div>');
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
	addPreview(item);
	addUnlock(item);
	addItem(item);
}

function priceUnlock(){
	$.each(price, function(key, value) {
		if (counter[value.preview[1]] > value.preview[0] - 1) {
			addPreview(key);
		}
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