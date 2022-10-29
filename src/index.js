
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom'
import axios from 'axios';

import './index.css';
//import "antd/dist/antd.css";
import App from './App';

//axios.defaults.baseURL = "http://localhost:14674/";
axios.defaults.baseURL = process.env.WEB_API_HOST_DEV;

const appElement = document.getElementById('app');

ReactDOM.render(
<React.Fragment>
            <Router>
                <App />
            </Router>
</React.Fragment>
,appElement);

