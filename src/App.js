import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Permission from './pages/Permission/Permission.js';

function App() {
  return (
    <div className="app">



       <ToastContainer />
       <BrowserRouter>
       <div className="centralized-content">

          <div className="card">

              <div className={'logotype'}>
                <img src={process.env.PUBLIC_URL + '/logotype-sample.svg'} alt="Logotype"/>
                <h1>BLOCKCHAIN COMPANY</h1>
              </div>

              <div className={'card-body'}>
                <Switch>


                  <Route path="/login" exact={ true } component={ Login } />
                  <Route path="/signup" exact={ true } component={Signup} />
                  <Route path="/permission" exact={ true } component={ Permission } />
                  <Route path="/dashboard" exact={ true } component={Dashboard} />

                </Switch>
              </div>



          </div>
       </div>
       </BrowserRouter>
    </div>
  );
}

export default App;
