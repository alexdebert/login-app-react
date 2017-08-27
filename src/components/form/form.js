import React from 'react';

import './form.scss';

const Form = () => (
    <div className="form-container">
        <form >
            <h1>Login</h1>
            <fieldset>
                <label htmlFor="user-name">Username</label><br/>
                <input id="user-name" type="text" placeholder="Username"></input>
            </fieldset>
            <fieldset>
                <label htmlFor="user-password">Password</label><br/>
                <input id="user-password" type="text" placeholder="Password"></input>
            </fieldset>
            <select id="user-airline">
                <option value="LATAM">LATAM</option>
                <option value="AA">AA</option>
                <option value="Air France">Air France</option>
            </select><br/>
            <button>SUBMIT</button>
        </form>
    </div>
);

export default Form;