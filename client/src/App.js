import React, { Component } from 'react';
import './App.css';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import RootPage from './components/RootPage';
import Detail from './components/Detail';
import Layout from './components/Layout';
import InfractionsPage from './components/InfractionsPage';

class App extends Component {
  // state = {
  //   inputValue: ""
  // };

  // callMe() {
  //   console.log("you hit enter");
  // }

  // handleKeyUp = evt => {
  //   console.log({
  //     value: evt.target.value,
  //     keyCode: evt.keyCode,
  //     charCode: evt.charCode
  //   });
  //   if (evt.keyCode === 13) {
  //     this.callMe();
  //   }
  // };

  // handleChange = (evt, key) => {
  //   console.log({
  //     value: evt.target.value,
  //     keyCode: evt.keyCode,
  //     charCode: evt.charCode
  //   });

  //   const newState = {};
  //   newState[key] = evt.target.value;

  //   this.setState(newState);
  // };

  render() {
    return (
      <Layout>
        <div className="App">
          <Router>
            <div>
              <Link to="/">Root</Link>
              <Link to="/page2">Page2</Link>
              <Route path="/" exact component={RootPage} />
              <Route path="/infractions/:id" component={InfractionsPage} />
              <Route path="/page2" component={Page2} />
              <Route path="/detail/:id" component={Detail} />
            </div>
          </Router>
          {/* <input
          value={this.state.inputValue}
          onChange={e => this.handleChange(e, "inputValue")}
          onKeyUp={this.handleKeyUp}
        /> */}

        </div>
      </Layout>
    );
  }
}

export default App;


const Page2 = () => <div>Page2</div>;
