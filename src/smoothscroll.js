$(document).ready(function(){
	$('body').hide().fadeIn(1500);
	event.preventDefault();
	event.stopPropagation();
	
	$("#link0").click(function()
	{
		$path=$("#top").offset().top;
		$('html, body').animate({scrollTop:$path},1000);
		event.preventDefault();
		event.stopPropagation();
	});
	$("#link1").click(function()
	{
		$path=$("#top").offset().top;
		$('html, body').animate({scrollTop:$path},1000);
		event.preventDefault();
		event.stopPropagation();
	});
    $("#link2").click(function(){
        $path=$("#aboutMe").offset().top;
        $('html, body').animate({scrollTop:$path},1000);
		event.preventDefault();
		event.stopPropagation();
    });
    $("#link3").click(function(){
        $path=$("#skills").offset().top;
        $('html, body').animate({scrollTop:$path},1000);
		event.preventDefault();
		event.stopPropagation();
    });
    $("#link4").click(function(){
        $path=$("#projects").offset().top;
        $('html, body').animate({scrollTop:$path},1000);
		event.preventDefault();
		event.stopPropagation();
	});
	$("#link5").click(function(){
        $path=$("#misc").offset().top;
        $('html, body').animate({scrollTop:$path},1000);
		event.preventDefault();
		event.stopPropagation();
	});	
	$("#link6").click(function(){
        $path=$("#goals").offset().top;
        $('html, body').animate({scrollTop:$path},1000);
		event.preventDefault();
		event.stopPropagation();
    });		
});