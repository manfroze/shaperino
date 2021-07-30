var cAdv;
var cSce;
var scene = {
	lightred:{
		name: "dating",
		start: {
			character: "05",
			backdrop: "01",
			step: {
				begin: {
					type: "dialogue",
					text: "A pretty girl stands in front of you.",
					options: ["Hello there.", "How are you?"],
					destinations: ["hello", "how"]
				},
				hello: {
					type: "dialogue",
					text: "\u00ABHello!\u00BB",
					options: ["Ok.", "Restart"],
					destinations: ["night", "begin"]
				},
				how: {
					type: "dialogue",
					text: "\u00ABFine, thank you.\u00BB",
					options: ["Back", "Compliment", "Night"],
					destinations: ["begin", "compliment", "night"]
				},
				night: {
					type: "scene",
				},
				compliment: {
					type: "pay",
					token: "primary",
					amount: 100,
					destination: "night"
				}
			}
		},
		night: {
			character: "03",
			backdrop: "02",
			step: {
				begin: {
					type: "dialogue",
					text: "A wizard!",
					options: ["Oh no.", "Magic?"],
					destinations: []
				},
			}
		},
	},
}

function drawCharacter(id){
	if (scene[cAdv][cSce].character){
		$(`#playgroundPanel.${cAdv} .game .character`).css(`background-image`, `url(svg/character-${id}.svg)`);
	}
}

function drawBackdrop(id){
	$(`#playgroundPanel.${cAdv} .game .backdrop`).css(`background-image`, `url(svg/backdrop-${id}.svg)`);
}

function drawStep(id){
	var game = `#playgroundPanel.${current.playground.tab} .game`
	if (scene[cAdv][cSce].step[id].type == "dialogue"){
		$(`${game} .input .text`).empty();
		$(`${game} .input .text`).append(`<span>${scene[cAdv][cSce].step[id].text}</span>`);
		$(`${game} .input .text span`).delay(500).fadeIn();
		$(`${game} .input .options`).empty();
		for (var i = 0; i <= scene[cAdv][cSce].step[id].options.length - 1; i++) {
			dest = scene[cAdv][cSce].step[id].destinations[i];
			if(scene[cAdv][cSce].step[dest]){
			destType = scene[cAdv][cSce].step[dest].type
			} else {destType = ""}
			if(scene[cAdv][cSce].step[dest].type == "pay"){
				payLabel = `<span class="price">${scene[cAdv][cSce].step[dest].amount} ${playground[cAdv][scene[cAdv][cSce].step[dest].token]}</span>`
			} else { payLabel = ""}
			$(`${game} .input .options`).append(`<span class="option ${destType}" id="${dest}">${scene[cAdv][cSce].step[id].options[i]} ${payLabel}</span>`);
			$(`${game} .input .options .option#${dest}`).delay(1000).fadeIn();

		$(`${game} .path`).html(`${scene[cAdv].name}/${[cSce]}/${id}`);
		}
	} else if(scene[cAdv][cSce].step[id].type == "scene"){
		drawScene(id);
	} else if(scene[cAdv][cSce].step[id].type == "pay"){
		if(playgroundToken[cAdv][scene[cAdv][cSce].step[id].token] >= scene[cAdv][cSce].step[id].amount){
			playgroundToken[cAdv][scene[cAdv][cSce].step[id].token] -= scene[cAdv][cSce].step[id].amount;
			drawStep(scene[cAdv][cSce].step[id].destination);
		}
	}
}

function drawScene(id){
	cAdv = current.playground.tab;
	current.playground.scene[cAdv] = id;
	cSce = current.playground.scene[cAdv];
	drawCharacter(scene[cAdv][id].character);
	drawBackdrop(scene[cAdv][id].backdrop);
	drawStep("begin");
}

// INPUT //

$(document).on( "click", "#playground .options span", function(e) {
	var target = $(e.currentTarget).attr("id");
	drawStep(target);
});