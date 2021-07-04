import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import PathDetector from './components/extras/pathDetector';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Switch>
              <Route component={SignIn} path="/" exact={true} />
              <Route component={SignIn} path="/sign-in" />
              <Route component={SignUp} path="/sign-up" />
              <Route component={Dashboard} path="/dashboard" />
              <Route component={PathDetector} path="/path-detector" exact={true} />
              {/*<Route component={AddMovie} path="/add" />
              <Route component={EditMovie} path="/edit/:id" />
<Route component={() => <Redirect to="/" />} />*/}
            </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
