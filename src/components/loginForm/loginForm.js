import React, {Component} from 'react';
import Fieldset from '../fieldset/fieldset';
import Select from '../select/select';

import './loginForm.scss';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            airlineOptions: []
        };
        this.handleAirlineSelect = this.handleAirlineSelect.bind(this);
        //this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        fetch('https://beta.id90travel.com/airlines')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    airlineOptions: data.display_name
                });
            });
    }

    handleAirlineSelect(e) {
        this.setState({ ownerAgeRangeSelection: e.target.value });
    }

    render() {
        return (
            <div className="form-container">
                <form >
                    <h1>Login</h1>
                    <Fieldset
                        htmlFor={'user-name'}
                        label={'Username'}
                        inputId={'user-name'}
                        inputType={'text'}
                        placeholder={'Insert your username'}/>
                    <Fieldset
                        htmlFor={'user-password'}
                        label={'Password'}
                        inputId={'user-password'}
                        inputType={'text'}
                        placeholder={'Insert your password'}/>
                    <Select
                        name={'airline'}
                        placeholder={'Choose your Airline'}
                        controlFunc={this.handleAirlineSelect}
                        options={this.state.airlineOptions}
                        selectedOption={this.state.ownerAgeRangeSelection} />
                    <button>SUBMIT</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;