const shape = ["circle", "square", "rhombus", "cross", "octagon"]
const mode = ["main", "hyper", "charge", "split"]
const kind = ["shape", "position", "color"]
const powertype = ["idle", "click"]
const position = {
	side: ["top", "left", "bottom", "right"],
	corner: ["topright", "topleft", "bottomright", "bottomleft"],
	split: ["topbottom", "leftright", "topleftbottomright", "toprightbottomleft"]
}
const color = {
	basic: ["black", "white", "red", "blue", "yellow"],
	composite: ["green", "orange", "violet", "grey", "lightred", "lightblue", "lightyellow", "darkred", "darkblue", "darkyellow", "lightgreen", "lightorange", "lightviolet", "darkgreen", "darkorange", "darkviolet"]
}
const comp = {
	charge: {
		topleft: ["top", "left"],
		topright: ["top", "right"],
		bottomleft: ["bottom", "left"],
		bottomright: ["bottom", "right"],
	},
	split: {
		topbottom: ["top", "bottom"],
		leftright: ["left", "right"],
		topleftbottomright: ["top", "left", "bottom", "right"],
		toprightbottomleft: ["top", "left", "bottom", "right"],
	},
	color: {
		orange: ["red", "yellow"],
		green: ["yellow", "blue"],
		violet: ["blue", "red"],
		grey: ["white", "black"],
		darkred: ["red", "black"],
		darkyellow: ["yellow", "black"],
		darkblue: ["blue", "black"],
		lightred: ["red", "white"],
		lightyellow: ["yellow", "white"],
		lightblue: ["blue", "white"],
		darkorange: ["red", "yellow", "black"],
		darkgreen: ["yellow", "blue", "black"],
		darkviolet: ["blue", "red", "black"],
		lightorange: ["red", "yellow", "white"],
		lightgreen: ["yellow", "blue", "white"],
		lightviolet: ["blue", "red", "white"],
	}
}

const colorCode = {
	black: "#222222",
	white: "#FFFFFF",
	red: "#FF4329",
	yellow: "#FFD600",
	blue: "#0085FF",
	orange: "#FF9A3D",
	green: "#47E24D",
	violet: "#883BEB",
	grey: "#9F9F9F",
	darkred: "#823525",
	darkyellow: "#CCB152",
	darkblue: "#1A3782",
	lightred: "#FFC2C2",
	lightyellow: "#FCFF81",
	lightblue: "#7CC0FF",
	darkorange: "#825933",
	darkgreen: "#239727",
	darkviolet: "#400072",
	lightorange: "#FFBF5F",
	lightgreen: "#C8FF54",
	lightviolet: "#E64EFF",
}

const blazonDict = {
	circle: ["disc", "ball", "circle", "discus", "circumference", "sun", "moon"],
	square: ["square", "equilateral", "quadrat", "box"],
	rhombus: ["lozenge", "rhombus", "diamond", "rhomboid"],
	octagon: ["octagon"],
	cross: ["cross"],
	black: ["dark", "moor", "black", "abyssal", "noir", "sable"],
	white: ["pale", "snowy", "white", "fair", "pearly", "chalky"],
	red: ["blood", "red", "fiery", "crimson", "flaming", "vermilion", "sanguine", "ruby"],
	yellow: ["yellow", "daffodil", "lemon"],
	blue: ["blue", "sapphire", "sea", "cobalt"],
	orange: ["orange", "copper", "carrot", "apricot", "peach"],
	green: ["green", "emerald", "grass"],
	violet: ["purple", "amethyst", "plum"],
	grey: ["grey", "ashen", "silver", "silvery", "ghostly"],
	darkred: ["dark red", "wine", "bordeaux"],
	darkyellow: ["gold", "golden"],
	darkblue: ["ultramarine", "royal", "deep ocean", "oceanic", "indigo"],
	lightred: ["pink", "rose"],
	lightyellow: ["light yellow", "buttery"],
	lightblue: ["azure", "cerulean", "sky"],
	darkorange: ["brown", "maroon", "chocolate"],
	darkgreen: ["dark green", "forest", "mossy"],
	darkviolet: ["violet"],
	lightorange: ["salmon", "light orange"],
	lightgreen: ["chartreuse"],
	lightviolet: ["magenta", "fuchsia", "hot pink"],
	top: ["on top", "on the top", "as a crown", "crowning"],
	left: ["on its left", "left side", "ad sinistram"],
	right: ["on the right", "right side", "a destra"],
	bottom: ["on the bottom", "on its bottom", "bottom side"],
	topright: ["on the top right "],
	topleft: ["on the top left"],
	bottomright: ["on the bottom right"],
	bottomleft: ["on its bottom left corner"],
	chargeVerb: ["charged by a", "surmounted by a", "with a"],
	splitVerb: ["and a", "opposite a", "also a", "mirroring, a"],
}

const colors = [...color.basic, ...color.composite]
const positions = [...position.side, ...position.corner, ...position.split]
const chargePositions = [...position.side, ...position.corner]
const token = [...shape, ...position.side, ...color.basic]
const allItems = [...shape, ...positions, ...colors]

