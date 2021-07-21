function start() {

	options = {
		colorblind: "off"
	}

	current = {
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
			color: "blue",
			colorType: "basic",
		},
		wonderbar: {
			status: "disabled",
			color: "black",
		},
		colorbar: {
			status: "disabled",
		},
		select: "main",
		hyperbutton: {
			status: "disabled",
		},
		chargenav: {
			status: "disabled",
		}
	}

	items = {
		circle: {
			sec: "shape",
			subsec: "shape",
			card: "card",
			status: "active"
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
			status: "active"
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
	sectionUnlock = {
		shape: "locked",
		charge: "locked",
		hyper: "locked",
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
		upgrades: "locked"
	}

	counter = {
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

	power = {
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

	multi = {
		main: 1,
		charge: 0.5,
		split: 0.25,
		hyper: 5,
		comp: 0.5
	}

	achievement = {
		circleone: {
			name: "back to circle one",
			desc: "never forget where you began!",
			expl: "reach 100 circles.",
			type: "counter",
			data: "circle",
			amount: 10,
			status: "locked"
		},
		diamonds: {
			name: "diamonds",
			desc: "these are pretty fine.",
			expl: "reach 100 rhombi.",
			type: "counter",
			data: "rhombus",
			amount: 1000,
			status: "locked"
		},
		chargefirst: {
			name: "guilty as charged",
			desc: "yes! this is the thing you were supposed to do.",
			type: "ext",
			status: "locked"
		},
		testachievement: {
			name: "this is a test.",
			desc: "u gotta remove.",
			type: "counter",
			data: "square",
			amount: 10,
			status: "locked"
		},
		test: {
			name: "test",
			status: "locked"
		},
		testa: {
			name: "test",
			status: "locked"
		},
		testq: {
			name: "test",
			status: "locked"
		},
	}

	upgrade = {
		boostidleshape: {
			name: "shapes in time",
			type: "boost",
			data: ["idle", "shape"],
			amount: 2.5,
		},
		boostidlecharge: {
			name: "charged by the centuries",
			type: "boost",
			data: ["idle", "charge"],
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
			data: ["click", "charge"],
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
		}
	}

	upgradeLevel = {
		boostidleshape: {
			l1: {
				unlock: [20, "rhombus"],
				price: [200, "black"],
				status: "locked",
			},
			l2: {
				unlock: [3000, "rhombus"],
				price: [4000, "blue"],
				status: "locked",
			},
			l3: {
				unlock: [5000, "rhombus"],
				price: [6000, "blue"],
				status: "locked",
			},		
		},
		boostidlecharge: {
			l1: {
				unlock: [100, "top"],
				price: [200, "red"],
				status: "locked",
			},
			l2: {
				unlock: [3000, "right"],
				price: [4000, "red"],
				status: "locked",
			},
			l3: {
				unlock: [5000, "right"],
				price: [6000, "red"],
				status: "locked",
			},		
		},
		boostidlecolor: {
			l1: {
				unlock: [125, "rhombus"],
				price: [150, "circle"],
				status: "locked",
			},
			l2: {
				unlock: [3000, "yellow"],
				price: [4000, "bottom"],
				status: "locked",
			},
			l3: {
				unlock: [5000, "yellow"],
				price: [6000, "bottom"],
				status: "locked",
			},		
		},
		boostclickshape: {
			l1: {
				unlock: [125, "blue"],
				price: [275, "black"],
				status: "locked",
			},
			l2: {
				unlock: [3000, "square"],
				price: [4000, "black"],
				status: "locked",
			},
			l3: {
				unlock: [5000, "circle"],
				price: [6000, "black"],
				status: "locked",
			},
		},
		boostclickcharge: {
			l1: {
				unlock: [75, "right"],
				price: [100, "square"],
				status: "locked",
			},
			l2: {
				unlock: [3000, "top"],
				price: [400, "square"],
				status: "locked",
			},
			l3: {
				unlock: [5000, "top"],
				price: [6000, "square"],
				status: "locked",
			},
		},
		boostclickcolor: {
			l1: {
				unlock: [75, "white"],
				price: [50, "left"],
				status: "locked",
			},
			l2: {
				unlock: [3000, "white"],
				price: [4000, "left"],
				status: "locked",
			},
			l3: {
				unlock: [5000, "white"],
				price: [6000, "left"],
				status: "locked",
			},
		},
		blazon: {
			l0: {
				unlock: [10000, "left"],
				price: [10000, "red"],
				status: "locked",
			},	
		},
		wonderbar: {
			l0: {
				unlock: [10000, "red"],
				price: [10000, "rhombus"],
				status: "locked",
			},	
		},
		hyper: {
			l0: {
				unlock: [1000, "red"],
				price: [10000, "yellow"],
				status: "locked",
			},
		}
	}
	
	state = {
		options: options,
		current: current,
		achievement: achievement,
		items: items,
		counter: counter,
		power: power,
		upgradeLevel: upgradeLevel
	}
}

start();

function updateState(){
	options = state.options;
	current = state.current;
	achievement = state.achievement;
	items = state.items;
	counter = state.counter;
	power = state.power;
	upgradeLevel = state.upgradeLevel;
}



$( document ).ready(function() {
	if (localStorage.getItem('state')) {
		state = JSON.parse(localStorage.getItem('state'))
		updateState();
	};
	$.each(items, function(item){
		if (items[item].status == "unlocked") {
			drawItem(item, "unlocked");
		};
		if (items[item].status == "active") {
			drawItem(item, "active");
			$('#' + item + ' .pricetag').remove();
		};
		updateSelectors();
	});

	if (upgradeLevel.blazon.l0.status == "bought") {
		addBlazon();
	}
	if (upgradeLevel.hyper.l0.status == "bought") {
		hyperAdd();
	}

	update();

	$.each(upgradeLevel, function(item, itemValue){
		$.each(itemValue, function(level, levelValue){
			if (upgradeLevel[item][level].status == "unlocked") {
				addSection("upgrades");
				addSubSection("upgrades", "upgrades")
				upgradeDraw(item, level);
			}
		});
	});
});

function updateLocalStorage(){
	localStorage.setItem('state', JSON.stringify(state));
}

$( window ).on("unload", function() {
	updateLocalStorage();
});
