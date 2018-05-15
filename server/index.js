import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import typeDefs from './schema'
import resolvers from './resolvers'
import { makeExecutableSchema } from 'graphql-tools';
const PORT = 8080;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
const app = express();

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

app.listen(PORT);