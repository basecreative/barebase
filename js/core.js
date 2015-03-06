// All required, don't remove or uncomment
// @codekit-prepend "vendor/modernizr.js";
// @codekit-prepend "vendor/picturefill.min.js";


// Respond - Uncomment this if you want extra support for media queries
// yepnope({
// 	test : Modernizr.mq('only all'),
// 	nope : ['/wp-content/themes/basecreative/js/vendor/respond.js']
// });






// Form validation (optional)
// @codekit-prepend "vendor/polyfiller.js";

// Swipe slider (optional)
// @codekit-prepend "vendor/swipe.js";



// jQuery stuff
$(function(){


	// Acvtivate form validation (polyfiller.js)
	webshim.activeLang('en-GB');
 	webshim.polyfill('forms forms-ext');



});