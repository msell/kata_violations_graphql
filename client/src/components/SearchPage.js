import React from 'react';

class SearchPage extends React.Component {
  state = {
    inputValue: ""
  };

  callMe() {
    console.log("you hit enter");
  }

  handleKeyUp = evt => {
    console.log({
      value: evt.target.value,
      keyCode: evt.keyCode,
      charCode: evt.charCode
    });
    if (evt.keyCode === 13) {
      this.callMe();
    }
  };

  handleChange = (evt, key) => {
    console.log({
      value: evt.target.value,
      keyCode: evt.keyCode,
      charCode: evt.charCode
    });

    const newState = {};
    newState[key] = evt.target.value;

    this.setState(newState);
  };
  
  render() {
    return (
      <div>
        <h1>Search</h1>
        <input
          value={this.state.inputValue}
          onChange={e => this.handleChange(e, "inputValue")}
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}

export default SearchPage;
