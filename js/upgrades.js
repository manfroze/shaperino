var upgrade = {
	boostidleshapemain01: {
		name: "activate main shape idling",
		status: "locked",
		unlock: [10, "circle"],
		price: [100, "circle"],
		type: "boost",
		boost: ["idle", "shape", "main", 0.1]
	},
	boostclickshapemain01: {
		name: "boost main shape click power",
		status: "locked",
		unlock: [10, "square"],
		price: [100, "square"],
		type: "boost",
		boost: ["click", "shape", "main", 0.5]
	}
}

function addUpgrade(item){
	addSection("upgrades");
	addSubSection("upgrades", "upgrades")
	if (upgrade[item].status == "locked") {
		upgrade[item].status = "active"
		$('#upgrades > .container').append('<div id="' + item + '"class="upgrade"><span>' + upgrade[item].name + '</span><div class="pricetag ' + upgrade[item].price[1] + '">' + upgrade[item].price[0] + '</div></div>' );
		$('#' + item + '').removeClass("locked").addClass("unlocked");
	}
	style();
}


function upgradeUnlock(){
	$.each(upgrade, function(key, value) {
		if (counter[value.unlock[1]] > value.unlock[0] - 1) {
			addUpgrade(key);
		}
		if (counter[value.price[1]] > value.price[0] - 1) {
			buyableStatus(key, "on");
		}
		if (counter[value.price[1]] < value.price[0] - 1) {
			buyableStatus(key, "off");
		}
	});
}

function upgradeBuy(item){
	if (counter[upgrade[item].price[1]] > upgrade[item].price[0] - 1) {
		counter[upgrade[item].price[1]] -= upgrade[item].price[0];
		upgradeEffect(item);
		$('#' + item + '').remove();
	}	
}

function upgradeEffect(item){
	if (upgrade[item].type == "boost") {
		if (upgrade[item].boost[0] == "click") {
			clickBoost(upgrade[item].boost[1], upgrade[item].boost[2], upgrade[item].boost[3]);
		}
		if (upgrade[item].boost[0] == "idle") {
			idleBoost(upgrade[item].boost[1], upgrade[item].boost[2], upgrade[item].boost[3]);
		}
	}	
}


function idleBoost(kind, mode, amount){
	idlePower[kind][mode] +=amount;
}

function clickBoost(kind, mode, amount){
	clickPower[kind][mode] +=amount;
}

// INPUT //

$(document).on("click", ".upgrade.unlocked.buyable", function(e) {
	var target = $(e.currentTarget).attr("id");
	upgradeBuy(target);
});

