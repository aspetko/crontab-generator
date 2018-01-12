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
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleMultiChange = this.handleMultiChange.bind(this);
        this.enableMultipleSelection = this.enableMultipleSelection.bind(this);
        this.handleFreeChange = this.handleFreeChange.bind(this);
        this.handleFreeInputEnabled = this.handleFreeInputEnabled.bind(this);
    }


    handleChange(event) {
        this.setState({month: event.target.value});
        this.setState({disabled: true})
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
    }

    handleFreeChange(event) {
        console.log(event.target.value);
    }

    handleFreeInputEnabled(){
        this.setState({disableFreeInput: false});
    }

    enableMultipleSelection(){
        this.setState( {disabled: false} )
    }
/*"1-hour": "0 * * * *",*/
/*"2-hours": "0 * / 2 * * *",*/
    /*"two-hours": "0 * / 2 * * *",*/
        /*"3-hours": "0 * / 3 * * *",*/
            /*"4-hours": "0 * / 4 * * *",*/
                /*"8-hours": "0 * / 8 * * *",*/
                    /*day: "0 0 * * *",*/
                    /*night: "0 0 * * *",*/
                    /*"day-at-1am": "0 1 * * *",*/
                    /*"day-at-2am": "0 2 * * *",*/
                    /*"day-8am": "0 8 * * *",*/
                    /*morning: "0 9 * * *",*/
  render() {
    return (
        <fieldset><legend>Hours</legend>
            <div className="col-sm-12">
             <div className="col-sm-7">
              <label>
                  <input type="radio" name="rhours" value="*" defaultChecked/> Every Hour
              </label>
              <label>
                    <input type="radio" name="rhours" value="*/2"/> Even Hours
              </label>
              <label>
                    <input type="radio" name="rhours"/> Odd Hours
              </label>
              <label>
                    <input type="radio" name="rhours" value="*/6"/> Every 6 Hours
              </label>
                 <label>
                     <input type="radio" name="rhours" value="0"/> Midnight
                 </label>
                 <label>
                     <input type="radio" name="rhours" /> Every <input type="number" min="1" max="59" step="1"/> Hour(s)
                 </label>
                 <label>
                     <input type="radio" name="rhours"/> At <input type="number" min="1" max="23" step="1"/>
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
