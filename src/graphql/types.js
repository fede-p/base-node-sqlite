const { gql } = require("apollo-server");

const allTypes = gql`

type user{
  firstName: String
  lastName: String
}


input newUser {
  firstName: String
  lastName: String
}

`;

module.exports = {
  allTypes,
};