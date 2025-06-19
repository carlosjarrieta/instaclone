import { gql } from 'apollo-server';

const typeDefs = gql`
    scalar Upload
    
    type User {
        id: ID
        name: String
        username: String
        email: String
        password: String
        avatar: String
        bio: String
        website: String
        followers: [User]
        following: [User]
        isVerified: Boolean
        isPrivate: Boolean
        createdAt: String
        updatedAt: String
    }

    input UserInput {
        name: String!
        username: String!
        email: String!
        password: String!
    }

    input LoginInput {
        email: String!
        password: String!
    }

    type Token {
        token: String
    }
    
    type UpdateAvatar {
        status: Boolean,
        urlAvatar: String
    }

    type Query {
        getUser(id: ID, username: String): User
    }

    type Mutation {
        # User
        register(input: UserInput): User
        login(input: LoginInput): Token
        updateAvatar(file: Upload): UpdateAvatar
    }
`;

export default typeDefs;
