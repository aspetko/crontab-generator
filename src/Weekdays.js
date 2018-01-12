import React, { Component } from 'react';

class Weekdays extends Component {
    constructor(props) {
        super(props);
        this.state = {
          days: [],
          disabled: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleMultiChange = this.handleMultiChange.bind(this);
        this.enableMultipleSelection = this.enableMultipleSelection.bind(this);
  }

    handleChange(event) {
        this.setState({ days: event.target.value });
        this.setState( { disabled: true} )
    }

    handleMultiChange(event) {
      var options = event.target.options;
      var value = [];
      for (var i = 0, l = options.length; i < l; i++) {
          if (options[i].selected) {
              value.push(options[i].value);
          }
      }
        this.setState({ days: value });
    }

    enableMultipleSelection(){
        this.setState( {disabled: false} )
    }

  render() {
    return (
    <fieldset><legend>Weekdays</legend>
      <div className="col-sm-12">
        <div className="col-sm-7">
      <label>
        <input type="radio" name="rweekday" onChange={this.handleChange} defaultChecked/> Every Weekday
      </label>
      <label>
        <input type="radio" name="rweekday" onChange={this.handleChange} /> Monday-Friday
      </label>
      <label>
        <input type="radio" name="rweekday" onChange={this.handleChange} /> Weekend Days
      </label>
        </div>
        <div className="col-sm-5">
          <label>
            <div className="col-sm-1">
              <input type="radio" name="rweekday" onChange={this.enableMultipleSelection} />
            </div>
      <select name="weekdays" size="8" multiple onChange={this.handleMultiChange} disabled = {(this.state.disabled)? "disabled" : ""}>
      <option>Sun</option>
      <option>Mon</option>
      <option>Tue</option>
      <option>Wed</option>
      <option>Thu</option>
      <option>Fri</option>
      <option>Sat</option>
      </select>
          </label>
        </div>
      </div>
    </fieldset>
     );
  }
};
export default Weekdays;
