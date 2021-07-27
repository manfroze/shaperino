// UPGRADES //

function addUpgrade(item, level){
	addSection("upgrades");
	addSubSection("upgrades", "upgrades")
	if (currentStatus.upgrade[item][level] == "locked") {
		currentStatus.upgrade[item][level] = "unlocked";
		upgradeDraw(item, level);
	} 
	style();
}

function upgradeDraw(item, level){
	levelLabel = level.replace('l','');
	levelSpan = '<span class="level">' + levelLabel + '</span>'
	if (levelLabel == "0"){ levelSpan = "" }

	if(upgrade[item].type == "boost"){
		if(upgrade[item].data[0]){ typeV = upgrade[item].data[0] };
		if(upgrade[item].data[1]){ kindV = upgrade[item].data[1] };
		newValue = formatNumber(power[typeV][kindV] + upgrade[item].amount * upgrade[item].amount);
	} 
	$('#upgrades > .container').append('<div id="' + item + "-" + level + '"class="button large upgrade '+ upgrade[item].type + " " + upgrade[item].data.join(" ") +'"><span class="name">' + upgrade[item].name + '</span>' + levelSpan + '<span class="tag price ' + upgradeLevel[item][level].price[1] + '"><span>' + formatNumber(upgradeLevel[item][level].price[0]) + '</span></span><span class="desc"></span></div>' );
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
			if (counter[upgradeLevel[key][levelKey].price[1]] >= upgradeLevel[key][levelKey].price[0]) {
				buyableStatus(key + "-" + levelKey, "on");
			}
			if (counter[upgradeLevel[key][levelKey].price[1]] <= upgradeLevel[key][levelKey].price[0]) {
				buyableStatus(key + "-" + levelKey, "off");
			}
		});
	});
}

function upgradeBuy(item, level){
	if (counter[upgradeLevel[item][level].price[1]] > upgradeLevel[item][level].price[0] - 1) {
		counter[upgradeLevel[item][level].price[1]] -= upgradeLevel[item][level].price[0];
		upgradeEffect(item);
		currentStatus.upgrade[item][level] = "bought"
		$('#' + item + "-" + level).fadeOut(500).wait(500).remove();
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
	if (upgrade[item].type == "playground") {
		//playgroundAdd();
		toggleAdd('playground');
	}
	if (upgrade[item].type == "navigator") {
		//navigatorAdd();
		toggleAdd('navigator');
	}	
}

// TOGGLES //

toggleNames = ["navigator", "playground"]

function toggleDraw(toggleName){
$("#" + toggleName + "Sec.subsection .container").html('<div id="' + toggleName + 'Toggle" class="button toggle large unlocked ' + toggleName + ' active"><span class="name">'+ toggle[toggleName].name +'</span><span class="tag key" title="you can press ' + toggleName.slice(0,1).toUpperCase() + ' on your keyboard to show/hide the ' + toggleName + '.">' + toggleName.slice(0,1).toUpperCase() + '</span><span class="desc">'+ toggle[toggleName].desc +'</span></div>');
}

function shaperinoToggleDraw(toggleName){
$("#" + toggleName + "Sec.subsection .container").html('<div id="' + toggleName + 'Toggle" class="button toggle large unlocked shaperino active"><div id="shapeClone"></div><span class="name">'+ toggle.shaperino.name +'</span><span class="tag key" title="you can press ' + toggleName.slice(0,1).toUpperCase() + ' on your keyboard to show/hide the ' + toggleName + '.">' + toggleName.slice(0,1).toUpperCase() + '</span><span class="desc">'+ toggle.shaperino.desc +'</span></div>');
}

function toggleAdd(toggleName){
	currentStatus.toggle[toggleName] = "unlocked";
	addSection("toggles");
	addSubSection("toggles", toggleName + "Sec");
	toggleDraw(toggleName);
}

function toggleToggle(toggleName){
	resetPanel();
	$.each(toggleNames, function(k, v){
		if (v != toggleName){
			current[v].show = "hide";
			toggleDraw(v);
			$('#' + v).css('visibility','hidden')
		}
	}) 
	if(currentStatus.toggle[toggleName] == "unlocked"){
		if (current[toggleName].show == "hide"){
			current[toggleName].show = "show";
			$('#shaperino').css('visibility','hidden')
			$('#' + toggleName).css('visibility','visible')
			if (toggleName == "navigator"){drawNavigator();}
			if (toggleName == "playground"){drawPlayground();}
		} else if (current[toggleName].show == "show"){
			current[toggleName].show = "hide";
			$('#shaperino').css('visibility','visible')
			$('#' + toggleName).css('visibility','hidden')
			toggleDraw(toggleName);
		}
		style();
	}
}


// INPUT //

$(document).on("click", ".upgrade.unlocked.buyable", function(e) {
	var target = $(e.currentTarget).attr("id");
	var idlev =	target.split('-')
	upgradeBuy(idlev[0], idlev[1]);
});

