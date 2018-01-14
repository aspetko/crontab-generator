import React, {Component} from 'react';

class Months extends Component {
    constructor(props) {
        super(props);
        this.state = {
            month: "",
            singleSelect: "",
            months: [],
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
        this.setState({ month: event.target.value });
        this.setState( { disabled: true} )
        this.props.months(event.target.value);
    }

    handleMultiChange(event) {
        var options = event.target.options;
        var value = [];
        let sep = "";
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(sep+options[i].value);
                sep = ",";
            }
        }
        console.log(value );
        this.setState({ months: value });
        this.props.months(event.target.value);

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
                <legend>Months</legend>
                <div className="col-sm-12">
                    <div className="col-sm-8">
                        <label>
                            <input type="radio" name="rmonth" onChange={this.handleChange} value="*" defaultChecked/> Every Month
                        </label>
                        <label>
                            <input type="radio" name="rmonth" onChange={this.handleChange} value="*/2" /> Even Months
                        </label>
                        <label>
                            <input type="radio" name="rmonth" onChange={this.handleChange} value="1-12/2" /> Odd Months
                        </label>
                        <label>
                            <input type="radio" name="rmonth" onChange={this.handleChange} value="*/4" /> Every 4 Months
                        </label>
                        <label>
                            <input type="radio" name="rmonth" onChange={this.handleChange} value="*/6" /> Every Half Year
                        </label>
                        <label>
                            <input type="radio" name="rmonth" onChange={this.handleFreeInputEnabled} /> Every <input type="number" min="1" max="12" step="1" onChange={this.handleFreeChange} disabled = {(this.state.disableFreeInput)? "disabled" : ""}/> Month(s)
                        </label>
                    </div>
                    <div className="col-sm-4">
                        <label>
                            <div className="col-sm-1">
                                <input type="radio" name="rmonth" onChange={this.enableMultipleSelection}/>
                            </div>
                            <select name="months" size="8" multiple onChange={this.handleMultiChange} disabled = {(this.state.disabled)? "disabled" : ""}>
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
                            </select>
                        </label>
                    </div>
                </div>
            </fieldset>
        );
    }
}

export default Months;