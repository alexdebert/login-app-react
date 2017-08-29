import React from 'react';
import Fieldset from '../fieldset/fieldset';

import './loginForm.scss';


const LoginForm = () => (
    <div className="form-container">
        <form >
            <h1>Login</h1>
            <Fieldset 
                htmlFor={'user-name'}
                label={'Username'}
                inputId={'user-name'}
                inputType={'text'}
                placeholder={'Username'}
            />
            <Fieldset 
                htmlFor={'user-password'}
                label={'Password'}
                inputId={'user-password'}
                inputType={'text'}
                placeholder={'Password'}
            />
            <select id="user-airline">
                <option value="LATAM">LATAM</option>
                <option value="AA">AA</option>
                <option value="Air France">Air France</option>
            </select><br/>
            <button>SUBMIT</button>
        </form>
    </div>
);

export default LoginForm;