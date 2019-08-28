import React from 'react';
import './App.css';
import Login from './Pages/Login/Login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app">
       <ToastContainer />

      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Login} />
          <Route path="/dashboard" exact={true} component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
