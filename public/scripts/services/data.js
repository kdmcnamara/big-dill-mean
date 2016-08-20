angular.module('bigDillApp') // No new module
.service("dataService", function($http) {
    
    this.getMembers = function(callback) {
      $http.get('mock/members.json')
      .then(callback)
    }
});