const { gql } = require("apollo-server");
const UserController =  require('../controllers/user')

const userQueries = gql`
  extend type Query {
    getAllUser: [user]
  }
  extend type Mutation {
    addUser(user: newUser): String
  }
`;


userResolvers= {
  Query: {
    getAllUser: UserController.getAllUserResolver,
  },

  Mutation:{
    addUser: UserController.addUserResolver,
  },

};

module.exports = {
  userQueries, userResolvers
};