import React, { Component } from 'react';


class UsefullExamples extends Component {
  render() {
    return (
        <fieldset><legend>Usefull Examples</legend>
            <div className="col-sm-12">
                <label>
                    <select>
                        <option value="-1">No, thanks</option>
                        <option>Every Minute</option>
                        "hour-at-30-minutes": "30 * * * *",
                        "half-hour": "*/30 * * * *",
                        "60-minutes": "0 * * * *",
                        hour: "0 * * * *",
                        "1-hour": "0 * * * *",
                        "2-hours": "0 */2 * * *",
                        "two-hours": "0 */2 * * *",
                        "even-hour": "0 */2 * * *",
                        "other-hour": "0 */2 * * *",
                        "3-hours": "0 */3 * * *",
                        "three-hours": "0 */3 * * *",
                        "4-hours": "0 */4 * * *",
                        "6-hours": "0 */6 * * *",
                        "six-hours": "0 */6 * * *",
                        "8-hours": "0 */8 * * *",
                        "12-hours": "0 */12 * * *",
                        day: "0 0 * * *",
                        night: "0 0 * * *",
                        "day-at-1am": "0 1 * * *",
                        "day-at-2am": "0 2 * * *",
                        "day-8am": "0 8 * * *",
                        morning: "0 9 * * *",
                        midnight: "0 0 * * *",
                        "day-at-midnight": "0 0 * * *",
                        "night-at-midnight": "0 0 * * *",
                        sunday: "0 0 * * SUN",
                        monday: "0 0 * * MON",
                        tuesday: "0 0 * * TUE",
                        wednesday: "0 0 * * WED",
                        thursday: "0 0 * * THU",
                        friday: "0 0 * * FRI",
                        "friday-at-midnight": "0 0 * * FRI",
                        saturday: "0 0 * * SAT",
                        weekday: "0 0 * * 1-5",
                        "7-days": "0 0 * * 0",
                        week: "0 0 * * 0",
                        month: "0 0 1 * *",
                        "other-month": "0 0 1 */2 *",
                        quarter: "0 0 1 */3 *",
                        "6-months": "0 0 1 */6 *",
                        year: "0 0 1 1 *"

                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </label>
            </div>
        </fieldset>
    );
}
}
// optgroop?
export default UsefullExamples;
