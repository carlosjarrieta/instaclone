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
    register: async (_, { input }) => userController.register(input),
  },
};

export default resolvers;
