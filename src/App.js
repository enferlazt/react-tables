import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TableList from './pages/TableList/TableList';
import Table from './pages/Table/Table';
import Auth from './pages/Auth/Auth';
import Navbar from './components/Navbar/Navbar';
import Logout from './pages/Logout/Logout';
import './App.scss';
import AddTable from './pages/AddTable/AddTable';
import { connect } from 'react-redux';
import { Loader } from './components/Loader/Loader';
import { autoLogin } from './redux/actions/authActions';

function App({loader, username, autoLogin}) {

  useEffect(() => {
    autoLogin()
  })

  let routes = (
    <Switch>
      <Route path="/" exact component={TableList}></Route>
      <Route path="/table" component={Table}></Route>
      <Route path="/add-table" component={AddTable}></Route>
      <Route path="/logout" component={Logout}></Route>
      <Redirect to="/" />
    </Switch>
  )

  if(!username) {
    routes = (
      <Switch>
        <Route path="/auth" component={Auth}></Route>
        <Redirect to="/auth" />
      </Switch>
    )
  }

  return (
    <div className="page">
      {username && <Navbar username={username} />}
      <div className="wrapper">
        <div className="wrapper__content">
          {routes}
        </div>
      </div>
      {loader && <Loader/>}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loader: state.loader.loader,
    username: state.auth.username
  }
}

const mapDispatchToProps = dispatch => {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
