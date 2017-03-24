angular
  .module('flightManagement', [
    // here is global dependencies
    'ui.router',
    // angular material
    'ngMaterial',
    // features
    'flightManagement.flightSearch'
    // 'flightManagement.flightResult',
    // 'flightManagement.favoriteNote'
  ])
  .config(flightManagementConfig);

function flightManagementConfig($urlRouterProvider) {
  // If the URL doesn't exist as a route redirect to
  $urlRouterProvider.otherwise('/flightSearch');
}
