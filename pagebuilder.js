struct = {
	"shape": {
		"shape": {
			title: "shape",
			items: ["circle", "square", "rhombus"],
			classes: ["shape"],
			card: ["card"],
		},
	},

	"charge": {
		"side": {
			title: "side",
			items: ["top", "right", "bottom", "left"],
			classes: ["side", "charge"],
			card: ["card"],
		},
		"corner": {
			title: "corner",
			items: ["topleft", "topright", "bottomleft", "bottomright"],
			classes: ["corner", "charge"],
			card: ["small"],
		},
		"split": {
			title: "split",
			items:	["top", "left", "topleft", "topright"],
			classes: ["split"],
			card: ["small"],
		}
	},

	"color": {
		"primary": {
			title: "primary",
			items: ["black", "white", "red", "yellow", "blue"],
			classes: ["color", "primary"],
			card: ["card"],
		},
		"secondary": {
			title: "secondary",
			items: ["green", "orange", "violet", "grey"],
			classes: ["color", "secondary"],
			card: ["small"],
		},
		"light": {
			title: "light",
			items: ["lightred", "lightyellow", "lightblue"],
			classes: ["color", "secondary"],
			card: ["small"],
		},
		"dark": {
			title: "dark",
			items: ["darkred", "darkyellow", "darkblue"],
			classes: ["color", "secondary"],
			card: ["small"],
		},
		"secondarylight": {
			title: "secondary light",
			items: ["lightgreen", "lightorange", "lightviolet", "lightgrey"],
			classes: ["color", "secondary"],
			card: ["small"],
		},
		"secondarydark": {
			title: "secondary dark",
			items: ["darkgreen", "darkorange", "darkviolet", "darkgrey"],
			classes: ["color", "secondary"],
			card: ["small"],
		},
	}
}

labelDiv = '<div class="label"></div>';
powerDiv = '<div class="power"></div>';
counterDiv = '<div class="counter">0</div>';


function addSection(name) {
$("#" + name + "").append('<div class="title">' + name.toUpperCase() + '</div>' );
}

function addSubSection(sec, subsec) {

	if (struct[sec][subsec].card == "small") {
	subtitle = '<div class="title sub">' + struct[sec][subsec].title.toUpperCase() + '</div>'
		} else { subtitle = ""}
	$("#" + sec + "").append('<div id="' + subsec + '" class="subsection">' + subtitle + '<div class="container"></div></div>')

}

function addItem(sec, subsec, item) {

	if (struct[sec][subsec].card == "card") {
		dash = labelDiv + powerDiv + counterDiv;
	} else { dash = ""};
	$('#' + subsec + ' > .container').append('<div id="' + item + '" class="item ' + struct[sec][subsec].classes.join(' ') + " " + struct[sec][subsec].card + '">' + dash + '</div>' );

}

function addItemFull(sec, subsec, item){

addSection(sec);
addSubSection(sec, subsec);
addItem(sec, subsec, item);

}


addItemFull("shape", "shape", "circle");
addItemFull("color", "primary", "black");

