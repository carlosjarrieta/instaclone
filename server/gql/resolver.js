import User from '../models/user.js';
import bcryptjs from 'bcryptjs';

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
    register: async (_, { input }) => {
      try {
        // Normalizar datos
        const userData = {
          ...input,
          email: input.email.toLowerCase(),
          username: input.username.toLowerCase(),
        };

        const { email, username } = userData;

        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({
          $or: [{ email }, { username }],
        });

        if (existingUser) {
          throw new Error('User already exists with this email or username');
        }

        // Encriptar contraseña
        const salt = await bcryptjs.genSalt(10);
        userData.password = await bcryptjs.hash(input.password, salt);

        // Crear nuevo usuario
        const user = new User(userData);
        const savedUser = await user.save();
        return savedUser;
      } catch (error) {
        console.error('Error saving user:', error);
        throw new Error(error.message || 'Error saving user');
      }
    },
  },
};

export default resolvers;
