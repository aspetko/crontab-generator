import React from 'react';

class Command extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.onChange(event.target.value);
    }

  render() {
    return (
        <div className="row">
            <div className="col-sm-12">
            <fieldset>
                <legend>Command To Execute</legend>
                  <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </fieldset>
            </div>
        </div>
    );
  }
}

export default Command;