const items = {
	circle: {
		sec: "shape",
		subsec: "shape",
		card: "card",
	},
	square: {
		sec: "shape",
		subsec: "shape",
		card: "card",
	},
	rhombus: {
		sec: "shape",
		subsec: "shape",
		card: "card",
	},
	cross: {
		sec: "shape",
		subsec: "shape",
		card: "card",
	},
	octagon: {
		sec: "shape",
		subsec: "shape",
		card: "card",
	},
	top: {
		sec: "charge",
		subsec: "side",
		card: "card",
	},
	left: {	
		sec: "charge",
		subsec: "side",
		card: "card",
	},
	right: {
		sec: "charge",
		subsec: "side",
		card: "card",
	},
	bottom: {
		sec: "charge",
		subsec: "side",
		card: "card",
	},
	topleft: {
		sec: "charge",
		subsec: "corner",
		card: "small",
	},
	topright: {	
		sec: "charge",
		subsec: "corner",
		card: "small",
	},
	bottomleft: {
		sec: "charge",
		subsec: "corner",
		card: "small",
	},
	bottomright: {
		sec: "charge",
		subsec: "corner",
		card: "small",
	},
	topbottom: {
		sec: "charge",
		subsec: "split",
		card: "small",
	},
	leftright: {	
		sec: "charge",
		subsec: "split",
		card: "small",
	},
	topleftbottomright: {
		sec: "charge",
		subsec: "split",
		card: "small",
	},
	toprightbottomleft: {
		sec: "charge",
		subsec: "split",
		card: "small",
	},
	black: {
		subsec: "primary",
		sec: "color",
		card: "card",
	},
	white: {
		sec: "color",
		subsec: "primary",
		card: "card",
	},
	red: {
		sec: "color",
		subsec: "primary",
		card: "card",
	},
	blue: {
		sec: "color",
		subsec: "primary",
		card: "card",
	},
	yellow: {
		sec: "color",
		subsec: "primary",
		card: "card",
	},
	green: {
		sec: "color",
		subsec: "secondary",
		card: "small",
	},
	orange: {
		sec: "color",
		subsec: "secondary",
		card: "small",
	},
	violet: {
		sec: "color",
		subsec: "secondary",
		card: "small",
	},
	grey: {
		sec: "color",
		subsec: "secondary",
		card: "small",
	},
	lightred: {
		sec: "color",
		subsec: "light",
		card: "small",
	},
	lightblue: {
		sec: "color",
		subsec: "light",
		card: "small",
	},
	lightyellow: {
		sec: "color",
		subsec: "light",
		card: "small",
	},
	darkred: {
		sec: "color",
		subsec: "dark",
		card: "small",
	},
	darkblue: {
		sec: "color",
		subsec: "dark",
		card: "small",
	},
	darkyellow: {
		sec: "color",
		subsec: "dark",
		card: "small",
	},
	lightgreen: {
		sec: "color",
		subsec: "secondarylight",
		card: "small",
	},
	lightorange: {
		sec: "color",
		subsec: "secondarylight",
		card: "small",
	},
	lightviolet: {
		sec: "color",
		subsec: "secondarylight",
		card: "small",
	},
	darkgreen: {
		sec: "color",
		subsec: "secondarydark",
		card: "small",
	},
	darkorange: {
		sec: "color",
		subsec: "secondarydark",
		card: "small",
	},
	darkviolet: {
		sec: "color",
		subsec: "secondarydark",
		card: "small",
	},
}

