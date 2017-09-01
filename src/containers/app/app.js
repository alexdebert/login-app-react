import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './app.scss';

class App extends Component {  
    render() {
        return (
            <div id="app-container">
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {  
    children: PropTypes.object.isRequired
};

export default App;  