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
			items:	["topbottom", "leftright", "topleftbottomright", "toprightbottomleft"],
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
			items: ["lightgreen", "lightorange", "lightviolet"],
			classes: ["color", "secondary"],
			card: ["small"],
		},
		"secondarydark": {
			title: "secondary dark",
			items: ["darkgreen", "darkorange", "darkviolet"],
			classes: ["color", "secondary"],
			card: ["small"],
		},
	}
}

label = '<div class="label"></div>';
power = '<div class="power"></div>';
counter = '<div class="counter">0</div>'


$.each(struct, function(section, secVal) {
	$("#" + section + "").append('<div class="title">' + section.toUpperCase() + '</div>' );
	$.each(secVal, function(subsection, subVal) {
			if (subVal.card == "small") {
				subtitle = '<div class="title sub">' + subVal.title.toUpperCase() + '</div>'
			} else { subtitle = ""}
		$("#" + section + "").append('<div id="' + subsection + '" class="subsection">' + subtitle + '<div class="container"></div></div>')
		$.each(subVal.items, function(index, item) {
			if (subVal.card == "card") {
				dash = label + power + counter
			} else { dash = ""}
			$('#' + subsection + ' > .container').append('<div id="' + item + '" class="item ' + subVal.classes.join(' ') + " " + subVal.card + '">' + dash + '</div>' );
		});
	});
});

