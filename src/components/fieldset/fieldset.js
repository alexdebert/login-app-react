import React from 'react';
import PropTypes from 'prop-types';

const Fieldset = (props) => (
    <fieldset>
        <label htmlFor={props.htmlFor}>{props.label}</label>
        <input id={props.inputId}
            type={props.inputType}
            placeholder={props.placeholder}
            className={props.inputClassName}
            onChange={props.controlFunc}
            value={props.inputValue}/>
    </fieldset>
);

Fieldset.propTypes = {  
    htmlFor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    inputId: PropTypes.string.isRequired,
    inputType: PropTypes.oneOf(['text', 'checkbox']).isRequired,
    placeholder: PropTypes.string,
    inputClassName: PropTypes.string.isRequired,
    controlFunc: PropTypes.func.isRequired,
    inputValue: PropTypes.string
};

export default Fieldset;
