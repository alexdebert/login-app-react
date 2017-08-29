import React from 'react';
import PropTypes from 'prop-types';

const Fieldset = (props) => (
    <fieldset>
        <label htmlFor={props.htmlFor}>{props.label}</label><br/>
        <input id={props.inputId}
            type={props.inputType}
            placeholder={props.placeholder}/>
    </fieldset>
);

Fieldset.propTypes = {  
    htmlFor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    inputId: PropTypes.string.isRequired,
    inputType: PropTypes.oneOf(['text', 'number']).isRequired,
    placeholder: PropTypes.string
};

export default Fieldset;
