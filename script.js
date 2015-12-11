$(document).ready(
	function(){

	$(".lightbox-link").on("click",function(){
		console.log("you have clicked");
		$(".outer-lightbox").show();
		$(".outer-lightbox").on("click",function(){
			$(".outer-lightbox").hide();
		})

	})	
});