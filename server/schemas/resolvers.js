const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // finding a single user
    me: async (parent, args, { userId }) => {
      return await User.findOne({ _id: userId });
    },
  },

  // Mutation: {
  //   // sign up page
  //   addUser: async (parent, { username, email, password }) => {
  //     const user = await User.create({ username, email, password });
  //     const token = signToken(user);
  //     // returning an Auth type
  //     return { token, user };
  //   },
  //   login: async (parent, { email, password }) => {
  //     const user = await User.findOne({ email });

  //     if (!user) {
  //       throw new AuthenticationError("No user found with this email address");
  //     }

  //     const rightPassword = await user.isCorrectPassword(password);

  //     if (!rightPassword) {
  //       throw new AuthenticationError("Oops! Wrong password, try again");
  //     }

  //     const token = signToken(user);
  //     // returning Auth type
  //     return { token, user };
  //   },
  //   saveBook: async (
  //     parent,
  //     { userId, authors, description, bookId, image, link, title }
  //   ) => {
  //     // creating a book object
  //     const book = {
  //       bookId,
  //       authors,
  //       description,
  //       image,
  //       link,
  //       title,
  //     };

  //     return User.findOneAndUpdate(
  //       { _id: userId },
  //       {
  //         $addToSet: {
  //           savedBooks: book,
  //         },
  //       },
  //       {
  //         new: true,
  //         runValidators: true,
  //       }
  //     );
  //   },
  //   removeBook: async (parent, { bookId }, { user }) => {
  //     //since books is used as subdocument to User, must update User
  //     const deletedBook = await User.findOneAndUpdate(
  //       { _id: user._id },
  //       // deletes book
  //       { $pull: { savedBooks: { bookId: bookId } } },
  //       { new: true }
  //     );
  //     return { deletedBook };
  //   },
  //   deleteUser: async (parent, { userId }) => {
  //     return User.findOneAndDelete({ _id: userId });
  //   },
  // },
};

module.exports = resolvers;
