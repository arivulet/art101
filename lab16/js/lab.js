// index.js
// Author: River Kinley
// Date:

$.ajax({
	url: "https://corsproxy.io/?https://xkcd.com/info.0.json ",
	type: "GET",
	dataType: "json",
	success: function (comicObj) {
		console.log(comicObj);
		let title = comicObj.title;
		let alt = comicObj.alt;
		let imageUrl = comicObj.img;

		$("#title").text(title);
		$("#img").attr("src", imageUrl);
		$("#img").attr("alt", alt);
		$("#img").attr("title", alt);
	},

	error: function (jqXHR, textStatus, errorThrown) {
		console.log("Error loading XKCD comic:", textStatus, errorThrown);
	},
});
