classes = {
	"shape": ["shape"],
	"side": ["side", "charge"],
	"corner": ["corner", "charge"],
	"split":["split"],
	"primary": ["color", "primary"],
	"secondary": ["color", "secondary"],
	"light": ["color", "secondary"],
	"dark": ["color", "secondary"],
	"secondarylight": ["color", "secondary"],
	"secondarydark": ["color", "secondary"],
}

items = {
	circle: {
		sec: "shape",
		subsec: "shape",
		card: "card",
		locked: "locked"
	},
	square: {
		sec: "shape",
		subsec: "shape",
		card: "card",
		locked: "locked"
	},
	rhombus: {
		sec: "shape",
		subsec: "shape",
		card: "card",
		locked: "locked"
	},

	top: {
		sec: "charge",
		subsec: "side",
		card: "card",
		locked: "locked"
	},
	left: {	
		sec: "charge",
		subsec: "side",
		card: "card",
		locked: "locked"
	},
	right: {
		sec: "charge",
		subsec: "side",
		card: "card",
		locked: "locked"
	},
	bottom: {
		sec: "charge",
		subsec: "side",
		card: "card",
		locked: "locked"
	},
	topleft: {
		sec: "charge",
		subsec: "corner",
		card: "small",
		locked: "locked"
	},
	topright: {	
		sec: "charge",
		subsec: "corner",
		card: "small",
		locked: "locked"
	},
	bottomleft: {
		sec: "charge",
		subsec: "corner",
		card: "small",
		locked: "locked"
	},
	bottomright: {
		sec: "charge",
		subsec: "corner",
		card: "small",
		locked: "locked"
	},
	topbottom: {
		sec: "charge",
		subsec: "split",
		card: "small",
		locked: "locked"
	},
	leftright: {	
		sec: "charge",
		subsec: "split",
		card: "small",
		locked: "locked"
	},
	topleftbottomright: {
		sec: "charge",
		subsec: "split",
		card: "small",
		locked: "locked"
	},
	toprightbottomleft: {
		sec: "charge",
		subsec: "split",
		card: "small",
		locked: "locked"
	},
	black: {
		subsec: "primary",
		sec: "color",
		card: "card",
		locked: "locked"
	},
	white: {
		sec: "color",
		subsec: "primary",
		card: "card",
		locked: "locked"
	},
	red: {
		sec: "color",
		subsec: "primary",
		card: "card",
		locked: "locked"
	},
	blue: {
		sec: "color",
		subsec: "primary",
		card: "card",
		locked: "locked"
	},
	yellow: {
		sec: "color",
		subsec: "primary",
		card: "card",
		locked: "locked"
	},
	green: {
		sec: "color",
		subsec: "secondary",
		card: "small",
		locked: "locked"
	},
	orange: {
		sec: "color",
		subsec: "secondary",
		card: "small",
		locked: "locked"
	},
	violet: {
		sec: "color",
		subsec: "secondary",
		card: "small",
		locked: "locked"
	},
	grey: {
		sec: "color",
		subsec: "secondary",
		card: "small",
		locked: "locked"
	},
}

sectionUnlock = {
	shape: "locked",
	charge: "locked",
	color: "locked"
}
subSectionUnlock = {
	shape: "locked",
	side: "locked",
	corner: "locked",
	split: "locked",
	primary: "locked",
	secondary: "locked",
}



labelDiv = '<div class="label"></div>';
powerDiv = '<div class="power"></div>';
counterDiv = '<div class="counter">0</div>';

function addItem(item){
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
	if (items[item].locked == "locked") {
		items[item].locked = "unlocked"
		if (items[item].card == "card") {
			dash = labelDiv + powerDiv + counterDiv;
		} else { dash = ""};
		$('#' + items[item].subsec + ' > .container').append('<div id="' + item + '" class="item ' + classes[items[item].subsec].join(' ') + " " + items[item].card + '">' + dash + '</div>' );
	}
}

addItem("circle");
addItem("black");