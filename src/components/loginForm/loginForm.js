import React, {Component} from 'react';
import axios from 'axios';

import Fieldset from '../fieldset/fieldset';
import Select from '../select/select';
import Button from '../button/button';

import './loginForm.scss';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            airlineOptions: [],
            airlineSelection: '',
            passwordValue:'',
            usernameValue:''
        };
        this.handleAirlineSelect = this.handleAirlineSelect.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handlePasswordValue = this.handlePasswordValue.bind(this);
        this.handleUsernameValue = this.handleUsernameValue.bind(this);
        this.handleRememberCheckbox = this.handleRememberCheckbox.bind(this);
    }

    componentDidMount() {
        axios.get('https://beta.id90travel.com/airlines')
            .then((response) => {
                this.setState({
                    airlineOptions: response.data
                });
            })
            .catch((error) => {
                alert('There has been an error, please try again later' + error);
            });
    }

    handleAirlineSelect(e) {
        this.setState({ airlineSelection: e.target.value });
    }

    handlePasswordValue(e){
        this.setState({ passwordValue: e.target.value });
    }

    handleUsernameValue(e){
        this.setState({ usernameValue: e.target.value });
    }

    handleRememberCheckbox(){
        //TODO
    }

    handleFormSubmit(){
    //TODO
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
                        placeholder={'Username'}
                        inputClassName={'login-input'}
                        inputValue={this.state.usernameValue}
                        controlFunc={this.handleUsernameValue}/>
                    <Fieldset
                        htmlFor={'user-password'}
                        label={'Password'}
                        inputId={'user-password'}
                        inputType={'text'}
                        placeholder={'Password'}
                        inputClassName={'login-input'}
                        inputValue={this.state.passwordValue}
                        controlFunc={this.handlePasswordValue}/>
                    <Select
                        name={'airline'}
                        placeholder={'Choose your Airline'}
                        controlFunc={this.handleAirlineSelect}
                        options={this.state.airlineOptions}
                        selectedOption={this.state.airlineSelection} />
                    <Fieldset
                        htmlFor={'login-remember'}
                        label={'Remember Me'}
                        inputId={'login-remember'}
                        inputType={'checkbox'}
                        inputClassName={'login-checkbox'}
                        controlFunc={this.handleRememberCheckbox}/>
                    <Button
                        buttonClassName={'button-submit'}
                        buttonType={'submit'}
                        controlFunc={this.handleFormSubmit}
                        buttonLabel={'Submit'}/>
                </form>
            </div>
        );
    }
}

export default LoginForm;