import React, { Component } from 'react';

class Output extends Component {
  render() {
    return (
        <fieldset>
          <legend>Execution Output</legend>
                <div className="col-sm-12">
                    <label>
                        <input type="radio" name="rexecutionoutput" defaultChecked /> Mute the Output
                    </label>
                </div>
                <div className="col-sm-6">
                    <label>
                        <input type="radio" name="rexecutionoutput"/> Save to a Logfile
                    </label>
                </div>
                <div className="col-sm-6">
                        <input type="text"/>
                </div>
            <div className="col-sm-6">
                <label>
                    <input type="radio" name="rexecutionoutput"/> E-Mail Output to
                </label>
            </div>
            <div className="col-sm-6">
                <input type="text"/>
            </div>
        </fieldset>
    );
  }
}

export default Output;
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
