import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
    <button className={props.buttonClassName}
        type={props.buttonType}
        onClick={props.controlFunc}>{props.buttonLabel}</button>

);

Button.propTypes = {
    buttonClassName: PropTypes.string,
    buttonType: PropTypes.string,
    controlFunc: PropTypes.func.isRequired,
    buttonLabel: PropTypes.string
};

export default Button;