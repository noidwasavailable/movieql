import { getChampions } from "../db/db.js";

const resolvers = {
	Query: {
		champions: () => getChampions()
	}
};

export default resolvers;
