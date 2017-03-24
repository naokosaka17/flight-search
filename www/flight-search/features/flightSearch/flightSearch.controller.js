angular
    .module('flightManagement.flightSearch')
    .controller('FlightSearchCtrl', FlightSearchCtrl);

function FlightSearchCtrl($rootScope, $scope, $mdToast, $animate, $http, $timeout, $q, $log) {
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

    function submit() {
        $http.post('/api/flight', $scope.info)
            .then(function(response) {

            });
    }

    var self = this;

    self.simulateQuery = false;
    self.isDisabled = false;

    // list of `state` value/display objects
    self.states = loadAll();
    self.querySearch = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange = searchTextChange;

    self.newState = newState;

    function newState(state) {
        alert("Sorry! You'll need to create a Constitution for " + state + " first!");
    }

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch(query) {
        var results = query ? self.states.filter(createFilterFor(query)) : self.states,
            deferred;
        if (self.simulateQuery) {
            deferred = $q.defer();
            $timeout(function() {
                deferred.resolve(results);
            }, Math.random() * 1000, false);
            return deferred.promise;
        } else {
            return results;
        }
    }

    function searchTextChange(text) {
        $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
    }

    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
        var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';

        return allStates.split(/, +/g).map(function(state) {
            return {
                value: state.toLowerCase(),
                display: state
            };
        });
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };

    }
};
