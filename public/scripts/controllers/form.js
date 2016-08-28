angular.module('bigDillApp')
.controller('formCtrl', function($scope, dataService, $http) {

	$scope.formData = {};
    
    $scope.createEmail = function() {
        $http.post('/api/emails', $scope.formData)
        .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.emails = data;
                console.log(data);
            })

        $scope.email.submitted = !$scope.email.submitted;
    }
    
});