// index.js - manipulate an inputted string
// Author: River Kinley
// Date: 4 May 2025

function manipulatorinator() {
	let userName = prompt(
		"Please enter your first and last name!",
		"Percy Jackson"
	);
	//split into array
	let nameArray = userName.split("");
	//sort the array
	let sortedArray = nameArray.sort();
	//convert array into str
	let sortedName = sortedArray.join("");
	return sortedName;
}

function displayName() {
	const sortedName = manipulatorinator();
	if (sortedName) {
		document.getElementById("output").innerHTML =
			"Your sorted name is:" + sortedName + " <br>";
	}
}
