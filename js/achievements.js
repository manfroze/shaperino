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
}