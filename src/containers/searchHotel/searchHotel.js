import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

import { submitSearch } from '../../actions/searchHotel';

import Input from '../../components/input/input';
import Select from '../../components/select/select';

class SearchHotel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search:{
                destination: '',
                checkin: moment(),
                checkout: moment(),
                guests: '',
                rooms:'',
                currency:''
            }
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }

    onChange(event) {
        const field = event.target.name;
        const search = this.state.search;
        search[field] = event.target.value;
        return this.setState({search});
    }

    handleChangeStart(date) {
        var search = this.state.search;
        search.checkin = date;
        search.checkout = date;
        return this.setState({search});
    }

    handleChangeEnd(date) {
        var search = this.state.search;
        search.checkout = date;
        return this.setState({search});
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.submitSearch(this.state.search);
    }

    render() {
        const options = [1,2,3,4,5];
        const currencies = ['USD', 'Euros'];
        return (
            <div className="form-container">
                <form onSubmit={this.onSubmit}>
                    <h1>Find your hotel</h1>
                    <Input
                        type={'text'}
                        name={'destination'}
                        label={'Destination'}
                        value={this.state.search.destination}
                        onChange={this.onChange}/>
                    <label htmlFor={'checkin'}>{'Check In'}</label>
                    <DatePicker
                        minDate = {moment()}
                        selected={this.state.search.checkin}
                        selectsStart
                        startDate={this.state.search.checkin}
                        onChange={this.handleChangeStart}/>
                    <label htmlFor={'checkout'}>{'Check Out'}</label>
                    <DatePicker
                        selected={this.state.search.checkout}
                        selectsEnd
                        startDate={this.state.search.checkin}
                        endDate={this.state.search.checkout}
                        onChange={this.handleChangeEnd}/>
                    <label htmlFor={'guests'}>{'Guests'}</label>
                    <Select
                        name={'guests'}
                        onChange={this.onChange}
                        options={options}
                        selectedOption={this.state.search.guests}/>
                    <label htmlFor={'rooms'}>{'Rooms'}</label>
                    <Select
                        name={'rooms'}
                        onChange={this.onChange}
                        options={options}
                        selectedOption={this.state.search.rooms}/>
                    <label htmlFor={'currency'}>{'Currency'}</label>
                    <Select
                        name={'currency'}
                        onChange={this.onChange}
                        options={currencies}
                        selectedOption={this.state.search.currency}/>
                    <Input
                        type={'submit'}
                        value={'Search'}/>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        submitSearch
    }, dispatch);
};

SearchHotel.propTypes = {
    submitSearch: PropTypes.func.isRequired
};

export default connect(mapDispatchToProps)(SearchHotel);
