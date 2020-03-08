var current = {
	main: {
		status: "enabled",
		shape: "circle",
		color: "black",
		colorType: "basic",
	}, 
	charge: {
		status: "disabled",
		type: "side",
		position: "topleft",
		shape: "square",
		color: "black",
		colorType: "basic",
	},
	split: {
		status: "disabled",
		position: "topbottom",
		shape: "circle",
		color: "black",
		colorType: "basic",
	},
	hyper: {
		status: "disabled",
		shape: "circle",
		color: "white",
		colorType: "basic",
	},
	wonderbar: {
		status: "disabled",
		color: "black",
	},
	select: "main"
}

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
	cross: {
		sec: "shape",
		subsec: "shape",
		card: "card",
		status: "locked"
	},
	octagon: {
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

var counter = {
	circle: 0,
	square: 0,
	rhombus: 0,
	cross: 0,
	octagon: 0,
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	black: 0,
	white: 0,
	red: 0,
	yellow: 0,
	blue: 0,
}

var power = {
	idle: {
		shape: 0,
		charge: 0,
		color: 0,
	},
	click: {
		shape: 1,
		charge: 1,
		color: 1,
	}
}
var multi = {
	charge: 0.5,
	split: 0.25,
	comp: 0.5
}

var unlockeditems = [];

function unlockedItems(){
	$.each(items, function(index, value){
		if(value.status == "active"){
			unlockeditems.push(index);
		}
	});
unlockedColors = unlockeditems.filter(value => colors.includes(value));
unlockedShapes = unlockeditems.filter(value => shape.includes(value));
unlockedChargePositions = unlockeditems.filter(value => chargePositions.includes(value));
}



