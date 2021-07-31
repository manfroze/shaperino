var cAdv;
var cSce;
var game;
var scene = {
	lightred:{
		name: "dating",
		girl: {
			character: "blondegirl",
			objects: "buildings-dating",
			backdrop: "morning",
			step: {
				begin: {
					type: "dialogue",
					text: "A pretty girl stands in front of you.",
					options: ["Hello there.", "Heyyy B)"],
					destinations: ["hello", "heyyy"]
				},
				hello: {
					type: "dialogue",
					text: "\u00ABHello!\u00BB",
					options: ["Huh... hi.", "How's things?"],
					destinations: ["huh", "howsthings"]
				},
				huh: {
					type: "dialogue",
					text: "\u00ABYou already greeted me...\u00BB",
					options: ["(Ouch.)"],
					destinations: ["begin"]					
				},
				howsthings: {
					type: "dialogue",
					text: "\u00ABI'm pretty fine, thank you.\u00BB",
					options: ["Me too. Bye!", "So, are you gonna be at that party?"],
					destinations: ["bye", "thatparty"]					
				},
				bye: {
					type: "dialogue",
					text: "\u00AB...ok, bye...?\u00BB",
					options: ["(Damn.)"],
					destinations: ["begin"]					
				},
				thatparty: {
					type: "pay",
					token: "secondary",
					cost: 100,
					destination: "party"				
				},
				party: {
					type: "dialogue",
					text: "\u00ABHuh, yeah, tonight, sure! You gonna be there?\u00BB",
					options: ["Yep!"],
					destinations: ["begin"]				
				},
				heyyy: {
					type: "dialogue",
					text: "\u00ABHey...\u00BB",
					options: ["You're hot.", "Wanna... bang?", "Nothing, sorry."],
					destinations: ["hot", "bang", "begin"]
				},
				hot: {
					type: "pay",
					token: "primary",
					cost: 25,
					destination: "yourehot"				
				},
				bang: {
					type: "pay",
					token: "primary",
					cost: 100,
					destination: "wannabang"				
				},
				yourehot: {
					type: "dialogue",
					text: "\u00ABYeah, I know. Not interested, bud.\u00BB",
					options: ["Ok, sorry..."],
					destinations: ["begin"]
				},
				wannabang: {
					type: "dialogue",
					text: "\u00ABGross.\u00BB",
					options: ["(What am I doing???)"],
					destinations: ["buildings"]
				},
				buildings: {
					type: "dialogue",
					subtype: "bye",
					text: "Well... she's gone for now. Where do you want to go?",
					options: ["The library.", "The cafeteria."],
					destinations: ["library", "cafeteria"]
				},
				cafeteria: {
					type: "scene",
					step: "begin"
				},
				library: {
					type: "scene",
					step: "begin"
				}
			}
		},
		outside: {
			objects: "buildings-dating",
			backdrop: "morning",
			character: "none",
				step: {
					begin: {
						type: "dialogue",
						text: "Where do you want to go?",
						options: ["The library.", "The cafeteria.", "Look for that girl."],
						destinations: ["library", "cafeteria", "girl"]
					},
					cafeteria: {
						type: "scene",
						step: "begin"
					},
					library: {
						type: "scene",
						step: "begin"
					},
					girl: {
						type: "scene",
						step: "begin"
				}
			},
		},
		library: {
			objects: "library",
			backdrop: "library",
			character: "none",
			step: {
				begin: {
					type: "dialogue",
					text: "What section?",
					options: ["Love and dating.", "Colors.", "Gems.", "Exit."],
					destinations: ["love", "colors", "gems", "outside"]
				},
				colors: {
					type: "scene",
					step: "begin"
				},
				love: {
					type: "scene",
					step: "begin"
				},
				gems: {
					type: "scene",
					step: "begin"
				},
				outside: {
					type: "scene",
					step: "begin"
				},
			},
		},
		gems: {
			objects: "gems",
			backdrop: "library",
			character: "none",
				step: {
					begin: {
						type: "dialogue",
						text: "A strange book about gems.",
						options: ["Buy 1 Ruby.", "Buy 1 Quartz.", "Go back."],
						destinations: ["ruby", "quartz", "library"]
					},
					quartz: {
						type: "pay",
						token: "tertiary",
						cost: 1000,
						product: "final",
						amount: 1,
						destination: "gems"	
					},
					ruby: {
						type: "pay",
						token: "tertiary",
						cost: 1000,
						product: "final",
						amount: 1,
						destination: "gems"	
					},
					library: {
						type: "scene",
						step: "begin"
				}
			},
		},
		colors: {
			objects: "colors",
			backdrop: "library",
			character: "none",
				step: {
					begin: {
						type: "dialogue",
						text: "This is about the speed of colors...?",
						options: ["Buy a boost upgrade.", "Go back."],
						destinations: ["upgrade", "library"]
					},
					upgrade: {
						type: "pay",
						token: "secondary",
						cost: 10000,
						product: "upgrade",
						amount: 1,
						destination: "library"	
					},
					library: {
						type: "scene",
						step: "begin"
				}
			},
		},
		love: {
			objects: "love",
			backdrop: "library",
			character: "none",
				step: {
					begin: {
						type: "dialogue",
						text: "There's no useful insight on love in these old books. Maybe you should try talking with a friend.",
						options: ["Go back."],
						destinations: ["library"]
					},
					library: {
						type: "scene",
						step: "begin"
				}
			},
		},
		cafeteria: {
			objects: "cafeteria-full",
			backdrop: "cafeteria",
			character: "none",
			step: {
				begin: {
					type: "dialogue",
					character: "none",
					text: "Where to?",
					options: ["Your friend.", "The bar.", "Exit."],
					destinations: ["friend", "bar", "outside"]
				},
				friend: {
					type: "scene",
					step: "begin"
				},
				bar: {
					type: "scene",
					step: "begin"
				},
				outside: {
					type: "scene",
					step: "begin"
				}
			},

		},
		friend: {
			backdrop: "cafeteria-guy",
			character: "buddo",
			objects: "cafeteria-guy",
			step: {
				begin: {
					type: "dialogue",
					text: "Hey buddy! How's things?",
					options: ["I'm great!", "Yeah, about that..."],
					destinations: ["great", "aboutthat"]
				},
				great: {
					type: "dialogue",
					text: "Yeah! Pumped for the party tonight?",
					options: ["Sure! Gotta go now, see you there!"],
					destinations: ["cafeteria"]
				},
				aboutthat: {
					type: "dialogue",
					text: "Huh! What's up?",
					options: ["Don't worry. See ya.", "I like a girl and I'm a moron."],
					destinations: ["cafeteria", "likeagirl"]
				},
				likeagirl: {
					type: "dialogue",
					text: "You've been gross and she rejected you, right?",
					options: ["Yeah."],
					destinations: ["wisdom"]
				},
				wisdom: {
					type: "dialogue",
					text: "Maybe try being less horny and gain more confidence to talk the real talk, you know?",
					options: ["Gain insight", "Go back"],
					destinations: ["friend_insight", "cafeteria"]
				},
				cafeteria: {
					type: "scene",
					step: "begin"
				},
				friend_insight: {
					type: "pay",
					token: "primary",
					cost: 100,
					product: "actor",
					amount: 1,
					destination: "cafeteria"				
				},
			}
		},
		bar: {
			backdrop: "cafeteria-bar",
			character: "squeezer",
			objects: "cafeteria-bar",
			step:{
				begin: {
					type: "dialogue",
					text: "Hiya! What can I serve you?",
					options: ["A beer, please.", "Changed my mind."],
					destinations: ["beer", "cafeteria"]
				},
				beer: {
					type: "dialogue",
					text: "No more beers, I'm afraid. Want some juice?",
					options: [`I already had some juice, thank you.`],
					destinations: ["cafeteria"]
				},
				cafeteria: {
					type: "scene",
					step: "begin"
				},
			}
		},
	},
}

