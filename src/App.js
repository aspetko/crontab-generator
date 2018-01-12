import React, { Component } from 'react';
import Command from "./Command.js";
import ExecutionOutput from "./ExecutionOutput.js";
import GeneratedOutput from "./GeneratedOutput.js";
import Minutes from "./Minutes";
import Hours from "./Hours";
import Days from "./Days";
import Months from "./Months";
import Weekdays from "./Weekdays";
import Events from "./Events";
import OperatingSystem from "./OperatingSystem";
import HumanReadable from "./HumanReadable.js";

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            minutes: "",
            hours: "",
            days: "",
            months: "",
            weekdays: "",
            command: "",
            events: "",
            executionOutput: ""
        };
        this.changeMinutes = this.changeMinutes.bind(this);
        this.changeHours = this.changeHours.bind(this);
        this.changeDays = this.changeDays.bind(this);
        this.changeMonths = this.changeMonths.bind(this);
        this.changeWeekdays = this.changeWeekdays.bind(this);
        this.changeCommand = this.changeCommand.bind(this);
        this.changeEvents = this.changeEvents.bind(this);
        this.changeExecutionOutput = this.changeExecutionOutput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    changeMinutes(event){
        this.setState({
            minutes: event
        });
        console.log("changeMinutes ", event);
    }

    changeHours(event){
        this.setState({
            hours: event
        });
        console.log("changeHours ", event);
    }

    changeDays(event){
        this.setState({
            days: event
        });
        console.log("changeDays ", event);
    }

    changeMonths(event){
        this.setState({
            months: event
        });
        console.log("changeMonths ", event);
    }

    changeWeekdays(event) {
        this.setState({
            weekdays: event
        });
        console.log("changeWeekdays ", event);
    }

    changeCommand(event) {
        this.setState({
            command: event
        });
        console.log("changeCommand ", event);
    }

    changeEvents(event) {
        this.setState({
            events: event
        });
        console.log("changeEvents ", event);
    }

    changeExecutionOutput(event) {
        this.setState({
            executionOutput: event
        });
        console.log("changeExecutionOutput ", event);
    }

    handleClick() {
        console.log(this.state.minutes, this.state.hours, this.state.days, this.state.months, this.state.weekdays,
            this.state.changeCommand, this.state.changeEvents, this.state.changeExecutionOutput);
        let output = this.state.minutes + " " + this.state.hours + " "+ this.state.days + " " + this.state.months +
                " " + this.state.weekdays + " " + this.state.changeCommand + " " +this.state.changeEvents + " " +
            this.state.changeExecutionOutput;
    }

        render() {
    return (
    <div className="container">
        <h1>Crontab Generator</h1>
        <div className="row">
            <div className="col-sm-12">
                <div className="col-sm-12">
                <OperatingSystem />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <div className="col-sm-12">
                <Command />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <div className="col-sm-12">
                <Events />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <div className="col-sm-4">
                   <ExecutionOutput />
                </div>
                <div className="col-sm-4">
                    <Minutes />
                </div>
                <div className="col-sm-4">
                    <Hours />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <div className="col-sm-4">
                    <Days />
                </div>

                    <div className="col-sm-4">
                        <Months />
                    </div>
                <div className="col-sm-4">
                    <Weekdays />
                </div>
            </div>
        </div>
        <div className="row">
            <GeneratedOutput />
        </div>
        <div className="row">
            <HumanReadable />
        </div>
    </div>
    );
  }
}

export default App;
