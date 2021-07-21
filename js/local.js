function updateLocalStorage(){
	localStorage.setItem('counter', JSON.stringify(counter));
	localStorage.setItem('current', JSON.stringify(current));
	localStorage.setItem('items', JSON.stringify(items));
	localStorage.setItem('power', JSON.stringify(power));
	localStorage.setItem('upgradeLevel', JSON.stringify(upgradeLevel));
}


$( window ).on("unload", function() {
  updateLocalStorage();
});