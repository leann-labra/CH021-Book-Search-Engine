const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utiles/auth");

const resolvers = {
  Query: {},
  Mutation: {},
};
