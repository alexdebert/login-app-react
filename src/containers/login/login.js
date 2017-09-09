import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/input/input';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { getAirlines } from '../../actions/airlineActions';
import { submitLogin } from '../../actions/auth';

import Select from '../../components/select/select';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:
            {
                username: 'hauser',
                password: '1234',
                airline: 'HAWAIIAN AIRLINES (HA)',
                remember: 1
            }
        };
        //this.onChange = this.onChange.bind(this);
        //this.onSave = this.onSave.bind(this);
    }

    componentDidMount() {
        this.props.getAirlines();
    }

    //onChange(event) {
    //    const field = event.target.name;
    //    const credentials = this.state.credentials;
    //    credentials[field] = event.target.value;
    //    return this.setState({credentials: credentials});
    //}
    //
    //onSave(event) {
    //    event.preventDefault();
    //    //this.props.actions.loginUser(this.state.credentials);
    //}

    render() {
        return (
            <div className="form-container">
                <form onSubmit={(event) => {event.preventDefault(); this.props.submitLogin(this.state.user);}}>
                    <h1>Login</h1>
                    <Input
                        name="email"
                        label="email"
                        value={this.state.user.username}/>
                    <Input
                        name="password"
                        label="password"
                        type="password"
                        value={this.state.user.password}/>
                    <Select
                        name={'airline'}
                        placeholder={'Choose your Airline'}
                        options={this.props.airlinesList} />
                    <input
                        value="Log In"
                        type="submit"
                        className="btn btn-primary"/>
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