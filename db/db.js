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

	console.log("Hi");
	console.log(championsArray);
	console.log("BYE");

	return championsArray;
};
