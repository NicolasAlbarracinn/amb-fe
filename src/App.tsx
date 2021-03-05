import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'assets/scss/material-dashboard-pro-react.scss?v=1.9.0';

import PrivateRoutes from 'features/PrivateRoutes/PrivateRoutes';

import HomeLayout from 'layouts/HomeLayout';
import AdminLayout from 'layouts/AdminLayout';

import Authentication from 'features/authentication';
import Dashboard from 'features/dashboard';
import Profile from 'features/Profile';
import Partners from 'features/partners';
import Benefits from 'features/benefits';
import Lender from 'features/Lender';
import Portfolios from 'features/portfolios';

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
                <Route path="/app/benefits" component={Benefits} />
                <Route path="/app/partners" component={Partners} />
                <Route path="/app/lender" component={Lender} />
                <Route path="/app/portfolio" component={Portfolios} />
                <Route path="/app/dashboard" component={Dashboard} />
              </Switch>
            </AdminLayout>
          </PrivateRoutes>
          <HomeLayout>
            <Switch>
              <Route path="/" exact render={() => <Redirect to="/app/dashboard" />} />
              <Route path="/login" component={Authentication} />
            </Switch>
          </HomeLayout>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
