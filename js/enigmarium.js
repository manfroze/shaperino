function drawEnigmarium(){
	shaperinoToggleDraw('enigmarium');
	cloner('shapeClone');
}

$(document).keydown(function(event) {
	if (event.key === 'e') {
		toggleToggle('enigmarium');
	} });

$(document).on( "click", "#enigmariumToggle", function(e) {
	toggleToggle('enigmarium');
	style();
});