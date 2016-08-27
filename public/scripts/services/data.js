angular.module('bigDillApp') // No new module
.service('dataService', function($http) {
    
    this.getMembers = function(callback) {
      $http.get('/api/members')
      .then(callback);
    }

    this.sendForm = function(callback) {
    	$http.post('/dill-contact.html')
    	.then(callback);
    }
});