const catalogue = {
	cat01: {
		name: "donald duck",
		main: {
			shape: "circle",
			color: "white",
		}, 
		charge: {
			position: "topleft",
			shape: "circle",
			color: "blue",
		},
		split: {
			position: "topleftbottomright",
			shape: "rhombus",
			color: "orange",
		}
	},
	cat02: {
		name: "earth and moon",
		main: {
			shape: "circle",
			color: "blue",
		}, 
		charge: {
			position: "bottomleft",
			shape: "circle",
			color: "grey",
		}
	},
	cat03: {
		name: "cool guy",
		main: {
			shape: "square",
			color: "lightred",
		}, 
		charge: {
			position: "left",
			shape: "circle",
			color: "black",
		},
		split: {
			position: "leftright",
			shape: "circle",
			color: "black",
		}
	},
	cat04: {
		name: "h2o",
		main: {
			shape: "circle",
			color: "red",
		}, 
		charge: {
			position: "topright",
			shape: "circle",
			color: "white",
		},
		split: {
			position: "toprightbottomleft",
			shape: "circle",
			color: "white",
		}
	},
	cat05: {
		name: "forbidden",
		main: {
			shape: "circle",
			color: "red",
		}, 
		hyper: {
			shape: "cross",
			color: "white",
		}
	},
	cat06: {
		name: "yield",
		main: {
			shape: "rhombus",
			color: "white",
		}, 
		hyper: {
			shape: "rhombus",
			color: "yellow",
		}
	},
	cat07: {
		name: "spidey",
		main: {
			shape: "cross",
			color: "black",
		}, 
		charge: {
			position: "top",
			shape: "octagon",
			color: "red",
		},
		split: {
			position: "topbottom",
			shape: "octagon",
			color: "red",
		}
	},
	cat08: {
		name: "sus",
		main: {
			shape: "circle",
			color: "red",
		}, 
		charge: {
			position: "left",
			shape: "circle",
			color: "lightblue",
		}
	},
	cat09: {
		name: "holy hand grenade",
		main: {
			shape: "circle",
			color: "white",
		}, 
		charge: {
			position: "topleft",
			shape: "cross",
			color: "yellow",
		},
		hyper: {
			shape: "circle",
			color: "yellow",
		},
	},
	cat10: {
		name: "bzzz",
		main: {
			shape: "circle",
			color: "black",
		},
		charge: {
			position: "left",
			shape: "circle",
			color: "red",
		},
		split: {
			position: "leftright",
			shape: "circle",
			color: "red",
		}
	},
	cat11: {
		name: "good grief",
		main: {
			shape: "square",
			color: "yellow",
		},
		charge: {
			position: "left",
			shape: "rhombus",
			color: "black",
		},
		split: {
			position: "leftright",
			shape: "rhombus",
			color: "black",
		},
		hyper: {
			shape: "cross",
			color: "black",
		}
	},
	cat12: {
		name: "grandpa smurf",
		main: {
			shape: "circle",
			color: "blue",
		}, 
		charge: {
			position: "top",
			shape: "circle",
			color: "red",
		},
		split: {
			position: "topbottom",
			shape: "octagon",
			color: "white",
		}
	},
	cat13: {
		name: "piet",
		main: {
			shape: "square",
			color: "black",
		},
		hyper: {
			shape: "square",
			color: "red",
		},
		charge: {
			position: "topleft",
			shape: "square",
			color: "blue",
		},
		split: {
			position: "topleftbottomright",
			shape: "square",
			color: "yellow",
		},
	},
	cat14: {
		name: "scratch",
		main: {
			shape: "rhombus",
			color: "green",
		},
		charge: {
			position: "top",
			shape: "circle",
			color: "white",
		},
		split: {
			position: "topbottom",
			shape: "square",
			color: "white",
		},
	},
	cat15: {
		name: "amsterdam",
		main: {
			shape: "square",
			color: "red",
		},
		hyper: {
			shape: "square",
			color: "black",
		},
		charge: {
			position: "left",
			shape: "cross",
			color: "white",
		},
		split: {
			position: "leftright",
			shape: "cross",
			color: "white",
		},
	},
	cat16: {
		name: "big in japan",
		main: {
			shape: "square",
			color: "white",
		}, 
		hyper: {
			shape: "circle",
			color: "red",
		}
	},
	cat17: {
		name: "abyss",
		main: {
			shape: "circle",
			color: "darkviolet",
		} 
	},
	cat18: {
		name: "manhattan",
		main: {
			shape: "circle",
			color: "black",
		},
		hyper: {
			shape: "circle",
			color: "lightblue",
		},
		charge: {
			position: "top",
			shape: "circle",
			color: "black",
		},
	},

}

const toggle = {
	hyper: {
		name: "hyper",
		desc: "activate for",
		slogan: ["look at it go!", "isn't it beautiful?", "wow. just... wow.", "oh my colorful god.", "*_________*", "click on it, presto!", "this is what science brought us.", "positively amazing.", "a true wonder of geometry."],
	},
	playground: {
		name: "playground",
		desc: "open the playground",
	},
	navigator: {
		name: "navigator",
		desc: "open the navigator",
	},
	enigmarium: {
		name: "enigmarium",
		desc: "open the enigmarium",
	},
	shaperino: {
		name: "shaperino",
		desc: "back to the main guy",
	},
	viewport: {
		name: "viewport",
		desc: "show/hide the viewport",
	},
}

