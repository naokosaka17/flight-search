angular
  .module('flightManagement.flightSearch')
  .controller('FlightSearchCtrl', FlightSearchCtrl);

function FlightSearchCtrl($scope) {

  // Initialize the scope variables
  $scope.info = {
    origin: {},
    maxfare: {},
    returndate: new Date(),
    departuredate: new Date()
  };

  $scope.prices = [{
    show: '$200',
    value: 200
  }, {
    show: '$300',
    value: 300
  }, {
    show: '$400',
    value: 400
  }, {
    show: '$500',
    value: 500
  }, {
    show: '$600',
    value: 600
  }, {
    show: '$700',
    value: 700
  }, {
    show: '$800',
    value: 800
  }, {
    show: '$900',
    value: 900
  }, {
    show: '$1000',
    value: 1000
  }, {
    show: '$1100',
    value: 1100
  }, {
    show: '$1200',
    value: 1200
  }, {
    show: '$1300',
    value: 1300
  }, {
    show: '$1400',
    value: 1400
  }, {
    show: '$1500',
    value: 1500
  }];
}
