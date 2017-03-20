angular
  .module('flightManagement.flightSearch')
  .controller('FlightSearchCtrl', FlightSearchCtrl);

function FlightSearchCtrl($http) {
  var vm = this;
  function getFlight(){

    return $http.get('/api/v1/themes', function(req,res) {
    sabreCall('/v1/lists/supported/shop/themes', res);
    });
  }
}


}
