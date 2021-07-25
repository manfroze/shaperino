function catalogueCheck(){
	$.each(catalogue, function(name, value){
		if (!value.split && current.main.shape == value.main.shape && current.main.color == value.main.color && current.charge.shape == value.charge.shape && current.charge.color == value.charge.color && current.charge.position == value.charge.position && catalogueStatus[name] == "locked"){
			catalogueUnlock(name);
		}
		if(value.split && current.main.shape == value.main.shape && current.main.color == value.main.color && current.charge.shape == value.charge.shape && current.charge.color == value.charge.color && current.charge.position == value.charge.position && catalogueStatus[name] == "locked" && current.split.shape == value.split.shape && current.split.color == value.split.color && current.split.position == value.split.position ){
			catalogueUnlock(name);
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
		$("#cataloguePanel.panel .content").append('<div id="' + id + '" title="' + catalogue[id].name + '" class="catalogue tile"><div class="name"><span>' + catalogue[id].name + '</span></div></div>');
		$("#cataloguePanel.panel #" + id).addClass("locked");
		if (catalogueStatus[id] == "unlocked") {
			$("#cataloguePanel.panel #" + id).removeClass("locked").addClass("unlocked");
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