const playground = {
	black: { 
		type: 'final',
		primary: 'coal',
		final: 'obsidian'
	},
	white: {
		type: 'final',
		primary: 'milk',
		final: 'quartz'
	},
	red: {
		type: 'final',
		primary: 'blood',
		final: 'ruby'
	},
	yellow: {
		type: 'final',
		primary: 'saffron',
		final: 'topaz'
	},
	blue: {
		type: 'final',
		primary: 'water',
		final: 'sapphire'
	},
	green: {
		type: 'trict',
		primary: 'shamrocks',
		secondary: 'luck',
		tertiary: 'charms',
		actor: 'leprechauns',
		flavor: 'feel lucky?',
		rate: 0.5,
		price: [25, 50, 100, 5000]		
	},	
	orange: {
		type: 'trict',		
		primary: 'oranges',
		secondary: 'juice',
		tertiary: 'o-coins',
		actor: 'squeezers',
		flavor: 'squeezin\'.',
		rate: 0.5,
		price: [50, 100, 250, 7500]		
	},
	violet: {
		type: 'trict',
		primary: 'magic',
		secondary: 'spells',
		tertiary: 'amulets',
		actor: 'wizards',
		flavor: 'hocus pocus.',
		rate: 0.25,
		price: [100, 250, 500, 10000]
	},
	grey: {
		type: 'trict',
		primary: 'smog',
		secondary: 'biz',
		tertiary: 'capital',
		actor: 'men',
		flavor: 'it\'s a life.',
		rate: 0.25,
		price: [250, 500, 1000, 10000]		
	},
	lightred: {
		type: 'adventure',
		primary: 'lust',
		secondary: 'love'

	},
	lightblue: {
		primary: 'sky'
	},
	lightyellow: {
		type: 'adventure',
		primary: 'butter',
		actor: 'men spreading butter',
		secondary: 'spread butter',
		tertiary: 'eaten butter'
	},
	darkred: {
		primary: 'rust',
		actor: 'old factories',
	},
	darkblue: {
		type: 'adventure',
		primary: 'biz'
	},
	darkyellow: {
		primary: 'gold'
	},
	lightgreen: {
		primary: 'luck'
	},
	lightorange: {
		primary: 'salmon'
	},
	lightviolet: {
		primary: 'craze'
	},
	darkgreen: {
		primary: 'tree'
	},
	darkorange: {
		primary: 'chocolate'
	},
	darkviolet: {
		primary: 'mystique',
		actor: 'mystery men',
		secondary: 'arcane',
		tertiary: 'unknown'
	}
}

const price = {
		// SHAPES //

		square: {
			unlock: [25, "circle"],
			price: [50, "circle"]
		},
		rhombus: {
			unlock: [50, "square"],
			price: [75, "white"]
		},
		cross: {
			unlock: [15000, "rhombus"],
			price: [100000, "white"]
		},
		octagon: {
			unlock: [15000, "red"],
			price: [100000, "blue"]
		},

		// COLORS //

		// primary //

		white: {
			unlock: [50, "black"],
			price: [50, "square"]
		},
		red: {
			unlock: [50, "white"],
			price: [45, "rhombus"]
		},
		yellow: {
			unlock: [75, "white"],
			price: [120, "circle"]
		},
		blue: {
			unlock: [50, "red"],
			price: [50, "top"]
		},

		// secondary //

		green: {
			unlock: [150, "black"],
			price: [125, "top"]
		},
		orange: {
			unlock: [120, "red"],
			price: [500, "left"]
		},
		violet: {
			unlock: [300, "circle"],
			price: [750, "right"]
		},
		grey: {
			unlock: [1000, "black"],
			price: [3000, "bottom"]
		},

		// light primary //

		lightred: {
			unlock: [10000, "red"],
			price: [50000, "circle"]
		},
		lightblue: {
			unlock: [10000, "blue"],
			price: [500000, "square"]
		},
		lightyellow: {
			unlock: [10000, "yellow"],
			price: [5000000, "rhombus"]
		},

		// dark primary //

		darkred: {
			unlock: [10000, "red"],
			price: [25000000, "cross"]
		},
		darkblue: {
			unlock: [10000, "blue"],
			price: [300000000, "black"]
		},
		darkyellow: {
			unlock: [10000, "yellow"],
			price: [750000000, "square"]
		},

		// light secondary //

		lightgreen: {
			unlock: [50000, "yellow"],
			price: [45000000000, "cross"]
		},
		lightorange: {
			unlock: [50000, "white"],
			price: [600000000000, "octagon"]
		},
		lightviolet: {
			unlock: [50000, "red"],
			price: [1000000000000, "left"]
		},

		// dark secondary //

		darkgreen: {
			unlock: [50000, "blue"],
			price: [30000000000000, "right"]
		},
		darkorange: {
			unlock: [50000, "black"],
			price: [700000000000000, "cross"]
		},
		darkviolet: {
			unlock: [50000, "blue"],
			price: [5000000000000000, "octagon"]
		},

		// POSITIONS //

		// side //

		top: {
			unlock: [75, "white"],
			price: [50, "red"]
		},
		right: {
			unlock: [25, "top"],
			price: [50, "blue"]
		},
		bottom: {
			unlock: [100, "red"],
			price: [100, "yellow"]
		},

		left: {
			unlock: [50, "blue"],
			price: [100, "right"]
		},

		// corner //

		topleft: {
			unlock: [1000, "top"],
			price: [1000, "left"]
		},
		topright: {
			unlock: [1000, "right"],
			price: [2500, "top"]
		},
		bottomleft: {
			unlock: [1000, "left"],
			price: [4500, "bottom"]
		},
		bottomright: {
			unlock: [1000, "bottom"],
			price: [7000, "right"]
		},

		// split //

		topbottom: {
			unlock: [10000, "top"],
			price: [10000, "bottom"]
		},
		leftright: {
			unlock: [10000, "left"],
			price: [10000, "right"]
		},
		toprightbottomleft: {
			unlock: [25000, "right"],
			price: [25000, "left"]
		},
		topleftbottomright: {
			unlock: [25000, "bottom"],
			price: [25000, "top"]
		}, 

	}

	const upgrade = {
		boostidleshape: {
			name: "shapes in time",
			type: "boost",
			data: ["idle", "shape"],
			amount: 10,
		},
		boostidlecharge: {
			name: "charged by the centuries",
			type: "boost",
			data: ["idle", "position"],
			amount: 10,
		},
		boostidlecolor: {
			name: "rainbow future",
			type: "boost",
			data: ["idle", "color"],
			amount: 10,
		},
		boostclickshape: {
			name: "strength in forms",
			type: "boost",
			data: ["click", "shape"],
			amount: 5,
		},
		boostclickcharge: {
			name: "power of more",
			type: "boost",
			data: ["click", "position"],
			amount: 5,
		},
		boostclickcolor: {
			name: "kaleidoscope",
			type: "boost",
			data: ["click", "color"],
			amount: 5,
		},
		blazon: {
			name: "heraldry",
			type: "blazon",
			data: [""],
			desc: "unlock the blazon"
		},
		wonderbar: {
			name: "bar none",
			type: "wonderbar",
			data: [""],
			desc: "unlock the wonder bar"
		},
		hyper: {
			name: "glowing center",
			type: "hyper",
			data: [""],
			desc: "unlock the hyper charge"
		},
		playground: {
			name: "all the colors in the rainbow",
			type: "toggle",
			data: [""],
			desc: "unlock the playground"
		},
		navigator: {
			name: "in the grid",
			type: "toggle",
			data: [""],
			desc: "unlock the navigator"
		},
		enigmarium: {
			name: "a mystery of shapes",
			type: "toggle",
			data: [""],
			desc: "unlock the enigmarium"
		},
		viewport: {
			name: "always with you",
			type: "toggle",
			data: [""],
			desc: "unlock the viewport"
		},

	}

	const achievement = {
		circleone: {
			name: "back to circle one",
			desc: "never forget where you began!",
			expl: "reach 1000 circles.",
			type: "counter",
			data: "circle",
			amount: 1000,
		},
		diamonds: {
			name: "diamonds",
			desc: "these are pretty fine.",
			expl: "reach 1000 rhombi.",
			type: "counter",
			data: "rhombus",
			amount: 1000,
		},
		chargefirst: {
			name: "guilty as charged",
			desc: "yes! this is the thing you were supposed to do.",
			type: "ext",
		},
	}

	multi = {
		main: 1,
		charge: 0.5,
		split: 0.25,
		hyper: 10,
		comp: 0.5
	}

