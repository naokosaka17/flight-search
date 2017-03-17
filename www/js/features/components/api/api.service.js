angular
    .module('flightManagement.component.api')
    .service('api', ApiService);

function ApiService($http) {
    var vm = this;
    function getUser(userID) {
        return $http.get('http://partners.api.skyscanner.net/apiservices/browseroutes/v1.0/US/USD/en-US/US/anywhere/anytime/anytime?apiKey=na134931319399822205955644124998')
            .then(function(resp) {
                console.log(resp.data);
                vm.data = resp.data;
                // return {
                //     firstName: resp.data.results[0].name.first,
                //     lastName : resp.data.results[0].name.last,
                //     profilePicture : resp.data.results[0].picture.large,
                //     username : resp.data.results[0].login.username,
                //     id : userID
                // };

            });
    }
    // If want to get return from some api
    // var promizes = [
    //   $http.get('URL_HERE'),
    //   $http.get('URL_HERE'),
    //   $http.get('URL_HERE')
    // ];
    // $q.all(promizes.then(function(responses){
    //
    // })

    // post
    // function createUser(username,firstname,lastname){
    //   $http.post('URL',{
    //     username: username,
    //     firstname: firstname
    //   }).then(function(resp){
    //
    //   })
    // }

    return {
        user: getUser
    }
}
