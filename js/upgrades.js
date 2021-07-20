const upgrade = {
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

const upgradeLevel = {
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
			unlock: [1000, "right"],
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
			unlock: [1000, "circle"],
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
			unlock: [1000, "top"],
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

function addUpgrade(item, level){
	addSection("upgrades");
	addSubSection("upgrades", "upgrades")
	if (upgradeLevel[item][level].status == "locked") {
		upgradeLevel[item][level].status = "unlocked"
		$('#upgrades > .container').append('<div id="' + item + "-" + level + '"class="button large upgrade '+ upgrade[item].type + " " + upgrade[item].data.join(" ") +'"><span class="name">' + upgrade[item].name + '</span><span class="level">' + level.replace('l','') + '</span><div class="pricetag ' + upgradeLevel[item][level].price[1] + '"><span>' + upgradeLevel[item][level].price[0] + '</span></div></div>' );
		$('#' + item + "-" + level + '').removeClass("locked").addClass("unlocked");
	}
	style();
}

function upgradeUnlock(){
	$.each(upgradeLevel, function(key, value) {
		$.each(value, function(levelKey, levelValue) {
			if (counter[levelValue.unlock[1]] > levelValue.unlock[0]) {
				addUpgrade(key, levelKey);
			}
			if (counter[upgradeLevel[key][levelKey].price[1]] > upgradeLevel[key][levelKey].price[0]) {
				buyableStatus(key + "-" + levelKey, "on");
			}
			if (counter[upgradeLevel[key][levelKey].price[1]] < upgradeLevel[key][levelKey].price[0]) {
				buyableStatus(key + "-" + levelKey, "off");
			}
		});
	});
}

function upgradeBuy(item, level){
	if (counter[upgradeLevel[item][level].price[1]] > upgradeLevel[item][level].price[0] - 1) {
		counter[upgradeLevel[item][level].price[1]] -= upgradeLevel[item][level].price[0];
		upgradeEffect(item);
		upgradeLevel[item][level].status = "bought"
		$('#' + item + "-" + level).hide("slow").remove();
	}	
}

function upgradeEffect(item){
	if (upgrade[item].type == "boost") {
		boost(upgrade[item].data[0], upgrade[item].data[1], upgrade[item].amount);
	}
	if (upgrade[item].type == "blazon") {
		addBlazon();
	}
	if (upgrade[item].type == "hyper") {
		hyperAdd();
	}	
}

// INPUT //

$(document).on("click", ".upgrade.unlocked.buyable", function(e) {
	var target = $(e.currentTarget).attr("id");
	var idlev =	target.split('-')
	upgradeBuy(idlev[0], idlev[1]);
});

