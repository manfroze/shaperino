const shape = ["circle", "square", "rhombus", "cross", "octagon"]
const mode = ["main", "hyper", "charge", "split"]
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
const tokens = [shape, ...color.basic, ...position.side]

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
		$('.item.unlocked#' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
		$('.item.active#' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
		$('.pricetag.' + value +'').css('background-image', 'url("svg/' + value + '-token.svg")')
	});
	$.each(positions, function(key, value){
		$('.item.preview#' + value +'').css('background-image', 'url("svg/' + value + '-preview.svg")')
		$('.item.unlocked#' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
		$('.item.active#' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
		$('.pricetag.' + value +'').css('background-image', 'url("svg/' + value + '-token.svg")')
	});
	$.each(colors, function(key, value){
		$('.item.preview#' + value +'').css('background-image', 'url("svg/' + value + '-preview.svg")')
		$('.item.unlocked#' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
		$('.item.active#' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
		$('.pricetag.' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
	});
	$.each(powertype, function(key, powertype){
		$.each(kind, function(key, kind){
				$('.upgrade.boost.' + powertype +'.' + kind).css('background-image', 'url("svg/boost-' + powertype +'-' + kind + '.svg")')
		});
	});

	$('.upgrade.blazon').css('background-image', 'url("svg/blazon.svg")')
	$('.upgrade.wonderbar').css('background-image', 'url("svg/wonderbar.svg")')

}

function prettifySub(number) {
	number = parseFloat(number.toFixed(3));
	if (number >= 1000) number = 999;
	number = number.toString();
	var hasDecimal = number.split('.');
	if (typeof hasDecimal[1] === 'undefined' || hasDecimal[0].length >= 3) return number.substring(0, 3);
	return number.substring(0, 4);
}

function formatNumber(number) {
	var numberTmp = number;
	number = Math.round(number * 1000000) / 1000000;
	if (!isFinite(number)) return "Infinite";
	if (number >= 0 && number < 10000) return Math.floor(number);
	if (number === 0) {
		return prettifySub(0);
	}
	var base = Math.floor(Math.log(number) / Math.log(1000));
	if (base <= 0) return prettifySub(number);
	number /= Math.pow(1000, base);

		var suffices = [
			'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'Ud',
			'Dd', 'Td', 'Qad', 'Qid', 'Sxd', 'Spd', 'Od', 'Nd', 'V', 'Uv', 'Dv',
			'Tv', 'Qav', 'Qiv', 'Sxv', 'Spv', 'Ov', 'Nv', 'Tt'
		];
		var suffix;
		if ((base <= suffices.length && base > 0)) {
			suffix = suffices[base - 1];
		}
		else {
			var exponent = parseFloat(numberTmp).toExponential(2);
			exponent = exponent.replace('+', '');
			return exponent;
		}

		return prettifySub(number) + suffix;
} 

