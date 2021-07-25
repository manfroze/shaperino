//if (current.wonderbar.status == enabled){
	$('#wonder-canvas').find('svg path').click(function(){
		//alert("ciao");
		setInterval(function(){
			randomShape();
		}, 150) 
	});

//}