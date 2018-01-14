import React, { Component } from 'react';

class Hours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: "",
            singleHour: "",
            hours: [],
            disabled: true,
            disableFreeInput: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleMultiChange = this.handleMultiChange.bind(this);
        this.enableMultipleSelection = this.enableMultipleSelection.bind(this);
        this.handleFreeChange = this.handleFreeChange.bind(this);
        this.handleFreeInputEnabled = this.handleFreeInputEnabled.bind(this);
        this.selectionChanged = this.selectionChanged.bind(this);
    }

    handleChange(event) {
        this.setState({hour: event.target.value});
        this.setState({disableFreeInput: false})
    }

    selectionChanged(event){
        this.setState({hour: event.target.value})
        this.setState({disabled: true});
        this.props.hours(event.target.value);
        console.log(event.target.value);
    }

    handleMultiChange(event) {
        var options = event.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        console.log(value );
        this.setState({ hours: value });
        this.props.hours(event.target.value);
    }

    handleFreeChange(event) {
        console.log(event.target.value);
        this.setState({singleHour: "*/"+event.target.value});
        this.props.hours("*/"+event.target.value);
    }

    handleFreeInputEnabled(){
        this.setState({disableFreeInput: false});
    }

    enableMultipleSelection(){
        this.setState( {disabled: false} )
    }

  render() {
    return (
        <fieldset><legend>Hours</legend>
            <div className="col-sm-12">
             <div className="col-sm-7">
              <label>
                  <input type="radio" name="rhours" value="*" onChange={this.selectionChanged} defaultChecked/> Every Hour
              </label>
              <label>
                    <input type="radio" name="rhours" onChange={this.selectionChanged} value="*/2"/> Even Hours
              </label>
              <label>
                    <input type="radio" name="rhours" onChange={this.selectionChanged} value="1-23/2"/> Odd Hours
              </label>
                 <label>
                     <input type="radio" name="rhours" onChange={this.selectionChanged} value="*/6"/> Every 6 Hours
                 </label>
                 <label>
                     <input type="radio" name="rhours" onChange={this.selectionChanged} value="*/8"/> Every 8 Hours
                 </label>
                 <label>
                     <input type="radio" name="rhours"  onChange={this.selectionChanged} value="0"/> Midnight
                 </label>
                 <label>
                     <input type="radio" name="rhours" onChange={this.handleChange} /> Every <input type="number" min="1" max="59" step="1" disabled = {(this.state.disableFreeInput)? "disabled" : ""}  onChange={this.handleFreeChange}/> Hour(s)
                 </label>
             </div>
                <div className="col-sm-5">
                    <label>
                        <div className="col-sm-1">
                            <input type="radio" name="rhours" onChange={this.enableMultipleSelection}/>
                        </div>
                <select name="hours" size="8" multiple onChange={this.handleMultiChange} disabled = {(this.state.disabled)? "disabled" : ""}>
                    <option>00</option>
          <option>01</option>
          <option>02</option>
          <option>03</option>
          <option>04</option>
          <option>05</option>
          <option>06</option>
          <option>07</option>
          <option>08</option>
          <option>09</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
          <option>17</option>
          <option>18</option>
          <option>19</option>
          <option>20</option>
          <option>21</option>
          <option>22</option>
          <option>23</option>
        </select>
                    </label>
            </div>
                </div>

        </fieldset>
    );
  }
}

export default Hours;
