import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => (
    <div className="form-group">
        <select
            name={props.name}
            value={props.selectedOption}
            onChange={props.controlFunc}>
            <option value="">{props.placeholder}</option>
            {props.options.map(opt => {
                return (
                    <option
                        key={opt.id}
                        value={opt.name}>{opt.display_name}</option>
                );
            })}
        </select>
    </div>
);

Select.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    selectedOption: PropTypes.string,
    controlFunc: PropTypes.func.isRequired,
    placeholder: PropTypes.string
};

export default Select;