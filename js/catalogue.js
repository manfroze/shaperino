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
}
