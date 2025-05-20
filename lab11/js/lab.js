// index.js - create sort and anagram, and detect buttons to use dat jawns
// Author: River Kinley
// Date: 19 May 2025

// on click of button, copy text, and sort

// on click of button, copy text, and sort

function sortString(inputString) {
	// We have to convert our string to an array and back again to sort it
	return inputString.split("").sort().join("");
}

$("#confirm").click(function () {
	const userName = $("#username").val();
	userNameSorted = sortString(userName);
	$("#output").html('<div class="text"><p>' + userNameSorted + "</p></div>");
});

// all credit to Wes Modes for this anagram function!!!!!!!!!! they credit chatgpt in their code but shoutout wes
function anagram(inputStringa) {
	const charArray = inputStringa.split("");

	for (let i = charArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[charArray[i], charArray[j]] = [charArray[j], charArray[i]];
	}

	// Join the shuffled characters back into a string
	const anagram = charArray.join("");

	// Return the generated anagram
	return anagram;
}

$("#confirma").click(function () {
	const auserName = $("#ausername").val();
	userNameanagram = anagram(auserName);
	$("#aoutput").html('<div class="text"><p>' + userNameanagram + "</p></div>");
});

// ALL BELOW ALSO CREDIT TO WES MODES
// credit to ChatGPT
String.prototype.toTitleCase = function () {
	return this.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
};
