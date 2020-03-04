$( document ).on( "click", "#shaperino", function(e) {

	$("#shaperino").animate( {scale: 0.80}, 100);
	setTimeout(() => { $("#shaperino").animate( {scale: 1}, 100); }, 0);

});

