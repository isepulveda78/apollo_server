const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        greeting: String
    }
`; //This is data type. The resolver will give the value to this data type.

const resolvers = { //Consider this the interface of your application
    Query:{
        greeting: () => 'Hello GraphQL world!' //needs to match greeting string
    }
}; //object literal

const server = new ApolloServer({typeDefs, resolvers});
server.listen({port: 9000})
.then(({url}) => console.log(`Server running at ${url}`));