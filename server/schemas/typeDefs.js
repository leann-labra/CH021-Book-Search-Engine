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
    password: String
    savedBooks: [Book]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth

    addBook(
      userId: ID!
      authors: String
      description: String!
      bookId: String!
      image: String
      link: String
      title: String!
    ): User

    deleteBook(userId: ID!, bookId: String!): User
    deleteUser(userId: ID!): User
  }
`;

module.exports = typeDefs;
