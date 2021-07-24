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
			score: 0,
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
		playgroundSec: "locked"
	}

	colorToken = {
		black: {
			primary: 0,
			secondary: 0,
			tertiary: 0,
			actor: 0,
			final: 0
		},
		white: {
			primary: 0,
			secondary: 0,
			tertiary: 0,
			actor: 0,
			final: 0
		},
		red: {
			primary: 0,
			secondary: 0,
			tertiary: 0,
			actor: 0,
			final: 0
		},
		yellow: {
			primary: 0,
			secondary: 0,
			tertiary: 0,
			actor: 0,
			final: 0	
		},
		blue: {
			primary: 0,
			secondary: 0,
			tertiary: 0,
			actor: 0,
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
		},
		playground: {
			l0: {
				unlock: [2, "circle"],
				price: [2, "black"],
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
		colorToken: colorToken,
		counter: counter,
		power: power,
		upgradeLevel: upgradeLevel
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
	colorToken = state.colorToken;
	power = state.power;
	upgradeLevel = state.upgradeLevel;
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
		playgroundAdd();
	}

	if(current.hyper.status == "enabled"){
		current.hyper.status = "disabled";
		update();
	}

	if (current.playground.show == "hide"){
		$('#shaperino').css('visibility','visible')
		$('#playground').css('visibility','hidden')
	} else if (current.playground.show == "show"){
		$('#shaperino').css('visibility','hidden')
		$('#playground').css('visibility','visible')
		drawPlayground();
	}

	if (current.navigator.show == "hide"){
		$('#shaperino').css('visibility','visible')
		$('#navigator').css('visibility','hidden')
	} else if (current.navigator.show == "show"){
		$('#shaperino').css('visibility','hidden')
		$('#navigator').css('visibility','visible')
		drawNavigator();
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
