function addUpgrade(item, level){
	addSection("upgrades");
	addSubSection("upgrades", "upgrades")
	if (upgradeLevel[item][level].status == "locked") {
		upgradeLevel[item][level].status = "unlocked";
		upgradeDraw(item, level);
	} 
	style();
}

function upgradeDraw(item, level){
	if(upgrade[item].type == "boost"){
		if(upgrade[item].data[0]){ typeV = upgrade[item].data[0] };
		if(upgrade[item].data[1]){ kindV = upgrade[item].data[1] };
		newValue = formatNumber(power[typeV][kindV] + upgrade[item].amount * upgrade[item].amount);
	} 
	$('#upgrades > .container').append('<div id="' + item + "-" + level + '"class="button large upgrade '+ upgrade[item].type + " " + upgrade[item].data.join(" ") +'"><span class="name">' + upgrade[item].name + '</span><span class="level">' + level.replace('l','') + '</span><div class="pricetag ' + upgradeLevel[item][level].price[1] + '"><span>' + upgradeLevel[item][level].price[0] + '</span></div><span class="desc"></span></div>' );
	$('#' + item + "-" + level + '').removeClass("locked").addClass("unlocked");
	if(upgrade[item].type == "boost"){
		$('#' + item + "-" + level + ' .desc').html('boost ' + kindV + " " + typeV + ' power to ' + newValue)
	} else {
		$('#' + item + "-" + level + ' .desc').html(upgrade[item].desc)
	}
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
	writePowerCounters();
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

