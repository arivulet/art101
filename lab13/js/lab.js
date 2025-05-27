// index.js - we making fizzbuzz
// Author: River Kinley

function fizzbuzzboom() {
	let output = "";

	for (let cur = 1; cur < 201; cur++) {
		// create var to hold the string we can add to
		let out = "";

		// make things to add string out
		if (cur % 3 == 0) {
			out += "Fizz";
		}
		if (cur % 5 == 0) {
			out += "Buzz";
		}
		if (cur % 7 == 0) {
			out += "Boom";
		}

		if (out == "") {
			output += cur + ".<br>";
		} else {
			output += cur + ". " + out + "!<br>";
		}
	}
	$("#output").html(output);
}

// when button click fizz buzz boom
$("#button").click(function () {
	fizzbuzzboom();
});
