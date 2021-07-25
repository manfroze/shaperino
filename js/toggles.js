toggleNames = ["navigator", "playground"]

function toggleDraw(toggleName){
$("#" + toggleName + "Sec.subsection .container").html('<div id="' + toggleName + 'Toggle" class="button toggle large unlocked ' + toggleName + ' active"><span class="name">'+ toggle[toggleName].name +'</span><span class="tag key" title="you can press ' + toggleName.slice(0,1).toUpperCase() + ' on your keyboard to show/hide the ' + toggleName + '.">' + toggleName.slice(0,1).toUpperCase() + '</span><span class="desc">'+ toggle[toggleName].desc +'</span></div>');
}

function shaperinoToggleDraw(toggleName){
$("#" + toggleName + "Sec.subsection .container").html('<div id="' + toggleName + 'Toggle" class="button toggle large unlocked shaperino active"><div id="shapeClone"></div><span class="name">'+ toggle.shaperino.name +'</span><span class="tag key" title="you can press ' + toggleName.slice(0,1).toUpperCase() + ' on your keyboard to show/hide the ' + toggleName + '.">' + toggleName.slice(0,1).toUpperCase() + '</span><span class="desc">'+ toggle.shaperino.desc +'</span></div>');
}

function toggleAdd(toggleName){
	toggleStatus[toggleName] = "unlocked";
	addSection("toggles");
	addSubSection("toggles", toggleName + "Sec");
	toggleDraw(toggleName);
}

function toggleToggle(toggleName){
	resetPanel();
	$.each(toggleNames, function(k, v){
		if (v != toggleName){
			current[v].show = "hide";
			toggleDraw(v);
			$('#' + v).css('visibility','hidden')
		}
	}) 
	if(toggleStatus[toggleName] == "unlocked"){
		if (current[toggleName].show == "hide"){
			current[toggleName].show = "show";
			$('#shaperino').css('visibility','hidden')
			$('#' + toggleName).css('visibility','visible')
			if (toggleName == "navigator"){drawNavigator();}
			if (toggleName == "playground"){drawPlayground();}
		} else if (current[toggleName].show == "show"){
			current[toggleName].show = "hide";
			$('#shaperino').css('visibility','visible')
			$('#' + toggleName).css('visibility','hidden')
			toggleDraw(toggleName);
		}
		style();
	}
}
