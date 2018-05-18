import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Link } from 'react-router-dom'

class Header extends React.Component {
  state = { index: 0 };
  
  onChange = index => {
    this.setState({ index })
  }

  render() {
    return (
    <div>
    <AppBar showMenuIconButton={false} title="CPSC App"/>
      <Tabs
        
        index={this.state.index}
        onChange={this.onChange}
      >
        <Tab label="Home" value={0} containerElement={<Link to="/"/>} />
    <Tab label="Search" value={1} containerElement={<Link to="/search" />} />
    <Tab label="About" value={2}containerElement={<Link to="/about" />} />
      </Tabs>    
  </div>
    )
  }
}
  

export default Header;
