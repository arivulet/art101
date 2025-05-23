// index.js - sort the sort
// Author: River Kinley
// Date: 21 May 2025

// turn string into bigass number so i can do 13 things
function stringToNum(str) {
	// contains value of conversion
	let sum = 0;

	// convert to lowercase to not get weird cases with uppercase, ty chatgpt for the function .toLowerCase()
	const lowerStr = str.toLowerCase();

	for (let i = 0; i < lowerStr.length; i++) {
		const char = lowerStr[i];

		// check if its a letter a-z
		if (/[a-z]/.test(char)) {
			// get character code, subtract 96 to get position in alphabet (hint : a = 97)
			const value = char.charCodeAt(0) - 96;
			sum += value;
		}
	}
	return sum;
}

function sortingHat(numb) {
	result = numb % 13;
	str = "";
	if (result == 0) {
		str =
			"You're from Bandle City! The magical home of the yordles, it is said that every sensation is heightened for non-yordles. Colors are brighter. Food and drink intoxicates the senses for years and, once tasted, will never be forgotten. The sunlight is eternally golden, the waters crystal clear, and every harvest brings a fruitful bounty. Perhaps some of these claims are true, or maybe none—for no two taletellers ever seem to agree on what they actually saw.";
	} else if (result == 1) {
		str =
			"You're from Bilgewater! Bilgewater is a port city like no other, home to serpent hunters, dock gangs, and smugglers from across the known world. Here, fortunes are made and ambitions shattered in the blink of an eye. For those fleeing justice, debt, or persecution, Bilgewater can be a place of new beginnings, for no one on these twisted streets cares about your past. Even so, with each new dawn, careless travelers can always be found floating in the harbor, their purses empty and their throats slit.";
	} else if (result == 2) {
		str =
			"You're from Demacia! A place with an unbridled hatred for magic, it's a strong, lawful kingdom with a prestigious military history, Demacia's people have always valued the ideals of justice, honor, and duty most highly, and are fiercely proud of their cultural heritage. But in spite of these lofty principles, this largely self-sufficient nation has grown more insular and isolationist in recent centuries.";
	} else if (result == 3) {
		str =
			"You're from Ionia! Surrounded by treacherous seas, Ionia is composed of a number of allied provinces scattered across a massive archipelago, known to many as the First Lands. Since Ionian culture has long been shaped by the pursuit of balance in all things, the border between the material and spirit realms tends to be more permeable here, especially in the wild forests and mountains.";
	} else if (result == 4) {
		str =
			"You're from Ixtal! A nation secluded deep in the jungle for thousands of years, the sophisticated arcology-city of Ixaocan remains mostly free of outside influence. Having witnessed from afar the ruination of the Blessed Isles and the Rune Wars that followed, the Ixtali view all the other factions of Runeterra as upstarts and pretenders, and use their powerful magic to keep any intruders at bay.";
	} else if (result == 5) {
		str =
			"You're from Noxus! An empire based on survival of the fittest, anyone can rise to a position of power and respect within Noxus if they display the necessary aptitude, regardless of social standing, background, homeland, or wealth. Those who are able to wield magic are held in particularly high esteem, and are actively sought out in order that their special talents may be honed and best harnessed for the benefit of the empire.";
	} else if (result == 6) {
		str =
			"You're from Piltover! Piltover is a thriving, progressive city whose power and influence is on the rise. It is Valoran's cultural center, where art, craftsmanship, trade and innovation walk hand in hand. Its power comes not through military might, but the engines of commerce and forward thinking. Situated on the cliffs above the district of Zaun and overlooking the ocean, fleets of ships pass through its titanic sea-gates, bringing goods from all over the world.";
	} else if (result == 7) {
		str =
			"You're from the Shadow Isles! This cursed land was once home to a noble, enlightened civilization, known to its allies and emissaries as the Blessed Isles. However, more than a thousand years ago, an unprecedented magical cataclysm left the barrier between the material and spirit realms in tatters, effectively merging the two… and dooming all living things in an instant.";
	} else if (result == 8) {
		str =
			"You're from Shurima! The failed Ascension of Shurima's last emperor left the capital in ruins, and tales of the empire's former glory became little more than myth. Now, most of the nomadic inhabitants of Shurima's deserts eke out a meager existence from the unforgiving land. Some have built small outposts to defend the few oases, while others delve into long lost catacombs in search of the untold riches that must surely lay buried there. There are also those who live as mercenaries, taking coin for their service before disappearing back into the lawless wastelands.";
	} else if (result == 9) {
		str =
			"You're from Targon! Mount Targon is the mightiest peak in Runeterra, a towering peak of sun-baked rock amid a range of summits unmatched in scale anywhere else in the world. Located far from civilization, Mount Targon is utterly remote and all but impossible to reach save by the most determined seeker. Many legends cling to Mount Targon, and, like any place of myth, it is a beacon to dreamers, madmen and questors of adventure.";
	} else if (result == 10) {
		str =
			"You're from the Freljord! The Freljord is a harsh and unforgiving place, where the people are born warriors, who must persevere against all odds. Proud and fiercely independent, the tribes of the Freljord are often considered wild, rugged, and “uncivilized” by their neighbors across Valoran, who do not know the ancient traditions that shaped them. Many thousands of years ago, the alliance between the sisters Avarosa, Serylda, and Lissandra was shattered in a war that unknowingly threatened all of Runeterra, plunging the northern lands into chaos, and near-constant winter. Now, only those truly exceptional mortals who seem immune to the ravages of fire or ice seem destined, or able, to lead.";
	} else if (result == 11) {
		str =
			"You're from the Void! The Void is a force of insatiable hunger, waiting through the eons until its masters, the mysterious Watchers, mark the final time of undoing. To be a mortal touched by this power is to suffer an agonizing glimpse of eternal unreality, enough to shatter even the strongest mind. Denizens of the Void realm itself are construct-creatures, often of only limited sentience, but tasked with a singular purpose—to usher in total oblivion across Runeterra.";
	} else if (result == 12) {
		str =
			"You're from Zaun! Zaun is a large, undercity district, lying in the deep canyons and valleys threading Piltover. What light reaches below is filtered through fumes leaking from the tangles of corroded pipework and reflected from the stained glass of its industrial architecture. Zaun and Piltover were once united, but are now separate, yet symbiotic societies. Though it exists in perpetual smogged twilight, Zaun thrives, its people vibrant and its culture rich. Piltover's wealth has allowed Zaun to develop in tandem; a dark mirror of the city above.";
	}
	return str;
}

// when button click
$("#button").click(function () {
	// grab input value
	let name = $("#input").val();

	// convert name into sum
	let sortingName = stringToNum(name);

	// make region into our string
	let region = sortingHat(sortingName);

	// output it
	$("#output").html("<p>" + region + "</p>");
});
