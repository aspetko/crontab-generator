import React from 'react';

class Events extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.selectionChanged = this.selectionChanged.bind(this);
        this.yearlySelected = this.yearlySelected.bind(this);
        this.annuallySelected = this.annuallySelected.bind(this);
        this.monthlySelected = this.monthlySelected.bind(this);
        this.weeklySelected = this.weeklySelected.bind(this);
        this.dailySelected = this.dailySelected.bind(this);
        this.hourlySelected = this.hourlySelected.bind(this);
    }

    selectionChanged(event){
        this.setState({value: event.target.value})
        // this.props.onChange(event.target.value);
        console.log("XXP");
    }

    selectionChanged(event) {
        this.props.minutes("*");
        this.props.hours("*");
        this.props.days("*");
        this.props.months("*");
        this.props.weekdays("*");
    }

    yearlySelected(event) {
        this.props.minutes("0");
        this.props.hours("0");
        this.props.days("1");
        this.props.months("1");
        this.props.weekdays("*");
    }

    annuallySelected(event) {
        this.props.minutes("0");
        this.props.hours("0");
        this.props.days("1");
        this.props.months("1");
        this.props.weekdays("*");
    }

    monthlySelected(event) {
        this.props.minutes("0");
        this.props.hours("0");
        this.props.days("1");
        this.props.months("*");
        this.props.weekdays("*");
    }

    weeklySelected(event) {
        this.props.minutes("0");
        this.props.hours("0");
        this.props.days("*");
        this.props.months("*");
        this.props.weekdays("0");
    }

    hourlySelected(event) {
        this.props.minutes("0");
        this.props.hours("*");
        this.props.days("*");
        this.props.months("*");
        this.props.weekdays("*");
    }

    dailySelected(event) {
        this.props.minutes("0");
        this.props.hours("0");
        this.props.days("*");
        this.props.months("*");
        this.props.weekdays("*");
    }

    render() {
    return (
        <fieldset>
            <legend>Events</legend>
                <div className="col-sm-12">
                    <div className="col-sm-2">
                        <input type="radio" name="revent" value="-" onChange={this.selectionChanged} defaultChecked/> Does not apply
                    </div>
                    <div className="col-sm-2">
                        <input type="radio" name="revent" value="yearly" onChange={this.yearlySelected} /> @yearly
                    </div>
                    <div className="col-sm-2">
                        <input type="radio" name="revent" value="annually" onChange={this.annuallySelected} /> @annually
                    </div>
                    <div className="col-sm-2">
                        <input type="radio" name="revent" value="monthly" onChange={this.monthlySelected} /> @monthly
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="col-sm-2">
                        <input type="radio" name="revent" value="weekly" onChange={this.weeklySelected} /> @weekly
                    </div>
                    <div className="col-sm-2">
                        <input type="radio" name="revent" value="daily" onChange={this.dailySelected} /> @daily
                    </div>
                    <div className="col-sm-2">
                        <input type="radio" name="revent" value="hourly" onChange={this.hourlySelected} /> @hourly
                    </div>
                    <div className="col-sm-2">
                        <input type="radio" name="revent" value="reboot" onChange={this.selectionChanged} /> @reboot
                    </div>
                </div>
        </fieldset>
    );
  }
}

export default Events;
