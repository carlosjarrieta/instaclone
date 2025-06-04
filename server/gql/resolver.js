import userController from '../controllers/user.js';

const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        return await User.find();
      } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Error fetching users');
      }
    },
  },
  Mutation: {
    register: (_, { input }) => userController.register(input),
    login: (_, { input }) => userController.login(input),
  },
};

export default resolvers;
