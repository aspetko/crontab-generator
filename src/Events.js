import React from 'react';

class Events extends React.Component {
  render() {
    return (
        <fieldset>
            <legend>Events</legend>
                <div className="col-sm-12">
                    <div className="col-sm-2">
                        <input type="radio" name="revent" defaultChecked/> Does not apply
                    </div>
                    <div className="col-sm-2">
                        <input type="radio" name="revent"/> @yearly
                    </div>
                    <div className="col-sm-2">
                        <input type="radio" name="revent"/> @annually
                    </div>
                    <div className="col-sm-2">
                        <input type="radio" name="revent"/> @monthly
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="col-sm-2">
                        <input type="radio" name="revent"/> @weekly
                    </div>
                    <div className="col-sm-2">
                        <input type="radio" name="revent"/> @daily
                    </div>
                    <div className="col-sm-2">
                        <input type="radio" name="revent"/> @hourly
                    </div>
                    <div className="col-sm-2">
                        <input type="radio" name="revent"/> @reboot
                    </div>
                </div>
        </fieldset>
    );
  }
}

export default Events;
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