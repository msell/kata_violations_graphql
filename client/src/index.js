import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
});


ReactDOM.render(
  (
    <MuiThemeProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </MuiThemeProvider>
  ), document.getElementById('root'),
);
registerServiceWorker();
