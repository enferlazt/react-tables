import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TableList from './pages/TableList/TableList';
import Table from './pages/Table/Table';
import Auth from './pages/Auth/Auth';
import Navbar from './components/Navbar/Navbar';
import Logout from './pages/Logout/Logout';
import './App.scss';
import AddTable from './pages/AddTable/AddTable';

function App() {
  return (
    <div className="page">
      <Navbar />
      <div className="wrapper">
        <div className="wrapper__content">
          <Switch>
            <Route path="/" exact component={TableList}></Route>
            <Route path="/table" component={Table}></Route>
            <Route path="/add-table" component={AddTable}></Route>
            <Route path="/auth" component={Auth}></Route>
            <Route path="/logout" component={Logout}></Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
