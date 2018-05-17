import express from 'express';
import bodyParser from 'body-parser';
import { makeExecutableSchema } from 'graphql-tools';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import cors from 'cors';
import typeDefs from './schema';
import resolvers from './resolvers';

const PORT = 8080;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
const app = express();

// bodyParser is needed just for POST.
app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({ schema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

app.listen(PORT);
