import React, { Component } from 'react';

class Output extends Component {
    constructor(props){
        super(props);
        this.state = {
            disabledEmail: true,
            disabledLogFile: true,
            email: "",
            logfile: "",
            output: -1
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleLogfileChange = this.handleLogfileChange.bind(this);
        this.selectionChangedEmail = this.selectionChangedEmail.bind(this);
        this.selectionChangedLogFile = this.selectionChangedLogFile.bind(this);
        this.selectionChangedMute = this.selectionChangedMute.bind(this);
    }

    selectionChangedEmail(){
        this.setState( {disabledLogFile: true} );
        this.setState( {disabledEmail: false} );
        this.setState( {output: 2} );
    }

    selectionChangedLogFile(){
        this.setState( {disabledEmail: true} );
        this.setState( {disabledLogFile: false} );
        this.setState( {output: 1} );
    }

    selectionChangedMute(){
        this.setState( {disabledEmail: true} );
        this.setState( {disabledLogFile: true} );
        this.setState( {output: -1} );
    }

    handleEmailChange(event){
        this.setState({email: event.target.value});
        this.props.email("MAILTO="+event.target.value);
    }

    handleLogfileChange(event){
        this.setState({logfile: event.target.value});
        this.props.logfile(">> "+event.target.value);
    }
    render() {
    return (
        <fieldset>
          <legend>Execution Output</legend>
                <div className="col-sm-12">
                    <label>
                        <input type="radio" name="rexecutionoutput" value="2>&1" defaultChecked onChange={this.selectionChangedMute}/> Mute the Output
                    </label>
                </div>
                <div className="col-sm-6">
                    <label>
                        <input type="radio" name="rexecutionoutput" value="Save" onChange={this.selectionChangedLogFile} /> Save to a Logfile
                    </label>
                </div>
                <div className="col-sm-6">
                        <input type="text" value={this.state.logfile} onChange={this.handleLogfileChange} disabled = {(this.state.disabledLogFile)? "disabled" : ""}/>
                </div>
            <div className="col-sm-6">
                <label>
                    <input type="radio" name="rexecutionoutput" value="E-Mail" onChange={this.selectionChangedEmail} /> E-Mail Output to
                </label>
            </div>
            <div className="col-sm-6">
                <input type="text" value={this.state.email} onChange={this.handleEmailChange} disabled = {(this.state.disabledEmail)? "disabled" : ""}/>
            </div>
        </fieldset>
    );
  }
}

export default Output;
