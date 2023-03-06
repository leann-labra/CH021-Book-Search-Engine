import { gql } from "@apollo/client";

// getting all users
export const QUERY_USERS = gql`
  query Query {
    users {
      _id
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

//getting single user

export const QUERY_USER = gql`
    query Query($userId: ID! {
        user(userId: $userId) {
            _id
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
    })
`;
