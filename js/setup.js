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
			position: "topleft",
			shape: "square",
			color: "black",
		},
		split: {
			status: "disabled",
			position: "topbottom",
			shape: "circle",
			color: "black",
		},
		hyper: {
			status: "disabled",
			shape: "circle",
			color: "blue",
		},
		wonderbar: {
			status: "disabled",
			color: "black",
		},
		colorbar: {
			status: "disabled",
		},
		select: "main",
		playground: {
			show: "hide",
			tab: "green"
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
		playgroundSec: "locked",
		navigatorSec: "locked",
		shaperinoSec: "unlocked"
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
			position: 0,
			color: 0,
		},
		click: {
			shape: 1,
			position: 1,
			color: 1,
		}
	}
	multi = {
		main: 1,
		charge: 0.5,
		split: 0.25,
		hyper: 10,
		comp: 0.5
	}

	upgradeLevel = {
		boostidleshape: {
			l1: {
				unlock: [50, "white"],
				price: [100, "black"],
				status: "locked",
			},
			l2: {
				unlock: [500, "white"],
				price: [1000, "black"],
				status: "locked",
			},
			l3: {
				unlock: [5000, "white"],
				price: [10000, "black"],
				status: "locked",
			},
			l5: {
				unlock: [50000, "white"],
				price: [100000, "black"],
				status: "locked",
			},

			l5: {
				unlock: [500000, "white"],
				price: [1000000, "black"],
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
				unlock: [1000, "top"],
				price: [2000, "red"],
				status: "locked",
			},
			l3: {
				unlock: [10000, "top"],
				price: [20000, "red"],
				status: "locked",
			},		
		},
		boostidlecolor: {
			l1: {
				unlock: [75, "rhombus"],
				price: [150, "circle"],
				status: "locked",
			},
			l2: {
				unlock: [750, "rhombus"],
				price: [1500, "circle"],
				status: "locked",
			},
			l3: {
				unlock: [7500, "rhombus"],
				price: [15000, "circle"],
				status: "locked",
			},		
		},
		boostclickshape: {
			l1: {
				unlock: [50, "red"],
				price: [200, "rhombus"],
				status: "locked",
			},
			l2: {
				unlock: [500, "red"],
				price: [2000, "rhombus"],
				status: "locked",
			},
			l3: {
				unlock: [5000, "red"],
				price: [20000, "rhombus"],
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
				unlock: [750, "right"],
				price: [1000, "square"],
				status: "locked",
			},
			l3: {
				unlock: [7500, "right"],
				price: [10000, "square"],
				status: "locked",
			},
		},
		boostclickcolor: {
			l1: {
				unlock: [75, "white"],
				price: [50, "top"],
				status: "locked",
			},
			l2: {
				unlock: [750, "white"],
				price: [500, "top"],
				status: "locked",
			},
			l3: {
				unlock: [7500, "white"],
				price: [5000, "top"],
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
				price: [10000, "blue"],
				status: "locked",
			},
		},
		playground: {
			l0: {
				unlock: [125, "top"],
				price: [1000, "yellow"],
				status: "locked",
			},
		},
		navigator: {
			l0: {
				unlock: [1000, "rhombus"],
				price: [1000, "top"],
				status: "locked",
			},
		}
	}

	itemStatus = {};
	achievementStatus = {};
	catalogueStatus = {};
	toggleStatus = {};

	$.each(items, function(k, v){
		itemStatus[k] = "locked";
	});

	itemStatus.circle = "active";
	itemStatus.black = "active";

	$.each(achievement, function(k, v){
		achievementStatus[k] = "locked";
	});

	$.each(catalogue, function(k, v){
		catalogueStatus[k] = "locked";
	});

	$.each(toggle, function(k, v){
		toggleStatus[k] = "locked";
	});


	prova = {};

	$.each(colors, function(k, v){
		prova[v] = "ok";
		prova[v].state = "balla";
	});

	state = {
		options: options,
		current: current,
		achievementStatus: achievementStatus,
		catalogueStatus: catalogueStatus,
		itemStatus: itemStatus,
		toggleStatus: toggleStatus,
		playgroundToken: playgroundToken,
		counter: counter,
		power: power,
		upgradeLevel: upgradeLevel,
		playgroundUnlock: playgroundUnlock
	}
}

start();

function updateState(){
	options = state.options;
	current = state.current;
	achievementStatus = state.achievementStatus;
	catalogueStatus = state.catalogueStatus;
	itemStatus = state.itemStatus;
	toggleStatus = state.toggleStatus;
	counter = state.counter;
	playgroundToken = state.playgroundToken;
	playgroundUnlock = state.playgroundUnlock;
	power = state.power;
	upgradeLevel = state.upgradeLevel;
}

activeItems = [];
activeColors = [];
activeShapes = [];
activeChargePositions = [];

function findActiveItems(){
	$.each(items, function(index, value){
		if(itemStatus[index] == "active"){
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
		if (itemStatus[item] == "unlocked") {
			drawItem(item, "unlocked");
		};
		if (itemStatus[item] == "active") {
			drawItem(item, "active");
			$('#' + item + ' .price.tag').remove();
		};
		updateSelectors();
	});
	if (upgradeLevel.blazon.l0.status == "bought") {
		addBlazon();
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
	if(toggleStatus.hyper == "unlocked"){
		hyperDraw();
	}
	if(toggleStatus.playground == "unlocked"){
		toggleAdd('playground');
	}
	if(toggleStatus.navigator == "unlocked"){
		toggleAdd('navigator');
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

// LOCAL STORAGE //

function updateLocalStorage(){
	localStorage.setItem('state', JSON.stringify(state));
}

$( window ).on("unload", function() {
	updateLocalStorage();
});
