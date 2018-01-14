import React, { Component } from 'react';


class Days extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: "",
            singleDay: "",
            days: [],
            disabled: true,
            disableFreeInput: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleMultiChange = this.handleMultiChange.bind(this);
        this.enableMultipleSelection = this.enableMultipleSelection.bind(this);
        this.handleFreeChange = this.handleFreeChange.bind(this);
        this.handleFreeInputEnabled = this.handleFreeInputEnabled.bind(this);
    }

    handleChange(event) {
        this.setState({month: event.target.value});
        this.setState({disabled: true})
        this.props.days(event.target.value);
        console.log(event.target.value );
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
        this.setState({ months: value });
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

    render() {
        return (
            <fieldset>
                <legend>Days</legend>
                <div className="col-sm-12">
                    <div className="col-sm-7">
                        <label>
                            <input type="radio" name="rdays" onChange={this.handleChange}  value="*"  defaultChecked/> Every Day
                        </label>
                        <label>
                            <input type="radio" name="rdays" onChange={this.handleChange} value="*/2"  /> Even Days
                        </label>
                        <label>
                            <input type="radio" name="rdays" onChange={this.handleChange} value="1-31/2" /> Odd Days
                        </label>
                        <label>
                            <input type="radio" name="rdays" onChange={this.handleChange} value="*/5" /> Every 5 Days
                        </label>
                        <label>
                            <input type="radio" name="rdays" onChange={this.handleChange} value="*/15" /> Every 10 Days
                        </label>
                        <label>
                            <input type="radio" name="rdays" onChange={this.handleChange} value="*/14" /> Every two Weeks
                        </label>
                    </div>
                    <div className="col-sm-5">
                        <label>
                            <div className="col-sm-1">
                                <input type="radio" name="rdays" onChange={this.enableMultipleSelection}/>
                        </div>
                            <select name="days" size="8" multiple onChange={this.handleMultiChange} disabled = {(this.state.disabled)? "disabled" : ""}>
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
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                            </select>
                        </label>
                    </div>
                </div>
            </fieldset>
        );
    }
}
export default Days;
