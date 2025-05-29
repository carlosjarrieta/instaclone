import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server';
import typeDefs from './gql/schema.js';
import resolvers from './gql/resolver.js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

try {
  await mongoose.connect(process.env.BBDD);
  console.log('Connected to MongoDB successfully');
  server();
} catch (err) {
  console.error('Error connecting to the database:', err);
}

function server() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  apolloServer.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}
