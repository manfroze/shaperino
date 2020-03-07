const shape = ["circle", "square", "rhombus"]
const mode = ["main", "charge", "split"]
const kind = ["shape", "charge", "color"]
const powertype = ["idle", "click"]
const position = {
	side: ["top", "left", "bottom", "right"],
	corner: ["topright", "topleft", "bottomright", "bottomleft"],
	split: ["topbottom", "leftright", "topleftbottomright", "toprightbottomleft"]
}
const color = {
	basic: ["black", "white", "red", "yellow", "blue"],
	composite: ["orange", "green", "violet", "grey", "darkred", "darkyellow", "darkblue", "lightred", "lightyellow", "lightblue", "darkorange", "darkgreen", "darkviolet", "lightorange", "lightgreen", "lightviolet"]
}

const colors = [...color.basic, ...color.composite]
const positions = [...position.side, ...position.corner, , ...position.split]
const chargePositions = [...position.side, ...position.corner]

function rand(name) {
	if (name instanceof Array == true) {
		var randomNumber = Math.floor(Math.random() * name.length);
		return name[randomNumber];
	} 
}

function swap(json){
  var ret = {};
  for(var key in json){
    ret[json[key]] = key;
  }
  return ret;
}

function style(){
	$.each(shape, function(key, value){
		$('.item.preview#' + value +'').css('background-image', 'url("svg/' + value + '-preview.svg")')
		$('.item.unlocked#' + value +'').css('background-image', 'url("svg/' + value + '-unlocked.svg")')
		$('.item.active#' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
		$('.pricetag.' + value +'').css('background-image', 'url("svg/' + value + '-token.svg")')
	});
	$.each(positions, function(key, value){
		$('.item.preview#' + value +'').css('background-image', 'url("svg/' + value + '-preview.svg")')
		$('.item.unlocked#' + value +'').css('background-image', 'url("svg/' + value + '-unlocked.svg")')
		$('.item.active#' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
		$('.pricetag.' + value +'').css('background-image', 'url("svg/' + value + '-token.svg")')
	});
	$.each(colors, function(key, value){
		$('.item.preview#' + value +'').css('background-image', 'url("svg/' + value + '-preview.svg")')
		$('.item.unlocked#' + value +'').css('background-image', 'url("svg/' + value + '-unlocked.svg")')
		$('.item.active#' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
		$('.pricetag.' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
	});
	$.each(powertype, function(key, powertype){
		$.each(kind, function(key, kind){
				$('.upgrade.boost.' + powertype +'.' + kind).css('background-image', 'url("svg/boost-' + powertype +'-' + kind + '.svg")')
		});
	});

	$('.upgrade.blazon').css('background-image', 'url("svg/blazon.svg")')

}

