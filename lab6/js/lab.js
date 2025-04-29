// Author: River Kinley
// Date: 28 April 25

//Declare array and obj

const myTransport = ["Bus", "my friend's Prius", "Walking"];

let myMainRide = {
	make: "Adidas",
	model: "Samba",
	color: "Black",
	year: 2024,
	age: function () {
		return 2025 - this.year;
	},
};

document.writeln(
	"The kinds of transport I use are the " + myTransport + ".</br>"
);

document.writeln(
	"My Main Ride: <pre>",
	JSON.stringify(myMainRide, null, "\t"),
	"</pre>"
);
