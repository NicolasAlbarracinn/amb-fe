import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'assets/scss/material-dashboard-pro-react.scss?v=1.9.0';

import PrivateRoutes from 'containers/PrivateRoutes/PrivateRoutes';

import HomeLayout from 'layouts/HomeLayout';
import AdminLayout from 'layouts/AdminLayout';

import LogInPage from 'pages/LoginPage/LoginPage';
import Dashboard from 'pages/Dashboard/Dashboard';
import UserProfile from 'pages/UserProfile/UserProfile';
import Profile from 'containers/Profile/Profile';
import Affiliates from 'containers/Affiliates/Affiliates';

const App = () => {
  return (
    <div>
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <BrowserRouter>
        <Switch>
          <PrivateRoutes path="/app">
            <AdminLayout>
              <Switch>
                <Route path="/app" exact render={() => <Redirect to="/app/dashboard" />} />
                <Route path="/app/profile" component={Profile} />
                <Route path="/app/affiliates" component={Affiliates} />
                <Route path="/app/dashboard" component={Dashboard} />
              </Switch>
            </AdminLayout>
          </PrivateRoutes>
          <HomeLayout>
            <Switch>
              <Route path="/" exact render={() => <Redirect to="/app/dashboard" />} />
              <Route path="/login" component={LogInPage} />
            </Switch>
          </HomeLayout>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
