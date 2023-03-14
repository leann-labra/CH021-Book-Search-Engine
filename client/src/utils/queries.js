import { gql } from "@apollo/client";

//getting single user
export const GET_ME = gql`
  query Query($userId: ID!) {
    me(userId: $userId) {
      _id
      userId
      username
      email
      password
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
