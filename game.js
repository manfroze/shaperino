counter = {

	circle: 0,
	square: 0,
	rhombus: 0,

	top: 0,
	left: 0,
	right: 0,
	bottom: 0,

	black: 0,
	white: 0,
	red: 0,
	yellow: 0,
	blue: 0,

}

power = {

	shape: {
		main: 1,
		charge: 0.5,
		split: 0.1,
	},

	charge: 1,

	color: {
		main: 1,
		charge: 0.4,
		split: 0.2,
	},

}

mult = 0.5;


var currentPowerCounter = {

	circle: 0,
	square: 0,
	rhombus: 0,

	top: 0,
	left: 0,
	right: 0,
	bottom: 0,

	black: 0,
	white: 0,
	red: 0,
	yellow: 0,
	blue: 0,

}

	function updateCounters(){	
		$.each(counter, function(index){
			$("#" + index + " .counter").html(Math.floor(counter[index]));
		});
	}

		function updatePowerCounters(mode, kind){
		currentPowerCounter[current[mode][kind]] += power[kind][mode];
		$("#" + current[mode][kind] + " .power").html(currentPowerCounter[current[mode][kind]]);
		console.log(currentPowerCounter);

	}



	$( "#drawing" ).click(function(e) {

		// SHAPE //

		counter[current.main.shape] +=power.shape.main;
		if (current.charge.status == "enabled") {counter[current.charge.shape] +=power.shape.charge;}
		if (current.split.status == "enabled") {counter[current.split.shape] +=power.shape.split;}

		// CHARGE //

		if (current.charge.status == "enabled") {counter[current.charge.position] +=power.charge;}

		// COLOR //

		counter[current.main.color] +=power.color.main;
		if (current.charge.status == "enabled") {counter[current.charge.color] +=power.color.charge;}
		if (current.split.status == "enabled") {counter[current.split.color] +=power.color.split;}


		// CORNER COMP //

		if (current.charge.type == "corner") {
			$.each(comp.charge[current.charge.position], function(index, value){
				counter[value] +=power.charge*mult;
			});
		}

		// SPLIT COMP //

		if (current.split.status == "enabled") {
			$.each(comp.split[current.charge.position], function(index, value){
				counter[value] +=power.charge*mult;
			});
		}

		// COLOR COMP //

		$.each(comp.color[current.main.color], function(index, value){
			counter[value] +=power.color.main*mult;
		});

		if (current.charge.status == "enabled") {
			$.each(comp.color[current.charge.color], function(index, value){
				counter[value] +=power.color.charge*mult;
			});
		}

		if (current.split.status == "enabled") {
			$.each(comp.color[current.split.color], function(index, value){
				counter[value] +=power.color.split*mult;
			});
		}

		updateCounters();

	});