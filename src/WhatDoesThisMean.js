import React, { Component } from 'react';

class App extends Component {
  render() {
      let time = new Date();
    return (
        <fieldset>
            <legend>This Job will run at:</legend>
            <p>{time.getDate()}</p>
        </fieldset>
    );
  }
}

export default App;
