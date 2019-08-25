export let champions = [
	{
		id: 0,
		name: "Ezrael",
		age: 24,
		gender: "male"
	},
	{
		id: 1,
		name: "Braum",
		age: 20,
		gender: "male"
	},
	{
		id: 2,
		name: "Taric",
		age: 24,
		gender: "male"
	},
	{
		id: 3,
		name: "Katarina",
		age: 22,
		gender: "female"
	},
	{
		id: 4,
		name: "Lux",
		age: 21,
		gender: "female"
	},
	{
		id: 5,
		name: "Caitlyn",
		age: 28,
		gender: "female"
	},
	{
		id: 6,
		name: "Karthus",
		age: 400,
		gender: "male"
	},
	{
		id: 7,
		name: "Azir",
		age: 5000,
		gender: "male"
	}
];

export const getChampions = () => champions;

export const getById = id => {
	const filteredById = champions.filter(champ => id === champ.id);
	return filteredById[0];
};

export const deleteChamp = id => {
	const cleanedChampions = champions.filter(champ => id !== champ.id);
	if (champions.length > cleanedChampions.length) {
		champions = cleanedChampions;
		return true;
	} else {
		return false;
	}
};

export const addChamp = (name, gender, age) => {
	const newChamp = {
		id: champions.length + 1,
		name,
		gender,
		age
	};

	champions.push(newChamp);

	return newChamp;
};
