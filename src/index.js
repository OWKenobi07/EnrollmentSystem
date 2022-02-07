
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import axios from 'axios';

import './index.css';
import "antd/dist/antd.css";
import App from './App';

axios.defaults.baseURL = "http://localhost:14674/";

const appElement = document.getElementById('app');

ReactDOM.render(
<React.Fragment>
    <Router>
        <App />
    </Router>
</React.Fragment>
,appElement);

