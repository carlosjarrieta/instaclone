import User from '../models/user.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

function createToken(user, SECRET_KEY, expiresIn) {
  const { id, name, email, username } = user;
  const payload = {
    id,
    name,
    email,
    username,
  };

  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

async function register(input) {
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
}

async function login(input) {
  const { email, password } = input;

  const userFound = await User.findOne({ email: email.toLowerCase() });

  if (!userFound) throw new Error('email or password incorrect');

  const passwordSuccess = await bcryptjs.compare(password, userFound.password);
  if (!passwordSuccess) throw new Error('email or password incorrect');

  return {
    token: createToken(userFound, process.env.SECRET_KEY, '24h'),
  };
}

export default { register, login };
