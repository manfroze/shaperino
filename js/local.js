
function updateLocalStorage(){
	setInterval(function(){ 
	localStorage.setItem('counter', JSON.stringify(counter));
	localStorage.setItem('current', JSON.stringify(current));
	localStorage.setItem('items', JSON.stringify(items));
	localStorage.setItem('power', JSON.stringify(power));

	}, 1000);
}

updateLocalStorage();

