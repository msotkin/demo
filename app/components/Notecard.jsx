import React, { PropTypes } from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

class Notecard extends Component {
    render() {
        return (
            <div className="notecard" maxLength="200" ></div>
        )
    }
}

export default Notecard;