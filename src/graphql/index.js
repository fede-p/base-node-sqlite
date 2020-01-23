const { gql } = require("apollo-server");
const { allTypes } = require("./types");
const { userQueries, userResolvers } = require("./product");


// Root gql, all the others has to have extend before types
const root = gql`
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`

const typeDefs = [root, userQueries, allTypes];

const resolvers = [userResolvers]


module.exports = {
  typeDefs,
  resolvers
};

