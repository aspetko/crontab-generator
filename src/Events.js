import React from 'react';

class Events extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.selectionChanged = this.selectionChanged.bind(this);
    }

    selectionChanged(event){
        this.setState({value: event.target.value})
        this.props.onChange(event.target.value);
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
                        <input type="radio" name="revent" value="yearly" onChange={this.selectionChanged} /> @yearly
                    </div>
                    <div className="col-sm-2">
                        <input type="radio" name="revent" value="annually" onChange={this.selectionChanged} /> @annually
                    </div>
                    <div className="col-sm-2">
                        <input type="radio" name="revent" value="monthly" onChange={this.selectionChanged} /> @monthly
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="col-sm-2">
                        <input type="radio" name="revent" value="weekly" onChange={this.selectionChanged} /> @weekly
                    </div>
                    <div className="col-sm-2">
                        <input type="radio" name="revent" value="daily" onChange={this.selectionChanged} /> @daily
                    </div>
                    <div className="col-sm-2">
                        <input type="radio" name="revent" value="hourly" onChange={this.selectionChanged} /> @hourly
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
