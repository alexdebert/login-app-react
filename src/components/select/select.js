import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => (
    <div className="form-group">
        <select
            name={props.name}
            value={props.selectedOption}
            onChange={props.onChange}>
            {props.options.map(opt => {
                return (
                    <option
                        key={opt}
                        value={opt}>{opt}</option>
                );
            })}
        </select>
    </div>
);

Select.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    selectedOption: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default Select;