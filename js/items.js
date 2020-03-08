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
		preview: [25, "circle"],
		unlock: [100, "circle"],
		price: [250, "circle"]
	},
	rhombus: {
		preview: [100, "circle"],
		unlock: [250, "square"],
		price: [500, "white"]
	},
	cross: {
		preview: [20000, "yellow"],
		unlock: [175000, "rhombus"],
		price: [1000000, "left"]
	},
	octagon: {
		preview: [20000, "bottom"],
		unlock: [175000, "cross"],
		price: [1000000, "blue"]
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
		price: [800, "right"]
	},
	violet: {
		preview: [1400, "red"],
		unlock: [2000, "blue"],
		price: [5000, "circle"]
	},
	grey: {
		preview: [30000, "white"],
		unlock: [10000, "black"],
		price: [7000, "bottom"]
	},
	lightred: {
		preview: [100000, "left"],
		unlock: [100000, "red"],
		price: [10000, "cross"]
	},
	lightyellow: {
		preview: [100000, "square"],
		unlock: [100000, "yellow"],
		price: [10000, "octagon"]
	},
	lightblue: {
		preview: [100000, "bottom"],
		unlock: [100000, "blue"],
		price: [1000000, "circle"]
	},
	darkred: {
		preview: [600000, "right"],
		unlock: [1000000, "red"],
		price: [10000000, "square"]
	},
	darkyellow: {
		preview: [600000, "circle"],
		unlock: [1000000, "yellow"],
		price: [10000000, "blue"]
	},
	darkblue: {
		preview: [600000, "top"],
		unlock: [1000000, "blue"],
		price: [100000, "octagon"]
	},
	lightgreen: {
		preview: [700, "blue"],
		unlock: [1000, "yellow"],
		price: [450, "top"]
	},
	lightorange: {
		preview: [10000000, "red"],
		unlock: [100000000, "yellow"],
		price: [1000000000, "cross"]
	},
	lightviolet: {
		preview: [10000000, "blue"],
		unlock: [100000000, "red"],
		price: [1000000000, "octagon"]
	},
	darkgreen: {
		preview: [10000000, "yellow"],
		unlock: [100000000, "blue"],
		price: [10000000000, "rhombus"]
	},
	darkorange: {
		preview: [1000, "yellow"],
		unlock: [1200, "red"],
		price: [700, "right"]
	},
	darkviolet: {
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
	topleft: {
		preview: [1000, "circle"],
		unlock: [1000, "square"],
		price: [1000, "rhombus"]
	},
	topright: {
		preview: [500, "top"],
		unlock: [600, "top"],
		price: [2600, "blue"]
	},
	bottomleft: {
		preview: [1000, "right"],
		unlock: [1500, "right"],
		price: [3000, "red"]
	},
	bottomright: {
		preview: [1500, "bottom"],
		unlock: [2000, "bottom"],
		price: [2000, "right"]
	},
	topbottom: {
		preview: [1000, "circle"],
		unlock: [1000, "square"],
		price: [1000, "rhombus"]
	},
	leftright: {
		preview: [500, "top"],
		unlock: [600, "top"],
		price: [2600, "blue"]
	},
	toprightbottomleft: {
		preview: [1000, "right"],
		unlock: [1500, "right"],
		price: [3000, "red"]
	},
	topleftbottomright: {
		preview: [1500, "bottom"],
		unlock: [2000, "bottom"],
		price: [2000, "right"]
	},
}

var labelDiv = '<div class="label"></div>';
var powerDiv = '<div class="power"></div>';
var counterDiv = '<div class="counter">0</div>';
var chargeButtons = '<div class="chargebuttons" class="container"><div class="button main active selected"><span>main</span></div><div class="button charge inactive"><span>charge</span><span class="modifier">shift</span></div><div class="button split inactive"><span>split</span><span class="modifier">alt</span></div><div class="button hyper inactive"><span>hyper</span></div></div>';

function addSection(section){
	if (sectionUnlock[section] == "locked") {
		sectionUnlock[section] = "unlocked"
		$("#" + section + "").append('<div class="title">' + section.toUpperCase() + '</div>' );
		if (section == "charge"){
			$("#" + section + " .title").append('<div class="button remove inactive">&#10005;</div>');
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

function addPreview(item){
	addSection(items[item].sec);
	addSubSection(items[item].sec, items[item].subsec);
	if (items[item].status == "locked") {
		items[item].status = "preview"
		if (items[item].card == "card") {
			dash = labelDiv + powerDiv + counterDiv;
		} else { dash = labelDiv};
		$('<div id="' + item + '" class="item preview ' + classes[items[item].subsec].join(' ') + " " + items[item].card + '">' + dash + '</div>' ).hide().appendTo('#' + items[item].subsec + ' > .container').fadeIn(2000);
	}
	style();
}

function addUnlock(item){
	if (items[item].status == "preview") {
		items[item].status = "unlocked"
		$('#' + item + '').removeClass("preview").addClass("unlocked");
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