// STARTUP //

function start() {

	options = {
		colorblind: "off"
	}

	current = {
		main: {
			status: "enabled",
			shape: "circle",
			color: "black",
		}, 
		charge: {
			status: "disabled",
			position: "",
			shape: "circle",
			color: "black",
		},
		split: {
			status: "disabled",
			position: "",
			shape: "circle",
			color: "black",
		},
		hyper: {
			status: "disabled",
			shape: "",
			color: "",
		},
		wonderbar: {
			status: "disabled",
			color: "",
		},
		select: "main",
		playground: {
			show: "hide",
			tab: "black"
		},
		viewport: {
			show: "hide",
		},
		enigmarium: {
			show: "hide",
		},
		navigator: {
			show: "hide",
			score: {
				top: 0,
				bottom: 0,
				left: 0,
				right: 0
			},
		},
		hypertoken: "circle"
	}

	sectionUnlock = {
		shape: "locked",
		charge: "locked",
		toggles: "locked",
		color: "locked",
		upgrades: "locked"
	}

	subSectionUnlock = {
		shape: "locked",
		side: "locked",
		corner: "locked",
		split: "locked",
		hyper: "locked",
		primary: "locked",
		secondary: "locked",
		light: "locked",
		dark: "locked",
		secondarylight: "locked",
		secondarydark: "locked",
		upgrades: "locked",
		toggles: "locked",
	}

	playgroundUnlock = {
		black: {

		},
		white: {
		},
		red: {
		},
		yellow: {
		},
		blue: {
		},
		orange: {
			red: "buyable",
			yellow: "buyable",
		},
		green: {
			blue: "buyable",
			yellow: "buyable",
		},
		violet: {
			red: "buyable",
			blue: "buyable",
		},
		grey: {
			black: "buyable",
			white: "buyable",
		},
		darkred: {
		},
		darkyellow: {
		},
		darkblue: {
		},
		lightred: {
		},
		lightyellow: {
		},
		lightblue: {
		},
		darkorange: {
		},
		darkgreen: {
		},
		darkviolet: {
		},
		lightorange: {
		},
		lightgreen: {
		},
		lightviolet: {
		},


	}

	playgroundToken = {
		black: {
			primary: 0,
			final: 0
		},
		white: {
			primary: 0,
			final: 0
		},
		red: {
			primary: 0,
			final: 0
		},
		yellow: {
			primary: 0,
			final: 0	
		},
		blue: {
			primary: 0,
			final: 0
		},
		orange: {
			primary: 0,
			secondary: 0,
			tertiary: 0,
			actor: 0
		},
		green: {
			primary: 0,
			secondary: 0,
			tertiary: 0,
			actor: 0
		},
		violet: {
			primary: 0,
			secondary: 0,
			tertiary: 0,
			actor: 0
		},
		grey: {
			primary: 0,
			secondary: 0,
			tertiary: 0,
			actor: 0
		},
		darkred: {
			primary: 0,
			secondary: 0,
			tertiary: 0,
			actor: 0
		},
		darkyellow: {
			primary: 0,
			secondary: 0,
			tertiary: 0,
			actor: 0
		},
		darkblue: {
			primary: 0,
			secondary: 0,
			tertiary: 0,
			actor: 0
		},
		lightred: {
			primary: 0,
			secondary: 0,
			tertiary: 0,
			actor: 0
		},
		lightyellow: {
			primary: 0,
			secondary: 0,
			tertiary: 0,
			actor: 0
		},
		lightblue: {
			primary: 0,
			secondary: 0,
			tertiary: 0,
			actor: 0
		},
		darkorange: {
			primary: 0,
			secondary: 0,
			tertiary: 0,
			actor: 0
		},
		darkgreen: {
			primary: 0,
			secondary: 0,
			tertiary: 0,
			actor: 0
		},
		darkviolet: {
			primary: 0,
			secondary: 0,
			tertiary: 0,
			actor: 0
		},
		lightorange: {
			primary: 0,
			secondary: 0,
			tertiary: 0,
			actor: 0
		},
		lightgreen: {
			primary: 0,
			secondary: 0,
			tertiary: 0,
			actor: 0
		},
		lightviolet: {
			primary: 0,
			secondary: 0,
			tertiary: 0,
			actor: 0
		},
	}

	counter = {}

	$.each(allItems, function(k, item){
		counter[item] = 0;
	});

	power = {
		idle: {},
		click: {},
	}

	$.each(kind, function(k, kind){
		power.idle[kind] = 0;
		power.click[kind] = 1;
	});

	upgradeLevel = {
		boostidleshape: {
			l1: {
				unlock: [50, "white"],
				price: [100, "black"],
			},
			l2: {
				unlock: [500, "white"],
				price: [1000, "black"],
			},
			l3: {
				unlock: [5000, "white"],
				price: [10000, "black"],
			},
			l4: {
				unlock: [50000, "white"],
				price: [100000, "black"],
			},

			l5: {
				unlock: [500000, "white"],
				price: [1000000, "black"],
			},
		},
		boostidlecharge: {
			l1: {
				unlock: [25, "top"],
				price: [100, "red"],
			},
			l2: {
				unlock: [1000, "top"],
				price: [2000, "red"],
			},
			l3: {
				unlock: [10000, "top"],
				price: [20000, "red"],
			},		
		},
		boostidlecolor: {
			l1: {
				unlock: [50, "rhombus"],
				price: [100, "circle"],
			},
			l2: {
				unlock: [750, "rhombus"],
				price: [1500, "circle"],
			},
			l3: {
				unlock: [7500, "rhombus"],
				price: [15000, "circle"],
			},		
		},
		boostclickshape: {
			l1: {
				unlock: [50, "red"],
				price: [200, "rhombus"],
			},
			l2: {
				unlock: [500, "red"],
				price: [2000, "rhombus"],
			},
			l3: {
				unlock: [5000, "red"],
				price: [20000, "rhombus"],
			},
		},
		boostclickcharge: {
			l1: {
				unlock: [75, "right"],
				price: [100, "square"],
			},
			l2: {
				unlock: [750, "right"],
				price: [1000, "square"],
			},
			l3: {
				unlock: [7500, "right"],
				price: [10000, "square"],
			},
		},
		boostclickcolor: {
			l1: {
				unlock: [75, "white"],
				price: [50, "top"],
			},
			l2: {
				unlock: [750, "white"],
				price: [500, "top"],
			},
			l3: {
				unlock: [7500, "white"],
				price: [5000, "top"],
			},
		},
		blazon: {
			l0: {
				unlock: [10000, "left"],
				price: [10000, "red"],
			},	
		},
		wonderbar: {
			l0: {
				unlock: [10000, "red"],
				price: [1000, "cross"],
			},	
		},
		hyper: {
			l0: {
				unlock: [1000, "red"],
				price: [10000, "blue"],
			},
		},
		playground: {
			l0: {
				unlock: [100, "blue"],
				price: [1000, "yellow"],
			},
		},
		navigator: {
			l0: {
				unlock: [1000, "bottom"],
				price: [10000, "right"],
			},
		},
		enigmarium: {
			l0: {
				unlock: [1000, "cross"],
				price: [1000000, "octagon"],
			},
		},
		viewport: {
			l0: {
				unlock: [10000, "rhombus"],
				price: [500000, "left"],
			},
		}
	}

	currentStatus = {}

	$.each(["item", "achievement", "catalogue", "toggle", "upgrade"], function(key, val){
		currentStatus[val] = {};
	}); 

	$.each(items, function(item, v){
		currentStatus.item[item] = "locked";
	});

	currentStatus.item.circle = "active";
	currentStatus.item.black = "active"; 

	$.each(achievement, function(achievement, v){
		currentStatus.achievement[achievement] = "locked";
	});

	$.each(catalogue, function(k, v){
		currentStatus.catalogue[k] = "locked";
	});

	$.each(toggle, function(k, v){
		currentStatus.toggle[k] = "locked";
	});

	$.each(upgradeLevel, function(upgrade, v){
		currentStatus.upgrade[upgrade] = {};
		$.each(v, function(level, val){
			//console.log(level, val)
			currentStatus.upgrade[upgrade][level] = "locked";
		});
	});

	state = {
		options: options,
		current: current,
		currentStatus: currentStatus,
		playgroundToken: playgroundToken,
		counter: counter,
		power: power,
		playgroundUnlock: playgroundUnlock,
	}
}

