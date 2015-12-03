// $(function() {
//         var $elem = $('#message');
// $('#my-button').click(
// 		function (e) {
//   $('html, body').animate({scrollTop: $elem.height()}, 8000);
// 		}
// 	);
// });

$("#my-button, .my-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#footer").offset().top},
        4000);
});
// $(document).ready(function(){
//      $('body,html').animate({scrollTop: 7000}, 9000);
// });
// $(window).scroll(function() {
//     if ($(this).scrollTop() > 6100) {
//         $('body,html').animate({scrollTop: 0}, 500);
//     }
// });

//backup google fonts
WebFontConfig = {
  google: { families: [ 'Lato:400,100,300,700,900:latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

//click images to see larger view
jQuery.fn.center = function () {
this.css("bottom","15%");
this.css("left","20%");
return this;
}

$(document).ready(function() {
	$("#thumbnail img").click(function(e){

		$("#background").css({"opacity" : "0.7"})
						.fadeIn("slow");

		$("#large").html("<img src='"+$(this).parent().attr("href")+"' alt='"+$(this).attr("alt")+"' /><br/>"+$(this).attr("rel")+"")
				   .center()
				   .fadeIn("slow");

		return false;
	});

	$(document).keypress(function(e){
		if(e.keyCode==27){
			$("#background").fadeOut("slow");
			$("#large").fadeOut("slow");
		}
	});

	$("#background").click(function(){
		$("#background").fadeOut("slow");
		$("#large").fadeOut("slow");
	});

	$("#large").click(function(){
		$("#background").fadeOut("slow");
		$("#large").fadeOut("slow");
	});

});
