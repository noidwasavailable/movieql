import { getById, getChampions, addChamp } from "../db/db.js";

const resolvers = {
	Query: {
		champions: () => getChampions(),
		champ: (_, { id }) => getById(id)
	},

	Mutation: {
		addChamp: (_, { name, gender, age }) => addChamp(name, gender, age)
	}
};

export default resolvers;
