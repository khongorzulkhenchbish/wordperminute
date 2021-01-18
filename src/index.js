import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <Router>
        <App />
        {/* <!-- TODO: Add SDKs for Firebase products that you want to use
        https://firebase.google.com/docs/web/setup#available-libraries -->
        {/* <!-- Firebase App (the core Firebase SDK) is always required and must be listed first --> */}
        <script src="/__/firebase/8.0.0/firebase-app.js"></script>
        {/* <!-- If you enabled Analytics in your project, add the Firebase SDK for Analytics --> */}
        <script src="/__/firebase/8.0.0/firebase-analytics.js"></script>
        {/* <!-- Add Firebase products that you want to use --> */}
        <script src="/__/firebase/8.0.0/firebase-auth.js"></script>
        <script defer src="init-firebase.js"></script>
    </Router>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
