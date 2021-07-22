$( document ).on( "click", "#shaperino", _.throttle(animate, 200) );

function animate(){

	$("#shaperino").animate( {scale: 0.80}, 100);
	setTimeout(() => { $("#shaperino").animate( {scale: 1}, 100); }, 0);


}