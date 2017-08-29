import React, {Component} from 'react';
import axios from 'axios';
import Fieldset from '../fieldset/fieldset';
import Select from '../select/select';

import './loginForm.scss';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            airlineOptions: [],
            airlineSelection: ''
        };
        this.handleAirlineSelect = this.handleAirlineSelect.bind(this);
    }

    componentDidMount() {
        axios.get('https://beta.id90travel.com/airlines')
            .then((response) => {
                this.setState({
                    airlineOptions: response.data,
                });
            })
            .catch((error) => {
                alert(error);
            });
    }

    handleAirlineSelect(e) {
        this.setState({ airlineSelection: e.target.value });
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
                        placeholder={'Username'}/>
                    <Fieldset
                        htmlFor={'user-password'}
                        label={'Password'}
                        inputId={'user-password'}
                        inputType={'text'}
                        placeholder={'Password'}/>
                    <Select
                        name={'airline'}
                        placeholder={'Choose your Airline'}
                        controlFunc={this.handleAirlineSelect}
                        options={this.state.airlineOptions}
                        selectedOption={this.state.airlineSelection} />
                    <button>SUBMIT</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;