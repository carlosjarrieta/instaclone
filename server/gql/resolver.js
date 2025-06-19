import userController from '../controllers/user.js';

const resolvers = {
	Query: {
		getUser: (_, {id, username}) => userController.getUser(id, username),
	},
	Mutation: {
		register: (_, {input}) => userController.register(input),
		login: (_, {input}) => userController.login(input),
		updateAvatar: (_, { file }) => userController.updateAvatar(file),
	},
};

export default resolvers;
