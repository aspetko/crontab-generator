import React, { Component } from "react";

class GeneratedOutput extends Component {
    constructor(props){
        super(props);
        this.state = {
            minutes: "*",
            hours: "*",
            days: "*",
            months: "*",
            weekdays: "*",
            command: "*",
            events: "*",
            email: "*",
            logfile: "*",
            executionOutput: "*"
        };
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
      console.log(this.props.output);
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
              changeExecutionOutput = this.props.executionOutput;
              console.log("mute");
              break;
      }
      return (
          <fieldset><legend>GeneratedOutput</legend>
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
          </fieldset>
      );
    }
}

export default GeneratedOutput;
