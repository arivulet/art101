// index.js - use picture of the day to make image
// Author: River Kinley
// Date:

$(document).ready(function () {
	$("#fetch-apod").click(function () {
		// NASA APOD API endpoint
		const apiUrl = "https://api.nasa.gov/planetary/apod";

		// using demo key cause this a small lab
		const apiKey = "DEMO_KEY";

		$.ajax({
			url: apiUrl,
			method: "GET",
			data: {
				api_key: apiKey,
			},
			success: function (data) {
				// display the container
				$("#apod-container").show();

				// set the title
				$("#apod-title").text(data.title);

				//set the date
				$("#apod-date").text(data.date);

				// Handle media (could be image or video)
				let mediaHtml = "";
				if (data.media_type === "image") {
					mediaHtml = `<img id="apod-image" src="${data.url}" alt="${data.title}">`;
				} else if (data.media_type === "video") {
					mediaHtml = `<iframe width="560" height="315" src="${data.url}" frameborder="0"></iframe>`;
				}
				$("#apod-media").html(mediaHtml);
			},
			error: function (error) {
				alert("Error fetching APOD: " + error.responseText);
			},
		});
	});
});
