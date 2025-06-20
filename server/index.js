import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import typeDefs from './gql/schema.js';
import resolvers from './gql/resolver.js';
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs";

dotenv.config({path: '.env'});

async function startServer() {
	await mongoose.connect(process.env.BBDD);
	console.log('✅ Connected to MongoDB');

	const app = express();

	app.use(graphqlUploadExpress());

	const server = new ApolloServer({
		typeDefs,
		resolvers,
	});

	await server.start();
	server.applyMiddleware({app});

	app.listen({port: 4000}, () =>
		console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
	);

}

startServer().catch(err => {
	console.error('❌ Error in startServer:', err);
});
