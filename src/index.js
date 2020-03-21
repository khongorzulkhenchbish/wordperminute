import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <Router>
        <App />
        {/* <!-- The core Firebase JS SDK is always required and must be listed first --> */}
        <script defer src="/__/firebase/7.12.0/firebase-app.js"></script>

        {/* <!-- TODO: Add SDKs for Firebase products that you want to use
        https://firebase.google.com/docs/web/setup#available-libraries -->

        <!-- Initialize Firebase --> */}
        <script defer src="/__/firebase/init.js"></script>
        <script defer src="init-firebase.js"></script>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
