function achievementCheck(){
	$.each(achievement, function(k, v) {
		$.each(v, function(key, value) {

			// COUNTERS //

			if (counter[v.data] >= v.amount && v.status == "locked" && v.type == "counter") {
				achievementUnlock(k);
			}

		});
		
	});
}


function achievementUnlock(value){

	achievement[value].status = "unlocked";

	$("#container").append($('<div class="achievement"><span class="title">' + achievement[value].name + '</span><span class="desc">' + achievement[value].desc + '</span</div>').hide().fadeIn(500).delay(2500).fadeOut(500));

}