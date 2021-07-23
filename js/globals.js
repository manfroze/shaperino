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
	shaperino: {
		name: "shaperino",
		desc: "back to the main guy",
	},
}

const playground = {
	black: { name: 'pitch'},
	white: { name: 'snow'},
	red: { name: 'blood'},
	yellow: { name: 'saffron'},
	blue: { name: 'water'},
	orange: { name: 'juice'},
	green: { name: 'lettuce'},
	violet: { name: 'magic'},
	grey: { name: 'smog'},
	darkred: { name: 'rust'},
	darkyellow: { name: 'gold'},
	darkblue: { name: 'biz'},
	lightred: { name: 'candy'},
	lightyellow: { name: 'butter'},
	lightblue: { name: 'sky'},
	darkorange: { name: 'chocolate'},
	darkgreen: { name: 'tree'},
	darkviolet: { name: 'mystique'},
	lightorange: { name: 'salmon'},
	lightgreen: { name: 'luck'},
	lightviolet: { name: 'craze'},
}

const upgrade = {
	boostidleshape: {
		name: "shapes in time",
		type: "boost",
		data: ["idle", "shape"],
		amount: 2.5,
	},
	boostidlecharge: {
		name: "charged by the centuries",
		type: "boost",
		data: ["idle", "position"],
		amount: 2,
	},
	boostidlecolor: {
		name: "rainbow future",
		type: "boost",
		data: ["idle", "color"],
		amount: 2.2,
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
		amount: 5.3,
	},
	boostclickcolor: {
		name: "kaleidoscope",
		type: "boost",
		data: ["click", "color"],
		amount: 5.6,
	},
	blazon: {
		name: "heraldry",
		type: "blazon",
		data: [""],
		desc: "unlock blazons"
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
		type: "playground",
		data: [""],
		desc: "unlock the playground"
	}
}

const achievement = {
		circleone: {
			name: "back to circle one",
			desc: "never forget where you began!",
			expl: "reach 100 circles.",
			type: "counter",
			data: "circle",
			amount: 10,
		},
		diamonds: {
			name: "diamonds",
			desc: "these are pretty fine.",
			expl: "reach 100 rhombi.",
			type: "counter",
			data: "rhombus",
			amount: 1000,
		},
		chargefirst: {
			name: "guilty as charged",
			desc: "yes! this is the thing you were supposed to do.",
			type: "ext",
		},
		testachievement: {
			name: "this is a test.",
			desc: "u gotta remove.",
			type: "counter",
			data: "square",
			amount: 10,
		},
		test: {
			name: "test",
		},
		testa: {
			name: "test",
		},
		testq: {
			name: "test",
		},
	}

const price = {
	square: {
		unlock: [25, "circle"],
		price: [50, "circle"]
	},
	rhombus: {
		unlock: [50, "square"],
		price: [75, "white"]
	},
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
		price: [120, "square"]
	},
	blue: {
		unlock: [50, "red"],
		price: [55, "yellow"]
	},
	green: {
		unlock: [150, "black"],
		price: [125, "top"]
	},
	orange: {
		unlock: [120, "red"],
		price: [50, "left"]
	},
	violet: {
		unlock: [300, "circle"],
		price: [200, "rhombus"]
	},
	grey: {
		unlock: [1000, "black"],
		price: [75, "bottom"]
	},
	top: {
		unlock: [75, "white"],
		price: [50, "red"]
	},
	right: {
		unlock: [25, "top"],
		price: [50, "blue"]
	},
	bottom: {
		unlock: [100, "yellow"],
		price: [100, "red"]
	},
	left: {
		unlock: [50, "blue"],
		price: [100, "right"]
	},
	topleft: {
		unlock: [300, "red"],
		price: [1000, "rhombus"]
	},
	topright: {
		unlock: [500, "blue"],
		price: [2600, "blue"]
	},
	bottomleft: {
		unlock: [350, "square"],
		price: [3000, "red"]
	},
	bottomright: {
		unlock: [1000, "circle"],
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
	$('.upgrade.blazon').css('background-image', 'url("svg/blazon.svg")')
	$('.button.large.playground').css('background-image', 'url("svg/playground.svg")')
	$('.upgrade.wonderbar').css('background-image', 'url("svg/wonderbar.svg")')
	$('.button.large.hyper').css('background-image', 'url("svg/hyper.svg")')
	//$('.button.large.shaperino').css('background-image', 'url("svg/circle.svg")')

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