start();

function updateState(){
	options = state.options;
	current = state.current;
	currentStatus = state.currentStatus;
	counter = state.counter;
	playgroundToken = state.playgroundToken;
	playgroundUnlock = state.playgroundUnlock;
	power = state.power;
}

activeItems = [];
activeColors = [];
activeShapes = [];
activeChargePositions = [];

function findActiveItems(){
	$.each(items, function(index, value){
		if(currentStatus.item[index] == "active"){
			if(!activeItems.includes(index)){
				activeItems.push(index);
			}
		}
	});
	activeColors = activeItems.filter(value => colors.includes(value));
	activeShapes = activeItems.filter(value => shape.includes(value));
	activeChargePositions = activeItems.filter(value => chargePositions.includes(value));
}

// STARTUP //

$( document ).ready(function() {
	if (localStorage.getItem('state')) {
		state = JSON.parse(localStorage.getItem('state'))
		updateState();
	};
	$.each(items, function(item){
		if (currentStatus.item[item] == "unlocked") {
			drawItem(item, "unlocked");
		};
		if (currentStatus.item[item] == "active") {
			drawItem(item, "active");
			$('#' + item + ' .price.tag').remove();
		};
		updateSelectors();
	});
	if (currentStatus.upgrade.blazon.l0 == "bought") {
		addBlazon();
	}
	update();
	$.each(upgradeLevel, function(item, itemValue){
		$.each(itemValue, function(level, levelValue){
			if (currentStatus.upgrade[item][level] == "unlocked") {
				addSection("upgrades");
				addSubSection("upgrades", "upgrades")
				upgradeDraw(item, level);
			}
		});
	});
	if(currentStatus.toggle.hyper == "unlocked"){
		hyperDraw();
	}
	if(currentStatus.toggle.playground == "unlocked"){
		toggleAdd('playground');
	}
	if(currentStatus.toggle.navigator == "unlocked"){
		toggleAdd('navigator');
	}
	if(currentStatus.toggle.enigmarium == "unlocked"){
		toggleAdd('enigmarium');
	}	
	if(currentStatus.toggle.viewport == "unlocked"){
		toggleAdd('viewport');
	}


	if(current.hyper.status == "enabled"){
		current.hyper.status = "disabled";
		update();
	}
	if (current.playground.show == "show"){
		$('#shaperino').css('visibility','hidden');
		$('#playground').css('visibility','visible');
		drawPlayground();
	}
	if (current.navigator.show == "show"){
		$('#shaperino').css('visibility','hidden');
		$('#navigator').css('visibility','visible');
		drawNavigator();
	}
	if (current.playground.show == "hide" && current.navigator.show == "hide"){
		$('#shaperino').css('visibility','visible')
		$('#playground').css('visibility','hidden')
		$('#navigator').css('visibility','hidden')
	} 
	selector("main");
});

