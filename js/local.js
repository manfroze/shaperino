function updateLocalStorage(){
	localStorage.setItem('state', JSON.stringify(state));
}

$( window ).on("unload", function() {
  updateLocalStorage();
});