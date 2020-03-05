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
	color: "locked"
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

function style(){
	$.each(shape, function(key, value){
	  $('.item.preview#' + value +'').css('background-image', 'url("svg/' + value + '-preview.svg")')
	  $('.item.unlocked#' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
	  $('.item.active#' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
	  $('.pricetag.' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
	});
	$.each(positions, function(key, value){
	  $('.item.preview#' + value +'').css('background-image', 'url("svg/' + value + '-preview.svg")')
	  $('.item.unlocked#' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
	  $('.item.active#' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
	  $('.pricetag.' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
	});
	$.each(colors, function(key, value){
	  $('.item.preview#' + value +'').css('background-image', 'url("svg/' + value + '-preview.svg")')
	  $('.item.unlocked#' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
	  $('.item.active#' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
	  $('.pricetag.' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
	});
}

var labelDiv = '<div class="label"></div>';
var powerDiv = '<div class="power"></div>';
var counterDiv = '<div class="counter">0</div>';

function addPreview(item){
	if (sectionUnlock[items[item].sec] == "locked") {
		sectionUnlock[items[item].sec] = "unlocked"
		$("#" + items[item].sec + "").append('<div class="title">' + items[item].sec.toUpperCase() + '</div>' );
	}
	if (subSectionUnlock[items[item].subsec] == "locked") {
		subSectionUnlock[items[item].subsec] = "unlocked"
		if (items[item].card == "small") {
			subtitle = '<div class="title sub">' + items[item].subsec.toUpperCase() + '</div>'
		} else { subtitle = ""}
		$("#" + items[item].sec + "").append('<div id="' + items[item].subsec + '" class="subsection">' + subtitle + '<div class="container"></div></div>')
	}

	if (items[item].status == "locked") {
		items[item].status = "preview"
		if (items[item].card == "card") {
			dash = labelDiv + powerDiv + counterDiv;
		} else { dash = ""};
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

function addComplete(item){
	addPreview(item);
	addUnlock(item);
	addItem(item);
}

function addAll(){
	$.each(items, function(item) {
		addComplete(item);
	});
}

$(document).on( "click", "#title", function(e) {
	addAll();
});

addComplete("circle");
addComplete("black");