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
import Profile from 'containers/Profile/Profile';
import Partners from 'containers/Partners/Partners';
import Benefits from 'containers/Benefits/Benefits';

import PortfolioForm from 'pages/PortfolioPage';

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
                <Route path="/app/porfolio" component={PortfolioForm} />
                <Route path="/app/profile" component={Profile} />
                <Route path="/app/partners" component={Partners} />
                <Route path="/app/benefits" component={Benefits} />
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
