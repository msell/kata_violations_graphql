import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import RootPage from './components/RootPage';
import Detail from './components/Detail';
import Header from './components/Header';
import InfractionsPage from './components/InfractionsPage';
import AboutPage from './components/AboutPage';
import SearchPage from './components/SearchPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Route path="/" exact component={RootPage} />
            <Route path="/infractions/:id" component={InfractionsPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/detail/:id" component={Detail} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