function drawCharacter(id){
	$(`${game} .character`).hide();
	$(`${game} .character`).css(`background-image`, `url(svg/character-${id}.svg)`);
	$(`${game} .character`).delay(300).fadeIn();
}

function drawObjects(id){
	$(`${game} .objects`).hide();
	$(`${game} .objects`).css(`background-image`, `url(svg/objects-${id}.svg)`);
	$(`${game} .objects`).delay(200).fadeIn();
}

function drawBackdrop(id){
	$(`${game} .backdrop`).hide();
	$(`${game} .backdrop`).css(`background-image`, `url(svg/backdrop-${id}.svg)`);
	$(`${game} .backdrop`).delay(100).fadeIn();
}

function drawStep(id){
	game = `#playgroundPanel.${current.playground.tab} .game`
	$(`${game} .input`).delay(500).fadeIn();

	// DIALOGUE //

	if (scene[cAdv][cSce].step[id].type == "dialogue"){
		if (scene[cAdv][cSce].step[id].subtype && scene[cAdv][cSce].step[id].subtype == "bye"){
			$(`${game} .character`).delay(300).fadeOut();
		}
		$(`${game} .input .text`).empty();
		$(`${game} .input .text`).append(`<span>${scene[cAdv][cSce].step[id].text}</span>`);
		$(`${game} .input .text span`).delay(700).fadeIn();
		$(`${game} .input .options`).empty();
		for (var i = 0; i <= scene[cAdv][cSce].step[id].options.length - 1; i++) {
			dest = scene[cAdv][cSce].step[id].destinations[i];
			if(scene[cAdv][cSce].step[dest]){
				destType = scene[cAdv][cSce].step[dest].type
			} else {destType = ""}
			if(scene[cAdv][cSce].step[dest].type == "pay"){
				payLabel = `<span class="price">${formatNumber(scene[cAdv][cSce].step[dest].cost)} ${playground[cAdv][scene[cAdv][cSce].step[dest].token]}</span>`
			} else { payLabel = ""}
			$(`${game} .input .options`).append(`<span class="option enabled ${destType}" id="${dest}">${scene[cAdv][cSce].step[id].options[i]} ${payLabel}</span>`);
			$(`${game} .input .options .option#${dest}`).delay(1000).fadeIn();

			if ((scene[cAdv][cSce].step[dest].type == "pay") && (playgroundToken[cAdv][scene[cAdv][cSce].step[dest].token] >= scene[cAdv][cSce].step[dest].cost)){
				$(`${game} .input .option.pay#${dest}`).addClass("enabled").removeClass("disabled");
			} else {
				$(`${game} .input .option.pay#${dest}`).addClass("disabled").removeClass("enabled");
			}

			if ((scene[cAdv][cSce].step[dest].type == "pay") && (playgroundUnlock[cAdv][dest] == "bought") && scene[cAdv][cSce].step[dest].product  ){
				$(`${game} .input .option.pay#${dest}`).addClass("disabled").removeClass("enabled");
			}
			$(`${game} .path`).html(`${scene[cAdv].name}/${[cSce]}/${id}`);
		}

	// SCENE //

	} else if(scene[cAdv][cSce].step[id].type == "scene"){
		drawScene(id, scene[cAdv][cSce].step[id].step);

	// PAY //

	} else if(scene[cAdv][cSce].step[id].type == "pay"){
		if(playgroundToken[cAdv][scene[cAdv][cSce].step[id].token] >= scene[cAdv][cSce].step[id].cost){
			playgroundToken[cAdv][scene[cAdv][cSce].step[id].token] -= scene[cAdv][cSce].step[id].cost;
			if(scene[cAdv][cSce].step[id].product && playgroundUnlock[cAdv][id] == "buyable"){
			playgroundToken[cAdv][scene[cAdv][cSce].step[id].product] += scene[cAdv][cSce].step[id].amount;
			playgroundUnlock[cAdv][id] = "bought";
			}
			drawStep(scene[cAdv][cSce].step[id].destination);
		}
	} 
}

function drawScene(id, step){
	game = `#playgroundPanel.${current.playground.tab} .game`
	cAdv = current.playground.tab;
	current.playground.scene[cAdv] = id;
	cSce = id;
	if (scene[cAdv][cSce].character){drawCharacter(scene[cAdv][cSce].character)};
	if (scene[cAdv][cSce].objects){drawObjects(scene[cAdv][cSce].objects)};
	if (scene[cAdv][cSce].backdrop){drawBackdrop(scene[cAdv][cSce].backdrop)};
	$(`${game} .input`).hide();
	drawStep(step);
}

// INPUT //

$(document).on( "click", "#playground .options .option.enabled", function(e) {
	var target = $(e.currentTarget).attr("id");
	drawStep(target);
});