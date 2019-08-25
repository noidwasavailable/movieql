import fetch from "node-fetch";

const API_URL =
	"https://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json";

const IMG_URL =
	"http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/";

export const getChampions = async () => {
	const champions = await fetch(`${API_URL}`)
		.then(res => res.json())
		.then(json => json.data);

	const championsArray = Object.keys(champions).map(data => champions[data]);

	return championsArray;
};

export const getChampionById = async id => {
	const champions = await fetch(`${API_URL}`)
		.then(res => res.json())
		.then(json => json.data);

	const championsArray = Object.keys(champions).map(data => champions[data]);
	const ourChamp = championsArray.filter(item => id === item.id);

	return ourChamp[0];
};

export const getChampionByKey = async key => {
	const champions = await fetch(`${API_URL}`)
		.then(res => res.json())
		.then(json => json.data);

	const championsArray = Object.keys(champions).map(data => champions[data]);
	const ourChamp = championsArray.filter(item => key === item.key);

	return ourChamp[0];
};

export const getChampionImage = async key => {
	let imgLink = IMG_URL;
	imgLink += key;
	imgLink += "/";
	imgLink += key;
	imgLink += "000.jpg";
	return imgLink;
};
