interface ListItem {
	text: string;
	link?: string;
}

interface ListSection {
	title: string;
	items: ListItem[];
}

// TODO: ideas: fonts, hardware (film camera, macbook pro, airpods, etc.)

export const lists: ListSection[] = [
	{
		title: "films",
		items: [{ text: "Interstellar" }, { text: "Inception" }, { text: "The Imitation Game" }, { text: "Arrival" }, { text: "Iron Man" }],
	},
	{
		title: "Series/Anime",
		items: [
			{ text: "Severance" },
			{ text: "Good girl's guide to murder" },
			{ text: "One Piece" },
			{ text: "13 reasons why" },
			{ text: "Dark" },
			{ text: "Rick & Morty" },
		],
	},
	{
		title: "essays",
		items: [{ text: '"This is Water" (David Foster Wallace)' }, { text: '"How to Do Great Work" (Paul Graham)' }, { text: '"Dostoevsky as Lover" (Henrik Karlsson)' }],
	},
	{
		title: "places at/around Swinburne",
		items: [
			{ text: "CoHo jazz nights" },
			{ text: "late night studying at On Call Café" },
			{ text: "dinner at MJ Sushi" },
			{ text: "climbing the roof of Mem Aud" },
			{ text: "strolling University Ave & getting Salt & Straw" },
			{ text: "ordering Zareen's" },
			{ text: "locking in at Gates" },
		],
	},
	{
		title: "places in melbourne",
		items: [
			{ text: "McNally Jackson Books, SoHo" },
			{ text: "Charlie Bird, West Village" },
			{ text: "Mercer Labs, Fidi" },
			{ text: "Uluh, East Village" },
			{ text: "Antidote, Williamsburg" },
			{ text: "La Cabra, SoHo" },
		],
	},
	{
		title: "personal software",
		items: [{ text: "OperaGX" }, { text: "Terminal" }, { text: "Notion" }, { text: "Figma" }, { text: "Everything" }, { text: "Raycast" }],
	},
	{
		title: "favorite of all time :)",
		items: [{ text: "Mason Wang", link: "https://masonjwang.com" }],
	},
];
