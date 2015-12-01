$(function() {
	// the element inside of which we want to scroll
        var $elem = $('#message');
$('.my-button').click(
		function (e) {
  $('html, body').animate({scrollTop: $elem.height()}, 3000);
		}
	);
});
// $(document).ready(function(){
//     $("div a").mouseenter(
//       function(){$(this).siblings("p:first").addClass("active");},
//     $("div a").mouseleave(
//       function(){$(this).siblings("p:first").removeClass("active");}
//     )
//   );
// });