// USEFUL FUNCTIONS //

function rand(name) {
	if (name instanceof Array == true) {
		var randomNumber = Math.floor(Math.random() * name.length);
		return name[randomNumber];
	} 
}

function swap(json){
	var ret = {};
	for(var key in json){
		ret[json[key]] = key;
	}
	return ret;
}

// STYLE //

function style(){
	$.each(shape, function(key, value){
		$('.item#' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
		$('.tag.price.' + value +'').css('background-image', 'url("svg/' + value + '-token.svg")')
	});
	$.each(positions, function(key, value){
		$('.item#' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
		$('.tag.price.' + value +'').css('background-image', 'url("svg/' + value + '-token.svg")')
	});

	if (options.colorblind == "off") {
		$.each(colors, function(key, value){
			$('.item#' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
			$('.tag.price.' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
		});

	} else if (options.colorblind == "on") {
		$.each(colors, function(key, value){
			$('.item#' + value +'').css('background-image', 'url("svg/' + value + '-cb.svg")')
			$('.tag.price.' + value +'').css('background-image', 'url("svg/' + value + '-cb.svg")')
		});
	}
	$.each(powertype, function(key, powertype){
		$.each(kind, function(key, kind){
			$('.upgrade.boost.' + powertype +'.' + kind).css('background-image', 'url("svg/boost-' + powertype +'-' + kind + '.svg")')
		});
	});

	$.each(color.basic, function(key, color){
		$(`.gem.${color}.unlocked`).css(`background-image`, `url("svg/${color}-gem.svg`)
		$(`.gem.${color}.locked`).css(`background-image`, `url("svg/${color}-gem-locked.svg`)
	});

	$('.upgrade.blazon').css('background-image', 'url("svg/blazon.svg")')
	$('.button.large.playground').css('background-image', 'url("svg/playground.svg")')
	$('.button.large.navigator').css('background-image', 'url("svg/navigator.svg")')
	$('.button.large.enigmarium').css('background-image', 'url("svg/enigmarium.svg")')
	$('.button.large.viewport').css('background-image', 'url("svg/viewport.svg")')
	$('.upgrade.wonderbar').css('background-image', 'url("svg/wonderbar.svg")')
	$('.button.large.hyper').css('background-image', 'url("svg/hyper.svg")')

}

function prettifySub(number) {
	number = parseFloat(number.toFixed(3));
	if (number >= 1000) number = 999;
	number = number.toString();
	var hasDecimal = number.split('.');
	if (typeof hasDecimal[1] === 'undefined' || hasDecimal[0].length >= 3) return number.substring(0, 3);
	return number.substring(0, 4);
}

function formatNumber(number) {
	var numberTmp = number;
	number = Math.round(number * 1000000) / 1000000;
	if (!isFinite(number)) return "Infinite";
	if (number >= 0 && number < 10) return parseFloat(number.toFixed(2));
	if (number >= 10 && number < 10000) return Math.floor(number);
	if (number === 0) {
		return prettifySub(0);
	}
	var base = Math.floor(Math.log(number) / Math.log(1000));
	if (base <= 0) return prettifySub(number);
	number /= Math.pow(1000, base);

	var suffices = [
	'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'Ud',
	'Dd', 'Td', 'Qad', 'Qid', 'Sxd', 'Spd', 'Od', 'Nd', 'V', 'Uv', 'Dv',
	'Tv', 'Qav', 'Qiv', 'Sxv', 'Spv', 'Ov', 'Nv', 'Tt'
	];
	var suffix;
	if ((base <= suffices.length && base > 0)) {
		suffix = suffices[base - 1];
	}
	else {
		var exponent = parseFloat(numberTmp).toExponential(2);
		exponent = exponent.replace('+', '');
		return exponent;
	}

	return prettifySub(number) + suffix;
} 

function formatTime(time)
{   
	var hrs = ~~(time / 3600);
	var mins = ~~((time % 3600) / 60);
	var secs = ~~time % 60;
	var ret = "";
	if (hrs > 0) {
		ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
	}
	ret += "" + mins + ":" + (secs < 10 ? "0" : "");
	ret += "" + secs;
	return ret;
}

function getKeyByValue(object, value) {
	return Object.keys(object).find(key => object[key] === value);
}

if(!Array.prototype.indexOf){
	Array.prototype.indexOf = function(val){
		var i = this.length;
		while (i--) {
			if (this[i] == val) return i;
		}
		return -1;
	} 
}

const mapObjectKeys = (object, key) => Object.fromEntries(Object.entries(object).map(([subKey, keyObject]) => [subKey, keyObject[key]]))

// LOCAL STORAGE //

function updateLocalStorage(){
	localStorage.setItem('state', JSON.stringify(state));
}

$( window ).on("unload", function() {
	updateLocalStorage();
});

// FAVICON //

function updateFavicon(){
	cloner("faviconClone");
	html2canvas(document.querySelector("#faviconClone"), { allowTaint: true, scale: 0.32, backgroundColor: "rgba(0,0,0,0)"}).then(
		function(canvas) {
			var favClone = canvas.toDataURL("image/png");
			var link = document.createElement('link');
			link.type = 'image/x-icon';
			link.rel = 'shortcut icon';
			link.href = favClone;
			document.getElementsByTagName('head')[0].appendChild(link);
		})
}

// COPY //

async function askWritePermission() {
	try {
		const { state } = await navigator.permissions.query({ name: 'clipboard-write', allowWithoutGesture: false })
		return state === 'granted'
	} catch (error) {
		errorEl.textContent = `Compatibility error (ONLY CHROME > V66): ${error.message}`
		console.log(error)
		return false
	}
}

const setToClipboard = blob => {
	const data = [new ClipboardItem({ [blob.type]: blob })]
	return navigator.clipboard.write(data)
}

var copiedClone;

function updateCopyClone(){
	cloner("copyClone");
	html2canvas(document.querySelector("#copyClone"), { allowTaint: true, scale: 20}).then(
		function(canvas) {
			copiedClone = canvas.toDataURL("image/png");
		})
}

async function copyClone(){	
	try {
		const response = await fetch(copiedClone)
		const blob = await response.blob()
		await setToClipboard(blob)
	} catch (error) {
		console.error('Something wrong happened')
		console.error(error)
	}
}
