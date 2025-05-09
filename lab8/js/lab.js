// index.js - anon functions
// Author: River Kinley
// Date: 7 May 2025

// Constants

// create an array
let array = [1, 4, 6, 15, 25, 335];

// make function that multiplies the nums by 2
function equl(dig) {
	var result = dig * 2;
	return result;
}

// create anon function to give us final result
var mapres = array.map(function (x) {
	var results = Math.sqrt(x);
	return results;
});

// prints results
console.log("results! :" + mapres);

// Use jQuery to select the element by its ID and set the HTML content
$("#output").html(mapres);
