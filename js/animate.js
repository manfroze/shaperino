$( document ).on( "click", "#shaperino", _.throttle(animate, 200) );

function animate(){

	$("#shaperino #main-canvas svg").animate( {scale: 0.80}, 100);
	setTimeout(() => { $("#shaperino #main-canvas svg").animate( {scale: 1}, 100); }, 0);

	$("#shaperino #charge-canvas svg").animate( {scale: 0.60}, 100);
	setTimeout(() => { $("#shaperino #charge-canvas svg").animate( {scale: 1}, 100); }, 0);

	$("#shaperino #split-canvas svg").animate( {scale: 0.60}, 100);
	setTimeout(() => { $("#shaperino #split-canvas svg").animate( {scale: 1}, 100); }, 0);

	$("#shaperino #hyper-canvas svg").animate( {scale: 0.70}, 100);
	setTimeout(() => { $("#shaperino #hyper-canvas svg").animate( {scale: 1}, 100); }, 0);


}