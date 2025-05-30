import { gql } from 'apollo-server';

const typeDefs = gql`
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

  type Token {
    token: String
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

  type Query {
    # Gets users
    getUsers: [User]
  }

  type Mutation {
    # User
    register(input: UserInput): User
    login(input: LoginInput): Token
  }
`;

export default typeDefs;
