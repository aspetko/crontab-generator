import React, { Component } from 'react';
// {/*"2-minutes": "*/2 * * * *",*/}
//     {/*"3-minutes": "*/3 * * * *",*/}
//         {/*"4-minutes": "*/4 * * * *",*/}
//             {/*"6-minutes": "*/6 * * * *",*/}
//                 {/*"10-minutes": "*/10 * * * *",*/}
//                     {/*"20-minutes": "*/20 * * * *",*/}

class Minutes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minute: "",
            singleMinute: "",
            minutes: [],
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
        this.setState({minute: event.target.value});
        this.setState({disableFreeInput: false})
    }

    selectionChanged(event){
        this.setState({minute: event.target.value})
        this.setState({disabled: true});
        this.props.minutes(event.target.value);
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
        this.setState({ minutes: value });
        this.props.minutes(event.target.value);
    }

    handleFreeChange(event) {
        console.log(event.target.value);
        this.setState({singleMinute: "*/"+event.target.value});
        this.props.minutes("*/"+event.target.value);
    }

    handleFreeInputEnabled(){
        this.setState({disableFreeInput: false});
    }

    enableMultipleSelection(){
        this.setState( {disabled: false} )
    }

    render() {
    return (
        <fieldset><legend>Minutes</legend>
            <div className="col-sm-7">
            <label>
            <input type="radio" name="rminutes" value="*" onChange={this.selectionChanged} defaultChecked/> Every Minute
          </label>
          <label>
            <input type="radio" name="rminutes" onChange={this.selectionChanged} value="*/2"/> Even Minutes
          </label>
          <label>
            <input type="radio" name="rminutes" onChange={this.selectionChanged} value="1-59/2"/> Odd (=uneven) Minutes
          </label>
          <label>
            <input type="radio" name="rminutes" onChange={this.selectionChanged} value="*/5"/> Every 5 Minutes
          </label>
          <label>
            <input type="radio" name="rminutes" onChange={this.selectionChanged} value="*/15"/> Every 15 Minutes
          </label>
          <label>
            <input type="radio" name="rminutes" onChange={this.selectionChanged} value="*/30"/> Every 30 Minutes
          </label>
              <label>
                <input type="radio" name="rminutes" onChange={this.handleChange} /> Every <input type="number" min="1" max="59" disabled = {(this.state.disableFreeInput)? "disabled" : ""} onChange={this.handleFreeChange}/> Minute(s)
              </label>
            </div>
            <div className="col-sm-5">
                <label>
                    <div className="col-sm-1">
                        <input type="radio" name="rminutes" onChange={this.enableMultipleSelection}/>
                    </div>
                    <select name="minutes" size="10" multiple onChange={this.handleMultiChange} disabled = {(this.state.disabled)? "disabled" : ""}>

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
            <option>32</option>
            <option>33</option>
            <option>34</option>
            <option>35</option>
            <option>36</option>
            <option>37</option>
            <option>38</option>
            <option>39</option>
            <option>40</option>
            <option>41</option>
            <option>42</option>
            <option>43</option>
            <option>44</option>
            <option>45</option>
            <option>46</option>
            <option>47</option>
            <option>48</option>
            <option>49</option>
            <option>50</option>
            <option>51</option>
            <option>52</option>
            <option>53</option>
            <option>54</option>
            <option>55</option>
            <option>56</option>
            <option>57</option>
            <option>58</option>
            <option>59</option>
          </select>
                </label>
              </div>
        </fieldset>
    );
  }
}

export default Minutes;
