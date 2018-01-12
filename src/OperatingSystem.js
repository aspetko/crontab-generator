import React, { Component } from 'react';


class OperatingSystem extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.selectionChanged = this.selectionChanged.bind(this);
    }

    selectionChanged(event){
        console.log(event);
    }


  render() {
    return (
        <fieldset><legend>Operating System / Application</legend>
            <div className="col-sm-12">
                <div className="col-sm-2">
                    <label>
                        <input type="radio" name="roperatingsystem" defaultChecked/> Mac OS X
                    </label>
                </div>
                <div className="col-sm-2">
                <label>
                    <input type="radio" name="roperatingsystem"/> Ubuntu Linux
                </label>
                </div>
                <div className="col-sm-2">
                <label>
                    <input type="radio" name="roperatingsystem"/> Jenkins
                </label>
                </div>
            </div>
        </fieldset>
    );
}
}

export default OperatingSystem;
