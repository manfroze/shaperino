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
	basic: ["black", "white", "red", "blue", "yellow"],
	composite: ["green", "orange", "violet", "grey", "lightred", "lightblue", "lightyellow", "darkred", "darkblue", "darkyellow", "lightgreen", "lightorange", "lightviolet", "darkgreen", "darkorange", "darkviolet"]
}
const tokens = ["black", "white", "red", "blue", "yellow", "top", "left", "bottom", "right"]
const colorCode = {
	black: "#222222",
	white: "#FFFFFF",
	red: "#FF4329",
	yellow: "#FFD600",
	blue: "#0085FF",
	orange: "#FF9A3D",
	green: "#47E24D",
	violet: "#883BEB",
	grey: "#9F9F9F",
	darkred: "#823525",
	darkyellow: "#CCB152",
	darkblue: "#1A3782",
	lightred: "#FFC2C2",
	lightyellow: "#FCFF81",
	lightblue: "#7CC0FF",
	darkorange: "#825933",
	darkgreen: "#239727",
	darkviolet: "#400072",
	lightorange: "#FFBF5F",
	lightgreen: "#C8FF54",
	lightviolet: "#E64EFF",
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
		$('.item#' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
		$('.pricetag.' + value +'').css('background-image', 'url("svg/' + value + '-token.svg")')
	});
	$.each(positions, function(key, value){
		$('.item#' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
		$('.pricetag.' + value +'').css('background-image', 'url("svg/' + value + '-token.svg")')
	});
	$.each(colors, function(key, value){
		$('.item#' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
		$('.pricetag.' + value +'').css('background-image', 'url("svg/' + value + '.svg")')
	});
	$.each(powertype, function(key, powertype){
		$.each(kind, function(key, kind){
				$('.upgrade.boost.' + powertype +'.' + kind).css('background-image', 'url("svg/boost-' + powertype +'-' + kind + '.svg")')
		});
	});

	$('.upgrade.blazon').css('background-image', 'url("svg/blazon.svg")')
	$('.upgrade.wonderbar').css('background-image', 'url("svg/wonderbar.svg")')
	$('.button.large.hyper').css('background-image', 'url("svg/hyper.svg")')

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

function formatTime(time)
{   
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;
    var ret = "";
    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

