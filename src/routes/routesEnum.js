const routePaths = {
  authRoutes: {
    login: '/',
    feiraoDoComponent: '/showroom',
  },
  mainRoutes: {
    dashboard: '/dashboard',
    managers: '/managers',
    administrators: '/adm',
    managerForm: '/managers/create',
    managerEdit: '/managers/edit/:manager_id',
    managerData: '/managers/:manager_id',
    collaborators: '/collaborators',
    collaboratorForm: '/collaborators/create',
    collaboratorEdit: '/collaborators/edit/:collaborator_id',
    collaboratorData: '/collaborators/:collaborator_id',
    // apps: '/apps',
    // appsForm: '/apps/create',
    // appsEdit: '/apps/edit/:app_id',
    // appsData: '/apps/:app_id',
    blockedApps: '/blocked_apps',
    maps: '/maps',
    // mapsForm: "/maps/create",
    logs: '/logs',
    logData: '/logs/:log_id',
  },
};

export default routePaths;
