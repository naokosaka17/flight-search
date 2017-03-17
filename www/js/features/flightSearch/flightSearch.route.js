angular
	.module('flightManagement.flightSearch')
	.config(flightSearchConfig);

function flightSearchConfig($stateProvider) {
	$stateProvider.state({
		name: 'flightSearch',
		url: '/flightSearch',
		templateUrl: 'js/features/flightSearch/flightSearch.html',
		controller: 'FlightSearchCtrl',
		controllerAs: 'FlightSearchVM'
	})
}
