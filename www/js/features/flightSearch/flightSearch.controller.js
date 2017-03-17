angular
  .module('flightManagement.flightSearch')
  .controller('FlightSearchCtrl', FlightSearchCtrl);

function FlightSearchCtrl(patients,$state) {
  var vm = this;

  vm.patientInfo = {
    firstName: '',
    lastName: '',
    dob: ''
  }

  vm.continue = function() {
    var patient = new patients.Patient(
      vm.patientInfo.firstName,
      vm.patientInfo.lastName,
      vm.patientInfo.dob
    );

    patients.patients.push(patient);
  }
}
