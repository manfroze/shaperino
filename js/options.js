// SAVE //

$(document).on( "click", "#save.button", function(e) {
	$("body").append('<div class="dialog"><textarea id="exportText"></textarea> <div id="export" class="button small">copy to clipboard</div> </div>');
	$("#exportText").html(btoa(JSON.stringify(state))); 
	$(".dialog").before('<div class="black"></div>');
});

$(document).on( "click", "#export.button", function(e) {
	var copyText = document.getElementById("exportText");
	copyText.select();
	document.execCommand("copy");
});

// LOAD //

$(document).on( "click", "#load.button", function(e) {
	$("body").append('<div class="dialog"><textarea id="importText"></textarea> <div id="import" class="button small">import</div> </div>');
	$(".dialog").before('<div class="black"></div>');
});

$(document).on( "click", "#import.button", function(e) {
	importString = $("#importText").val();
	state = JSON.parse(atob(importString));
	location.reload();
});

// RESET //

function reset(){
	start();
	location.reload();
}


$(document).on( "click", "#reset.button", function(e) {
	$("body").append('<div class="dialog"><span>Are you sure you want to reset? You will lose all of your progress.</span><div id="actuallyReset" class="button small">yes, reset</div> </div>');
	$(".dialog").before('<div class="black"></div>');
});

$(document).on( "click", "#actuallyReset.button", function(e) {
	start();
	location.reload();
});

// DIALOG //

$(document).on( "click", ".black", function(e) {
	$(".dialog").remove();	
	$(".black").remove();	
});