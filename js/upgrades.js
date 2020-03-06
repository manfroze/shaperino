var upgrade = {
	boostidleshapemain: {
		name: "boost main shape idling",
		type: "boost",
		data: ["idle", "shape", "main"],
		amount: 0.2,
	},
	boostclickshapemain: {
		name: "boost main shape click",
		type: "boost",
		data: ["click", "shape", "main"],
		amount: 0.5,
	},
	boostidleshapecharge: {
		name: "boost charge shape idling",
		type: "boost",
		data: ["idle", "shape", "charge"],
		amount: 0.1,
	},
	boostclickshapecharge: {
		name: "boost charge shape click",
		type: "boost",
		data: ["click", "shape", "charge"],
		amount: 0.1,
	},
	boostidlecolormain: {
		name: "boost main color idling",
		type: "boost",
		data: ["idle", "color", "main"],
		amount: 0.1,
	}
}

var upgradeLevel = {
	boostidleshapemain: {
		l1: {
			unlock: [1000, "rhombus"],
			price: [200, "red"],
			status: "locked",
		},
		l2: {
			unlock: [200, "white"],
			price: [500, "blue"],
			status: "locked",
		},
		l3: {
			unlock: [10000, "circle"],
			price: [1000, "bottom"],
			status: "locked",
		},		
	},

	boostidleshapecharge: {
		l1: {
			unlock: [1000, "circle"],
			price: [250, "yellow"],
			status: "locked",
		},	
	},

	boostclickshapemain: {
		l1: {
			unlock: [1000, "white"],
			price: [3000, "black"],
			status: "locked",
		},
		l2: {
			unlock: [2000, "square"],
			price: [1500, "left"],
			status: "locked",
		},
		l3: {
			unlock: [1500, "yellow"],
			price: [2500, "yellow"],
			status: "locked",
		},
	},
	boostclickshapecharge: {
		l1: {
			unlock: [2000, "white"],
			price: [700, "bottom"],
			status: "locked",
		},	
	},
	boostidlecolormain: {
		l1: {
			unlock: [2000, "white"],
			price: [700, "bottom"],
			status: "locked",
		},	
	},
}

function addUpgrade(item, level){
	addSection("upgrades");
	addSubSection("upgrades", "upgrades")
	if (upgradeLevel[item][level].status == "locked") {
		upgradeLevel[item][level].status = "unlocked"
		$('#upgrades > .container').append('<div id="' + item + "-" + level + '"class="upgrade '+ upgrade[item].type + " " + upgrade[item].data.join(" ") +'"><span>' + upgrade[item].name + '</span><div class="pricetag ' + upgradeLevel[item][level].price[1] + '">' + upgradeLevel[item][level].price[0] + '</div></div>' );
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
		boost(upgrade[item].data[0], upgrade[item].data[1], upgrade[item].data[2], upgrade[item].amount);
	}	
}

// INPUT //

$(document).on("click", ".upgrade.unlocked.buyable", function(e) {
	var target = $(e.currentTarget).attr("id");
	var idlev =	target.split('-')
	upgradeBuy(idlev[0], idlev[1]);
});

