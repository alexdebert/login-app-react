import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/input/input';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as sessionActions from '../../actions/sessionActions';
import { getAirlines } from '../../actions/airlineActions';

import Select from '../../components/select/select';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {credentials:
            {
                email: '',
                password: '',
                airlineSelection: ''
            }
        };
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    componentDidMount() {
        this.props.getAirlines();
    }

    onChange(event) {
        const field = event.target.name;
        const credentials = this.state.credentials;
        credentials[field] = event.target.value;
        return this.setState({credentials: credentials});
    }

    onSave(event) {
        event.preventDefault();
        this.props.actions.loginUser(this.state.credentials);
    }

    render() {
        return (
            <div className="form-container">
                <form>
                    <h1>Login</h1>
                    <Input
                        name="email"
                        label="email"
                        value={this.state.credentials.email}
                        onChange={this.onChange}/>

                    <Input
                        name="password"
                        label="password"
                        type="password"
                        value={this.state.credentials.password}
                        onChange={this.onChange}/>
                    <Select
                        name={'airline'}
                        placeholder={'Choose your Airline'}
                        onChange={this.onChange}
                        options={this.props.airlines}
                        selectedOption={this.state.airlineSelection} />
                    <input
                        value="Log In"
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.onSave}/>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        airlines: state.airlines
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(sessionActions, dispatch),
        getAirlines: bindActionCreators(getAirlines, dispatch)
    };
}

Login.propTypes = {
    actions: PropTypes.object.isRequired,
    getAirlines: PropTypes.func.isRequired,
    airlines: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);