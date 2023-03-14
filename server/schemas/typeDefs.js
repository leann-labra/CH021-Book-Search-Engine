const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    _id: ID
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: String
    savedBooks: [Book]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me(userId: ID!): User
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }
  type Mutation {
    addUser(user: UserInput!): Auth
    login(email: String!, password: String!): Auth

    saveBook(
      userId: ID!
      authors: [String]
      description: String!
      bookId: String!
      image: String
      link: String
      title: String!
    ): User

    removeBook(userId: ID!, bookId: String!): User
    deleteUser(userId: ID!): User
  }
`;

module.exports = typeDefs;
