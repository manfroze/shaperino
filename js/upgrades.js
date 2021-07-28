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
	$('#upgrades > .container').append('<div id="' + item + "-" + level + '"class="button large upgrade '+ item + " " + upgrade[item].type + " " + upgrade[item].data.join(" ") +'"><span class="name">' + upgrade[item].name + '</span>' + levelSpan + '<span class="tag price ' + upgradeLevel[item][level].price[1] + '"><span>' + formatNumber(upgradeLevel[item][level].price[0]) + '</span></span><span class="desc"></span></div>' );
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
			if (levelValue.unlock && counter[levelValue.unlock[1]] > levelValue.unlock[0]) {
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
	if (upgrade[item].type == "pgboost") {
		boost("idle", "color", upgrade[item].amount);
		boost("idle", "shape", upgrade[item].amount);
		boost("idle", "position", upgrade[item].amount);
	}	
	if (upgrade[item].type == "blazon") {
		addBlazon();
	}
	if (upgrade[item].type == "hyper") {
		hyperAdd();
	}
	if (upgrade[item].type == "toggle") {
		toggleAdd(item);
	}
}

// TOGGLES //

toggleNames = ["navigator", "playground", "enigmarium"]

function toggleDraw(toggleName){
$("#toggles #" + toggleName + "Toggle").html('<span class="name">'+ toggle[toggleName].name +'</span><span class="tag key" title="you can press ' + toggleName.slice(0,1).toUpperCase() + ' on your keyboard to show/hide the ' + toggleName + '.">' + toggleName.slice(0,1).toUpperCase() + '</span><span class="desc">'+ toggle[toggleName].desc +'</span>');
}

function shaperinoToggleDraw(toggleName){
$("#toggles #" + toggleName + "Toggle").html('<div id="shapeClone"></div><span class="name">'+ toggle.shaperino.name +'</span><span class="tag key" title="you can press ' + toggleName.slice(0,1).toUpperCase() + ' on your keyboard to show/hide the ' + toggleName + '.">' + toggleName.slice(0,1).toUpperCase() + '</span><span class="desc">'+ toggle.shaperino.desc +'</span>');
}

function toggleAdd(toggleName){
	currentStatus.toggle[toggleName] = "unlocked";
	addSection("toggles");
	addSubSection("toggles", "toggles");
	$("#toggles.subsection .container").append('<div id="' + toggleName + 'Toggle" class="button toggle large unlocked ' + toggleName + ' active"></div>');
	toggleDraw(toggleName);
}

function toggleToggle(toggleName){

if (toggleName == "playground" || toggleName == "navigator" || toggleName == "enigmarium"){
	$.each(toggleNames, function(k, v){
		if (v != toggleName){
			current[v].show = "hide";
			toggleDraw(v);
			$('#' + v).css('visibility','hidden')
		}
	});	
}
	if(currentStatus.toggle[toggleName] == "unlocked"){
		resetPanel();
		if (current[toggleName].show == "hide"){
			current[toggleName].show = "show";
			$('#' + toggleName).css('visibility','visible')
			if (toggleName == "navigator"){
				$('#shaperino').css('visibility','hidden')
				drawNavigator();
			}
			if (toggleName == "playground"){
				$('#shaperino').css('visibility','hidden')
				drawPlayground();
			}
			if (toggleName == "enigmarium"){
				$('#shaperino').css('visibility','hidden')
				drawEnigmarium();
			}
			if (toggleName == "viewport"){
				viewport();
			}
		} else if (current[toggleName].show == "show"){
			current[toggleName].show = "hide";
			if (toggleName == "playground" || toggleName == "navigator" || toggleName == "enigmarium"){
				$('#shaperino').css('visibility','visible')
				$('#' + toggleName).css('visibility','hidden')
			}
			if (toggleName == "viewport"){
				viewport();
			}
			
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

