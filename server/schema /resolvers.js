const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utiles/auth");

const resolvers = {
  Query: {
    user: async () => {
      return await User.find();
    },
    // finding a single user
    user: async (parent, { userId }) => {
      return await User.findOne({ _id: userId });
    },
    // adding context for the query to find logged in user
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const rightPassword = await user.isCorrectPassword(password);

      if (!rightPassword) {
        throw new AuthenticationError("Oops! Wrong password, try again");
      }

      const token = signToken(user);

      return { token, user };
    },
    addBook: async (
      parent,
      { userId, authors, description, bookId, image, link, title }
    ) => {
      if (context.user) {
        const book = await Book.create({
          bookId,
          authors,
          description,
          image,
          link,
          title,
        });

        return User.findOneandUpdate(
          { _id: userId },
          {
            $addtoSet: {
              savedBooks: book,
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
    },
    deleteBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const deletedBook = await Book.findOneAndDelete({
          _id: bookId,
        });
        //since books is used as subdocument to User, must update User
        await User.findOneAndUpdate(
          { _id: context.user._id },
          //   deletes book
          { $pull: { savedBooks: { bookId: deletedBook } } }
        );

        return deletedBook;
      }
    },
    removeUser: async (parent, { userId }, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: userId });
      }
    },
  },
};
