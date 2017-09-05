import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => (
    <div>
        <h1>Welcome!</h1>
        <p>To find your hotel, please</p>
        <Link to="login" className="btn btn-primary btn-lg">log in </Link><span>with your credentials</span>
    </div>
);

export default Home;