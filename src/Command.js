import React from 'react';

class Command extends React.Component {
  render() {
    return (
        <div className="row">
            <div className="col-sm-12">
            <fieldset>
                <legend>Command To Execute</legend>
                <form>
                  <input type="text" />
                </form>
            </fieldset>
            </div>
        </div>
    );
  }
}

export default Command;
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
