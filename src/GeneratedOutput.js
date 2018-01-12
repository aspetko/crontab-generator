import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <fieldset><legend>GeneratedOutput</legend>
            <div className="col-sm-12">
                <div className="col-sm-2">
                    <fieldset><legend>Minutes</legend>
                        *
                    </fieldset>
                </div>
                <div className="col-sm-2">
                    <fieldset><legend>Hours</legend>
                        *
                    </fieldset>
                </div>
                <div className="col-sm-2">
                    <fieldset><legend>Days</legend>
                        *
                    </fieldset>
                </div>
                <div className="col-sm-2">
                    <fieldset><legend>Months</legend>
                        *
                    </fieldset>
                </div>
                <div className="col-sm-2">
                    <fieldset><legend>Weekdays</legend>
                        *
                    </fieldset>
                </div>
                <div className="col-sm-2">
                    <fieldset><legend>Command</legend>
                        echo "Hello World"
                    </fieldset>
                </div>
            </div>
        </fieldset>
        );
    }
}

export default App;
