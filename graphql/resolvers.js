import {
	getChampions,
	getChampionById,
	getChampionByKey,
	getChampionImage
} from "../db/db.js";

const resolvers = {
	Query: {
		champions: () => getChampions(),
		championId: (_, { id }) => getChampionById(id),
		championKey: (_, { key }) => getChampionByKey(key),
		championImage: (_, { key }) => getChampionImage(key)
	}
};

export default resolvers;
