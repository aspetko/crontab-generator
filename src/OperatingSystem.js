import React, { Component } from 'react';


class OperatingSystem extends Component {
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
        <fieldset><legend>Operating System / Application</legend>
            <div className="col-sm-12">
                <div className="col-sm-2">
                    <label>
                        <input type="radio" name="roperatingsystem" value="op1" onChange={this.selectionChanged} defaultChecked/> Mac OS X
                    </label>
                </div>
                <div className="col-sm-2">
                <label>
                    <input type="radio" name="roperatingsystem" value="op2" onChange={this.selectionChanged}/> Ubuntu Linux
                </label>
                </div>
                <div className="col-sm-2">
                <label>
                    <input type="radio" name="roperatingsystem" value="op3" onChange={this.selectionChanged}/> Jenkins
                </label>
                </div>
            </div>
        </fieldset>
    );
    }
}

export default OperatingSystem;
