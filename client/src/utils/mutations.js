import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation addBook(
    $userId: ID!
    $authors: String
    $description: String!
    $bookId: String!
    $image: String
    $link: String
    $title: String!
  ) {
    addBook(
      userId: $userId
      authors: $authors
      description: $description
      bookId: $bookId
      link: $link
      title: $title
    ) {
      _id
      username
      email
      savedBooks {
        authors
        description
        bookId
        link
        title
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation deleteBook($userId: String!, $bookId: String!) {
    deleteBook(userId: $userId, bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
