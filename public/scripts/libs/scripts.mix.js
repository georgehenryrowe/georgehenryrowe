// document.addEventListener("DOMContentLoaded", function (event) {
@import "modernizr-2.5.3.min.js";
@import "jquery-1.7.1.min.js"
@import "picture.js";
@import "jquery.fitvids.min.js";
// @import "howler.min.js";
@import "instafeed.min.js";
@import "p5.min.js";
@import "p5.collide2d.js";
@import "p5.sound.js";
@import "sketch.js";


// @import "classie.js";
// @import "demo1.js";
// @import "modernizr.custom.js";

/**
 * Add Modernizr test for box sizing
 */
Modernizr.addTest("boxsizing", function () {
	return Modernizr.testAllProps("boxSizing") && (document.documentMode === undefined || document.documentMode > 7);
});

/**
 * Change the width of all elements to account for border-box
 */
$(function () {
	if (!($('html').hasClass('boxsizing'))) {
		$('*').each(function () {
			if ($(this).css('display') == 'block') {
				var f, a, n;
				f = $(this).outerWidth();
				a = $(this).width();
				n = a - (f - a);
				$(this).css('width', n);
			}
		});
	}
});

/**
 * Make images responsive using jQuery Picture
 */
$(function () {
	$('figure.responsive').picture({
		container: $('#content')
	});
});

// var $theCanvas = $("#defaultCanvas0");
if ($('#defaultCanvas0').width() < 200) {
	$('#defaultCanvas0').remove()
}
// });