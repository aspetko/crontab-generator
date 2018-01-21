import React, { Component } from "react";
import Clipboard from "react-clipboard.js";

class GeneratedOutput extends Component {
    constructor(props){
        super(props);
        this.state = {
            minutes: "*",
            hours: "*",
            days: "*",
            months: "*",
            weekdays: "*",
            command: "Command to Execute!",
            events: "*",
            email: "*",
            logfile: "*",
            copied: false,
            executionOutput: "*"
        };
        this.copyToClipboard = this.copyToClipboard.bind(this);
    }

    copyToClipboard(){
        this.setState({copied: true});
        let clipboardText = "";
        // preparing output
        switch(this.props.output){
            case "2":
                clipboardText = this.props.email+"\n";
                break;
            default:
            // nothing to do!
        }
        let seperator = "";
        if (this.props.minutes !== undefined){
            clipboardText += seperator + this.props.minutes;
        } else {
            clipboardText += seperator + "*";
        }
        seperator = " ";
        if (this.props.hours !== undefined){
            clipboardText += seperator + this.props.hours;
        } else {
            clipboardText += seperator + "*";
        }
        if (this.props.days !== undefined){
            clipboardText += seperator + this.props.days;
        } else {
            clipboardText += seperator + "*";
        }
        if (this.props.months !== undefined){
            clipboardText += seperator + this.props.months;
        } else {
            clipboardText += seperator + "*";
        }
        if (this.props.weekdays !== undefined){
            clipboardText += seperator + this.props.weekdays;
        } else {
            clipboardText += seperator + "*";
        }
        if (this.props.command !== undefined){
            clipboardText += seperator + this.props.command;
        } else {
            clipboardText += seperator + "Specify a useful command to execute!";
        }
        switch(this.props.output){
            case "1":
                clipboardText += this.props.logfile;
                break;
            // case "2":
            //     changeExecutionOutput = this.props.email;
            //      console.log("email");
            //     break;
            case "-1":
                clipboardText = "> /dev/null 2>&1";
                break;
            default:
                console.error("There is no spoon!");
        }
        return clipboardText;
    }

    render() {
      let minutes = "*";
      if (this.props.minutes !== undefined){
          minutes = this.props.minutes;
      } else {
          minutes = "*";
      }
      let hours = "*";
      if (this.props.hours !== undefined){
          hours = this.props.hours;
      } else {
          hours = "*";
      }
      let days = "*";
      if (this.props.days !== undefined){
          days = this.props.days;
      } else {
          days = "*";
      }
      let months = "*";
      if (this.props.months !== undefined){
          months = this.props.months;
      } else {
          months = "*";
      }
      let weekdays = "*";
      if (this.props.weekdays !== undefined){
          weekdays = this.props.weekdays;
      } else {
          weekdays = "*";
      }
      let changeCommand = "*";
      if (this.props.command !== undefined){
          changeCommand = this.props.command;
      } else {
          changeCommand = "?";
      }
      let changeExecutionOutput = "";
      switch(this.props.output){
          case "1":
              console.log("logfile");
              changeExecutionOutput = this.props.logfile;
              break;
          case "2":
              changeExecutionOutput = this.props.email;
              console.log("email");
              break;
          case "-1":
              changeExecutionOutput = "> /dev/null 2>&1";
              console.log("mute");
              break;
          default:
              console.error("There is no spoon!");
      }
      return (
          <fieldset>
              <legend>GeneratedOutput</legend>
              <div className="col-sm-12">
                  <div className="col-sm-1">
                      <fieldset><legend>Minutes</legend>
                          <div>{minutes}</div>
                      </fieldset>
                  </div>
                  <div className="col-sm-1">
                      <fieldset><legend>Hours</legend>
                          <div>{hours}</div>
                      </fieldset>
                  </div>
                  <div className="col-sm-1">
                      <fieldset><legend>Days</legend>
                          <div>{days}</div>
                      </fieldset>
                  </div>
                  <div className="col-sm-1">
                      <fieldset><legend>Months</legend>
                          <div>{months}</div>
                      </fieldset>
                  </div>
                  <div className="col-sm-2">
                      <fieldset><legend>Weekdays</legend>
                          <div>{weekdays}</div>
                      </fieldset>
                  </div>
                  <div className="col-sm-2">
                      <fieldset><legend>Command</legend>
                          <div>{changeCommand}</div>
                      </fieldset>
                  </div>
                  <div className="col-sm-2">
                      <fieldset><legend>Output</legend>
                          <div>{changeExecutionOutput}</div>
                      </fieldset>
                  </div>
              </div>
              <div className="col-sm-12">
                  <div className="col-sm-1">
                      <Clipboard option-text={this.copyToClipboard} button-title="Copy to Clipboard">
                          Copy
                      </Clipboard>

                      {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
                  </div>
              </div>
          </fieldset>
      );
    }
}

export default GeneratedOutput;
