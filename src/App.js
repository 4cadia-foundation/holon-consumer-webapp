import React from 'react';
import './App.css';
import Login from './Login';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
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
