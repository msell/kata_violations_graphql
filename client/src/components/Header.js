import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';

class Header extends React.Component {
  state = { index: 0 };
  onChange = index => {
    this.setState({ index });
  };

  render() {
    return (
    <div>
    <AppBar title="CPSC App"/>
      <Tabs
        
        index={this.state.index}
        onChange={this.onChange}
      >
        <Tab label="Home" value={0} />
        <Tab label="Search" value={1} />
        <Tab label="About" value={2} />
      </Tabs>    
  </div>
    )
  }
}
  

export default Header;
