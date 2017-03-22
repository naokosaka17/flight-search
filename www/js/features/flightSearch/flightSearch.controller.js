angular
  .module('flightManagement.flightSearch')
  .controller('FlightSearchCtrl', FlightSearchCtrl);

function FlightSearchCtrl($scope) {
  // origin place
  $scope.place = {name: 'Orlando'};
  // budget
  $scope.colors = [
     {name:'$250'},
     {name:'$300'},
     {name:'$400'},
     {name:'$500'},
     {name:'$600'},
     {name:'$700'},
     {name:'$800'},
     {name:'$900'},
     {name:'$1000'}
   ];
   $scope.setFare = $scope.colors[2]; //$400

}
