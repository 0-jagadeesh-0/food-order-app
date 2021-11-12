import React, { Suspense } from "react";
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import Loader from "../components/utill/Loader";

const Welcome = React.lazy(() => import('../components/pages/Welcome/Welcome'))
const Login = React.lazy(() => import('../components/pages/Login/Login'))
const Dashboard = React.lazy(() => import('../components/pages/Dashboard/Dashboard'))

const AppRouter = () => {
  const isAuthenticated = true
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Switch>
          <PrivateRoute
            exact
            path="/login"
            component={Login}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute
            exact
            path="/dashboard"
            component={Dashboard}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute
            exact
            path="/"
            component={Welcome}
            isAuthenticated={isAuthenticated}
          />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRouter;