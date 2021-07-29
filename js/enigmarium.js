function drawEnigmarium(){
	$('#shaperino').css('visibility','hidden');
	$('#enigmarium').show();
	shaperinoToggleDraw('enigmarium');
	cloner('shapeClone');
	$('#enigmarium').html('<div id="tabbar"></div><div id="enigmariumPanel"></div>');
	$.each(shape, function(i, shape){
		$('#enigmarium #tabbar').append('<div class="tab inactive" id="'+ shape +'-tab"></div>');
		$('#' + shape + "-tab.inactive").css('background-image', 'url("svg/' + shape + '-empty.svg")');
		$('#' + shape + "-tab.active").css('background-image', 'url("svg/' + shape + '.svg")');
	});
	enigmariumTab(current.enigmarium.tab);
}

function enigmariumTab(sha){
	current.enigmarium.tab = sha;
	$.each(shape, function(key, s){
		$('.tab#'+ s +'-tab').removeClass("active").addClass("inactive").css('background-image', 'url("svg/' + s + '-empty.svg")');
	});
	$('#' + sha + "-tab").removeClass("inactive").addClass("active").css('background-image', 'url("svg/' + sha + '.svg")');
	//playgroundPanel(colorName);
}

// INPUT //

$(document).on( "click", "#enigmarium .tab.inactive", function(e) {
	var target = $(e.currentTarget).attr("id").slice(0, -4);
	enigmariumTab(target);
});

$(document).keydown(function(event) {
	if (event.key === 'e') {
		toggleToggle('enigmarium');
	} });

$(document).on( "click", "#enigmariumToggle", function(e) {
	toggleToggle('enigmarium');
	style();
});