// index.js - print ozymandius
// Author: River Kinley
// Date: 14 May 2025

// import poem, break into lines
let ozy = [
	"I met a traveller from an antique land,",
	"Who said—Two vast and trunkless legs of stone",
	"Stand in the desert. . . . Near them, on the sand,",
	"Half sunk a shattered visage lies, whose frown,",
	"And wrinkled lip, and sneer of cold command,",
	"Tell that its sculptor well those passions read",
	"Which yet survive, stamped on these lifeless things,",
	"The hand that mocked them, and the heart that fed;",
	"And on the pedestal, these words appear:",
	"My name is Ozymandias, King of Kings;",
	"Look on my Works, ye Mighty, and despair!",
	"Nothing beside remains. Round the decay",
	"Of that colossal Wreck, boundless and bare",
	"The lone and level sands stretch far away.",
];

let currentLine = 0;

function printOzy() {
	// display the current line
	let curLin = ozy[currentLine];

	// Move to the next line, looping back to 0 if at the end
	currentLine = (currentLine + 1) % ozy.length;

	return curLin;
}

// on click run print ozy
$("#talk").click(function () {
	const Line = printOzy();

	$("#output").append('<div class="poem"><p>' + Line + "</p></div>");
});
