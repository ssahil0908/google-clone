import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import { ResultContextProvider } from './Context/ResultContextProvider';
ReactDOM.render(
    <ResultContextProvider>
        <Router>
            <App />
        </Router>
    </ResultContextProvider>, document.getElementById('root'));
