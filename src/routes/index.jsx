import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import routesEnum from './routesEnum';

import LoginPage from '../screens/Auth/Login';

import DashboardPage from '../screens/Main/Dashboard';

import ManagersList from 'screens/Main/Managers/ManagersList';
import ManagerForm from 'screens/Main/Managers/ManagerForm';
import ManagerPage from 'screens/Main/Managers/ManagerPage';

import CollaboratorsList from '../screens/Main/Collaborators/CollaboratorsList';
import CollaboratorForm from '../screens/Main/Collaborators/CollaboratorForm';
import CollaboratorPage from 'screens/Main/Collaborators/CollaboratorPage';

// import AppsList from 'screens/Main/Apps/AppList';
// import AppPage from 'screens/Main/Apps/AppPage';
// import AppForm from 'screens/Main/Apps/AppForm';

import BlockedApps from 'screens/Main/BlockedApps/BlockedAppsPage';

// import PermissionsList from "screens/Main/Permissions/PermissionsList";
// import PermissionForm from "screens/Main/Permissions/PermissionForm";
// import PermissionPage from "screens/Main/Permissions/PermissionPage";

import MapsView from 'screens/Main/Maps/MapsView';

import ComponentShowRoom from 'screens/ComponentShowRoom';

import LogsList from 'screens/Main/Logs/LogsList';
import LogPage from 'screens/Main/Logs/LogShow';

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
      path={routesEnum.mainRoutes.managers}
      component={ManagersList}
      isPrivate
      exact
    />
    <Route
      path={routesEnum.mainRoutes.managerForm}
      component={ManagerForm}
      isPrivate
      exact
    />
    <Route
      path={routesEnum.mainRoutes.managerEdit}
      component={ManagerForm}
      isPrivate
      exact
    />
    <Route
      path={routesEnum.mainRoutes.managerData}
      component={ManagerPage}
      isPrivate
      exact
    />
    <Route
      path={routesEnum.mainRoutes.collaborators}
      component={CollaboratorsList}
      isPrivate
      exact
    />
    <Route
      path={routesEnum.mainRoutes.collaboratorForm}
      component={CollaboratorForm}
      isPrivate
      exact
    />
    <Route
      path={routesEnum.mainRoutes.collaboratorEdit}
      component={CollaboratorForm}
      isPrivate
      exact
    />
    <Route
      path={routesEnum.mainRoutes.collaboratorData}
      component={CollaboratorPage}
      isPrivate
      exact
    />
    <Route
      path={routesEnum.mainRoutes.maps}
      component={MapsView}
      isPrivate
      exact
    />
    {/* <Route
      path={routesEnum.mainRoutes.permissions}
      component={PermissionsList}
      isPrivate
      exact
    />
    <Route
      path={routesEnum.mainRoutes.permissionForm}
      component={PermissionForm}
      isPrivate
      exact
    />
    <Route
      path={routesEnum.mainRoutes.permissionEdit}
      component={PermissionForm}
      isPrivate
      exact
    />
    <Route
      path={routesEnum.mainRoutes.permissionData}
      component={PermissionPage}
      isPrivate
      exact
    /> */}
    <Route
      path={routesEnum.mainRoutes.blockedApps}
      component={BlockedApps}
      isPrivate
      exact
    />
    {/* <Route
      path={routesEnum.mainRoutes.apps}
      component={AppsList}
      isPrivate
      exact
    /> */}
    {/* <Route
      path={routesEnum.mainRoutes.appsForm}
      component={AppForm}
      isPrivate
      exact
    />
    <Route
      path={routesEnum.mainRoutes.appsData}
      component={AppPage}
      isPrivate
      exact
    />
    <Route
      path={routesEnum.mainRoutes.appsEdit}
      component={AppForm}
      isPrivate
      exact
    /> */}
    <Route
      path={routesEnum.mainRoutes.logs}
      component={LogsList}
      isPrivate
      exact
    />
    <Route
      path={routesEnum.mainRoutes.logData}
      component={LogPage}
      isPrivate
      exact
    />
  </Switch>
);

export default Router;
