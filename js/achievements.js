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
$("#catalogue.panel .content").empty();
		$.each(achievement, function(k, v) {
			$("#achievements.panel .content").append('<div id="' + k + '" class="achievement tile" title="' + achievement[k].expl + '"><div class="name"><span>' + achievement[k].name + '</span><div class="expl"><span>' + achievement[k].expl + '</span></div></div></div>');
			$("#achievements.panel #" + k).addClass("locked");
			if (achievementStatus[k] == "unlocked") {
				//$("#achievements.panel #" + k + " span").html(achievement[k].name);
				$("#achievements.panel #" + k).removeClass("locked").addClass("unlocked");
			}
		})

}