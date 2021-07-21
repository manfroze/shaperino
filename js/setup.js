function start() {

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

	upgrade = {
		boostidleshape: {
			name: "boost shape idling",
			type: "boost",
			data: ["idle", "shape"],
			amount: 0.2,
		},
		boostidlecharge: {
			name: "boost charge idling",
			type: "boost",
			data: ["idle", "charge"],
			amount: 0.2,
		},
		boostidlecolor: {
			name: "boost color idling",
			type: "boost",
			data: ["idle", "color"],
			amount: 0.2,
		},
		boostclickshape: {
			name: "boost shape click",
			type: "boost",
			data: ["click", "shape"],
			amount: 1,
		},
		boostclickcharge: {
			name: "boost charge click",
			type: "boost",
			data: ["click", "charge"],
			amount: 1,
		},
		boostclickcolor: {
			name: "boost color click",
			type: "boost",
			data: ["click", "color"],
			amount: 1,
		},
		blazon: {
			name: "unlock blazons",
			type: "blazon",
			data: [""],
		},
		wonderbar: {
			name: "unlock wonder bar",
			type: "wonderbar",
			data: [""],
		},
		hyper: {
			name: "unlock hyper charge",
			type: "hyper",
			data: [""],
		}
	}

	upgradeLevel = {
		boostidleshape: {
			l1: {
				unlock: [100, "red"],
				price: [250, "blue"],
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
				unlock: [1000, "top"],
				price: [2000, "red"],
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
				unlock: [150, "top"],
				price: [500, "black"],
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
				unlock: [300, "top"],
				price: [2000, "black"],
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
				unlock: [1000, "right"],
				price: [2000, "square"],
				status: "locked",
			},
			l2: {
				unlock: [3000, "top"],
				price: [4000, "square"],
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
				unlock: [1000, "white"],
				price: [2000, "left"],
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

}

start();


$( document ).ready(function() {

	if (localStorage.getItem('counter')) { counter = JSON.parse(localStorage.getItem('counter')) };
	if (localStorage.getItem('current')) { current = JSON.parse(localStorage.getItem('current')) };
	if (localStorage.getItem('items')) { items = JSON.parse(localStorage.getItem('items')) };
	if (localStorage.getItem('power')) { power = JSON.parse(localStorage.getItem('power')) };
	if (localStorage.getItem('upgradeLevel')) { upgradeLevel = JSON.parse(localStorage.getItem('upgradeLevel')) };
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

});
