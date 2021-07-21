	$('.' + kindValue + '.sel-main .power .' + powertypeValue + ' span').html(power[powertypeValue][kindValue]);
	$('.' + kindValue + '.sel-charge .power .' + powertypeValue + ' span').html(power[powertypeValue][kindValue] * multi.charge);
	$('.' + kindValue + '.sel-split .power .' + powertypeValue + ' span').html(power[powertypeValue][kindValue] * multi.split);
	$('.' + kindValue + 'sel-main.sel-charge .power .' + powertypeValue + ' span').html(power[powertypeValue][kindValue] + (power[powertypeValue][kindValue] * multi.charge));
	$('.' + kindValue + 'sel-main.sel-split .power .' + powertypeValue + ' span').html(power[powertypeValue][kindValue] + (power[powertypeValue][kindValue] * multi.split));
	$('.' + kindValue + 'sel-charge.sel-split .power .' + powertypeValue + ' span').html((power[powertypeValue][kindValue] * multi.charge) + (power[powertypeValue][kindValue] * multi.split));
	$('.' + kindValue + 'sel-main.sel-charge.sel-split .power .' + powertypeValue + ' span').html(power[powertypeValue][kindValue] + (power.idle.color * multi.charge) + (power[powertypeValue][kindValue] * multi.split));

	$('.color.comp.sel-main .power .' + powertypeValue + ' span').html(power[powertypeValue].color * multi.comp);
	$('.color.comp.sel-charge .power .' + powertypeValue + ' span').html(power[powertypeValue].color * multi.charge * multi.comp);
	$('.color.comp.sel-split .power .' + powertypeValue + ' span').html(power[powertypeValue].color * multi.split * multi.comp);
	$('.color.comp.sel-main.sel-charge .power .' + powertypeValue + ' span').html(power[powertypeValue].color + (power[powertypeValue].color * multi.charge) * multi.comp);
	$('.color.comp.sel-main.sel-split .power .' + powertypeValue + ' span').html(power[powertypeValue].color + (power[powertypeValue].color * multi.split) * multi.comp);
	$('.color.comp.sel-charge.sel-split .power .' + powertypeValue + ' span').html((power.idle.color * multi.charge) + (power[powertypeValue].color * multi.split) * multi.comp);
	$('.color.comp.sel-main.sel-charge.sel-split .power .' + powertypeValue + ' span').html(power[powertypeValue].color + (power.idle.color * multi.charge) + (power[powertypeValue].color * multi.split) * multi.comp);

	$('.charge.sel-charge .power .' + powertypeValue + ' span').html(power[powertypeValue].charge);
	$('.charge.comp.sel-charge .power .' + powertypeValue + ' span').html(power[powertypeValue].charge * multi.comp);
	$('.charge.comp.sel-split .power .' + powertypeValue + ' span').html(power[powertypeValue].charge * multi.comp);
