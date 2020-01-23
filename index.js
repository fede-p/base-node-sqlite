
const { ApolloServer } = require('apollo-server');
const {typeDefs, resolvers} = require("./src/graphql");
const {CONFIG} = require('./config/')
const {dataBase} = require('./src/models')

//console.log(CONFIG.SQLITE)

const server = new ApolloServer({ typeDefs, resolvers,
  context: ({ req }) => {
    // get the user token from the headers
    const token = "token"
    //const token = req.headers.authorization || '';
    // add the user to the context (TOKEN POR AHORA)
    return { token };
  },
});

dataBase.conect()


server.listen(CONFIG.PORT).then(({ url }) => {
  try {

    //log.info(`Server ready at ${url}\n${CONFIG.APP_NAME} v${CONFIG.VERSION}`)
  } catch (error) {
    
  }
});

