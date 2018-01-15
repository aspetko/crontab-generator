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
            operatingSystem: "",
            minutes: "*",
            hours: "*",
            days: "*",
            months: "*",
            weekdays: "*",
            command: "echo \"Hello World!\"",
            events: "",
            email: "",
            logfile: "",
            executionOutput: "",
            output: "-1"
        };
        this.changeMinutes = this.changeMinutes.bind(this);
        this.changeHours = this.changeHours.bind(this);
        this.changeDays = this.changeDays.bind(this);
        this.changeMonths = this.changeMonths.bind(this);
        this.changeWeekdays = this.changeWeekdays.bind(this);
        this.changeCommand = this.changeCommand.bind(this);
        this.changeEvents = this.changeEvents.bind(this);
        this.changeExecutionOutput = this.changeExecutionOutput.bind(this);
        this.changeOperatingSystem = this.changeOperatingSystem.bind(this);
        this.changeExecutionLogfileOutput = this.changeExecutionLogfileOutput.bind(this);
        this.changeExecutionEmailOutput = this.changeExecutionEmailOutput.bind(this);
    }

    changeOperatingSystem(event) {
        this.setState({
            operatingSystem: event
        });
        console.log("changeOperatingSystem ", event);
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
            executionOutput: "2>&1",
            output: "-1"
        });
        console.log("changeExecutionOutput ", event);
    }

    changeExecutionLogfileOutput(event) {
        this.setState({
            logfile: event,
            output: "1"
        });
        console.log("changeExecutionLogfileOutput ", event);
    }

    changeExecutionEmailOutput(event) {
        this.setState({
            email: event,
            output: "2"
        });
        console.log("changeExecutionEmailOutput ", event);
    }

    render() {
    return (
    <div className="container">
        <h1>Crontab Generator</h1>
        <div className="row">
            <div className="col-sm-12">
                <div className="col-sm-12">
                    <OperatingSystem onChange={this.changeOperatingSystem}/>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <div className="col-sm-12">
                    <Command onChange={this.changeCommand}/>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <div className="col-sm-12">
                    <Events onChange={this.changeEvents}/>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <div className="col-sm-4">
                   <ExecutionOutput onChange={this.changeExecutionOutput} email={this.changeExecutionEmailOutput}
                                    logfile={this.changeExecutionLogfileOutput}/>
                </div>
                <div className="col-sm-4">
                    <Minutes minutes={this.changeMinutes} />
                </div>
                <div className="col-sm-4">
                    <Hours hours={this.changeHours} />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <div className="col-sm-4">
                    <Days days={this.changeDays} />
                </div>
                    <div className="col-sm-4">
                        <Months months={this.changeMonths} />
                    </div>
                <div className="col-sm-4">
                    <Weekdays weekdays={this.changeWeekdays} />
                </div>
            </div>
        </div>
        <div className="row">
            <GeneratedOutput minutes={this.state.minutes} hours={this.state.hours}
                             days={this.state.days} months={this.state.months}
                             weekdays={this.state.weekdays} command={this.state.command}
                             events={this.state.events} email={this.state.email}
                             logfile={this.state.logfile} executionOutput={this.state.executionOutput}
                             output={this.state.output} />
        </div>
        <div className="row">
            <HumanReadable  minutes={this.state.minutes} hours={this.state.hours}
                            days={this.state.days} months={this.state.months}
                            weekdays={this.state.weekdays} command={this.state.command}
                            events={this.state.events} email={this.state.email}
                            logfile={this.state.logfile} executionOutput={this.state.executionOutput} />
        </div>
    </div>
    );
  }
}

export default App;
