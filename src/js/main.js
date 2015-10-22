$(function() {
	// the element inside of which we want to scroll
        var $elem = $('#message');
$('.my-button').click(
		function (e) {
  $('html, body').animate({scrollTop: $elem.height()}, 3000);
		}
	);
});
