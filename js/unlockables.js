// ACHIEVEMENTS //

function achievementCheck(){
	$.each(achievement, function(k, v) {
		$.each(v, function(key, value) {
			// COUNTERS //
			if (counter[v.data] >= v.amount && achievementStatus[k] == "locked" && v.type == "counter") {
				achievementUnlock(k);
			}
		});
	});
}

function achievementUnlock(value){
	achievementStatus[value] = "unlocked";
	$("#container").append($('<div class="alert"><span class="title">' + achievement[value].name + '</span><span class="desc">' + achievement[value].desc + '</span></div>').hide().fadeIn(500).delay(2500).fadeOut(500));
	achievementDraw();
}

function achievementDraw(){
	$("#achievement.panel .content").empty();
	$.each(achievement, function(k, v) {
		$("#achievements.panel .content").append('<div id="' + k + '" class="achievement tile" title="' + achievement[k].expl + '"><div class="name"><span>' + achievement[k].name + '</span><div class="expl"><span>' + achievement[k].expl + '</span></div></div></div>');
		$("#achievements.panel #" + k).addClass("locked");
		if (achievementStatus[k] == "unlocked") {
				//$("#achievements.panel #" + k + " span").html(achievement[k].name);
				$("#achievements.panel #" + k).removeClass("locked").addClass("unlocked");
			}
		})

}

activeAchievements = [];

function achievementCount(){
	$.each(achievementStatus, function(index, v){
		if(achievementStatus[index] == "unlocked"){
		if(!activeAchievements.includes(index)){
			activeAchievements.push(index);
		}
	}
	})
	return activeAchievements.length;
}

// CATALOGUE //

function arraysEqual(a, b) {
	if (a === b) return true;
	if (a == null || b == null) return false;
	if (a.length !== b.length) return false;
	for (var i = 0; i < a.length; ++i) {
		if (a[i] !== b[i]) return false;
	}
	return true;
}

function catalogueCheck(){
	$.each(catalogue, function(name, value){
		if(catalogueStatus[name] == "locked"){
			curr = []
			cata = []
			curr.push(current.main.shape, current.main.color);
			if(current.charge.status == "enabled"){curr.push(current.charge.shape, current.charge.color, current.charge.position);}
			if(current.split.status == "enabled"){curr.push(current.split.shape, current.split.color, current.split.position);}
			if(current.hyper.status == "enabled"){curr.push(current.hyper.shape, current.hyper.color);}
			cata.push(value.main.shape, value.main.color);
			if(value.charge){cata.push(value.charge.shape, value.charge.color, value.charge.position);}
			if(value.split){cata.push(value.split.shape, value.split.color, value.split.position);}
			if(value.hyper){cata.push(value.hyper.shape, value.hyper.color);}
			if (arraysEqual(curr, cata)){
				catalogueUnlock(name);
			}
		}
	});
}

function catalogueUnlock(value){
	catalogueStatus[value] = "unlocked";
	$("#container").append($('<div class="alert"><span class="title">' + catalogue[value].name + '</span></div>').hide().fadeIn(500).delay(2500).fadeOut(500));
	catalogueDraw();
}

function catalogueDraw(){
	$("#cataloguePanel.panel .content").empty();
	$.each(catalogue, function(id, value) {
		$("#cataloguePanel.panel .content").append('<div id="' + id + '" class="catalogue tile"><div class="name"><span></span></div></div>');
		$("#cataloguePanel.panel #" + id).addClass("locked");
		if (catalogueStatus[id] == "unlocked") {
			$("#cataloguePanel.panel #" + id).removeClass("locked").addClass("unlocked");
			$("#cataloguePanel.panel #" + id + ' .name span').html(catalogue[id].name);
		}
		$.each(value, function(modeid, v) {
			if(mode.includes(modeid)) {
				$.each(centerPositions, function(index, value){
					if (v.position == index) {
						$.each(value, function(i, v){
							$.each(shape, function(key, sha){
								center[sha].charge[i] = chargeCenter[sha][v]
								center[sha].split[i] = chargeCenter[sha][mirror[v]]
							});
						});
					}
				});
				shapeDraw(SVG(id).size(500, 500).group(), modeid, v.shape, size[modeid], center[v.shape][modeid][0], center[v.shape][modeid][1], colorCode[v.color]);
			}
		})
	})
}

$.each(catalogue, function(id, value) {
	$(document).on( "click", "#cataloguePanel.panel #" + id +'.unlocked', function(e) {
		setCurrent("main", "shape", catalogue[id].main.shape );
		setCurrent("main", "color", catalogue[id].main.color );
		if (catalogue[id].charge) {
			setCurrent("charge", "status", "enabled");
			setCurrent("charge", "position", catalogue[id].charge.position);
			setCurrent("charge", "shape", catalogue[id].charge.shape);
			setCurrent("charge", "color", catalogue[id].charge.color);
		} else if (!catalogue[id].charge) {
			setCurrent("charge", "status", "disabled");
		}
		if (catalogue[id].split) {
			setCurrent("split", "status", "enabled");
			setCurrent("split", "position", catalogue[id].split.position);
			setCurrent("split", "shape", catalogue[id].split.shape);
			setCurrent("split", "color", catalogue[id].split.color);
		} else if (!catalogue[id].split) {
			setCurrent("split", "status", "disabled");
		}
		if (catalogue[id].hyper && current.hyper.status == "enabled") {
			//setCurrent("hyper", "status", "enabled");
			setCurrent("hyper", "shape", catalogue[id].hyper.shape);
			setCurrent("hyper", "color", catalogue[id].hyper.color);
		//} else if (!catalogue[id].hyper) {
		//	setCurrent("hyper", "status", "disabled");
	}
	update();
	resetPanel();
});
});

activeCatalogue = [];

function catalogueCount(){
	$.each(catalogueStatus, function(index, v){
		if(catalogueStatus[index] == "unlocked"){
			if(!activeCatalogue.includes(index)){
				activeCatalogue.push(index);
			} }
		})
	return activeCatalogue.length;
}