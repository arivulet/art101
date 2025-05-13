// index.js - modify some stuff on our page
// Author: River Kinley
// Date: 11 May 2025

// declare an button for a copyable object
$(".minor-section").append("<button>Make Special</button>");

// on click, toggle special class onto the parent of the button
$(".minor-section button").click(function () {
	$(this).parent().toggleClass("special");
});
