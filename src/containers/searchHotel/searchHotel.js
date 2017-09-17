import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { submitSearch } from '../../actions/searchHotel';

import Input from '../../components/input/input';
import Select from '../../components/select/select';

class SearchHotel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search:{
                destination: '',
                checkin:'',
                checkout:'',
                guests: [],
                rooms:[],
                currency:[]
            }
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        const field = event.target.name;
        const search = this.state.search;
        search[field] = event.target.value;
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
                    <Input
                        name={'checkin'}
                        label={'Check-in'}
                        type={'text'}
                        value={this.state.search.checkin}
                        onChange={this.onChange}/>
                    <Input
                        name={'checkout'}
                        label={'Check-out'}
                        type={'text'}
                        value={this.state.search.checkout}
                        onChange={this.onChange}/>
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
