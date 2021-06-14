import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import routesEnum from './routesEnum';

import LoginPage from '../screens/Auth/Login';
import ComponentShowRoom from 'screens/ComponentShowRoom';

import DashboardPage from '../screens/Main/Dashboard';
import PlantingPage from '../screens/Main/Planting/Main';
import MarketingPage from '../screens/Main/Marketing';
import AdmMainpage from 'screens/Main/Adm/Main';
import PlantingPhotoPage from 'screens/Main/Planting/Photo';

const Router = () => (
  <Switch>
    <Route path={routesEnum.authRoutes.login} exact component={LoginPage} />
    <Route path={routesEnum.authRoutes.feiraoDoComponent} exat component={ComponentShowRoom} />
    <Route
      path={routesEnum.mainRoutes.dashboard}
      component={DashboardPage}
      isPrivate
    />
    <Route
      path={routesEnum.mainRoutes.planting}
      component={PlantingPage}
      isPrivate
    />
    <Route
      path={routesEnum.mainRoutes.marketing}
      component={MarketingPage}
      isPrivate
      exact
    />
    <Route
      path={routesEnum.mainRoutes.administrators}
      component={AdmMainpage}
      exact
      isPrivate
    />
    <Route
      path={routesEnum.mainRoutes.plantingPhoto}
      component={PlantingPhotoPage}
      exact
      isPrivate
    />
  </Switch>
);

export default Router;
