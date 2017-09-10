import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { getAirlines } from '../../actions/airlineActions';
import { submitLogin } from '../../actions/auth';

import Input from '../../components/input/input';
import Select from '../../components/select/select';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:
            {
                username: '',
                password: '',
                airline: '',
                remember: 0
            }
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    componentDidMount() {
        this.props.getAirlines();
    }

    onChange(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        return this.setState({user});
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.submitLogin(this.state.user);
    }

    handleCheckbox (event) {
        console.log(event.target);
    }

    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.onSubmit}>
                    <h1>Login</h1>
                    <Input
                        type={'text'}
                        name={'username'}
                        label={'Username'}
                        value={this.state.user.username}
                        onChange={this.onChange}/>
                    <Input
                        name={'password'}
                        label={'Password'}
                        type={'password'}
                        value={this.state.user.password}
                        onChange={this.onChange}/>
                    <Select
                        name={'airline'}
                        placeholder={'Choose your Airline'}
                        onChange={this.onChange}
                        options={this.props.airlinesList}/>
                    <Input
                        name = {'remember'}
                        label={'Remember me'}
                        type={'checkbox'}
                        onChange={this.handleCheckbox}
                        checked = {this.state.user.remember}/>
                    <Input
                        type={'submit'}
                        value={'Log In'}/>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        airlinesList: state.airlines.airlinesList
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAirlines,
        submitLogin
    }, dispatch);
};

Login.propTypes = {
    getAirlines: PropTypes.func.isRequired,
    submitLogin: PropTypes.func.isRequired,
    airlinesList: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);