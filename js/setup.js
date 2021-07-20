$( document ).ready(function() {

	if (localStorage.getItem('counter')) { counter = JSON.parse(localStorage.getItem('counter')) };
	if (localStorage.getItem('current')) { current = JSON.parse(localStorage.getItem('current')) };
	if (localStorage.getItem('items')) { items = JSON.parse(localStorage.getItem('items')) };
	if (localStorage.getItem('power')) { power = JSON.parse(localStorage.getItem('power')) };

	$.each(items, function(item){

		if (items[item].status == "unlocked") {
			drawItem(item, "unlocked");
		};

		if (items[item].status == "active") {
			drawItem(item, "active");
			$('#' + item + ' .pricetag').remove();
		};

		updateSelectors();

	});

	style();

});
