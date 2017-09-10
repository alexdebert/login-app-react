import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    return (
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            <div className="field">
                <input
                    type={props.type}
                    name={props.name}
                    placeholder={props.placeholder}
                    value={props.value}
                    checked={props.checked}
                    onChange={props.onChange}/>
            </div>
        </div>
    );
};

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'submit', 'password', 'checkbox']).isRequired,
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.number
};

export default Input;

