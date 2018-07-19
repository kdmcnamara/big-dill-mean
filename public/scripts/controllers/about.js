angular.module('bigDillApp')
.controller('aboutCtrl', function($scope, dataService, $http) {

  $scope.Kevin = false;
  $scope.Will = false;
  $scope.Brendan = false;
  $scope.Nick = false;

  console.log($scope.zoom);

  $scope.zoom = function(member) {
    console.log(member.name);
    if(member.name == "Kevin McNamara") {
      $scope.Kevin = true;
    }
    if(member.name == "Will Hansen") {
      $scope.Will = true;
    }
    if(member.name == "Brendan Andrews") {
      $scope.Brendan = true;
    }
    if(member.name == "Nick Spiroff") {
      $scope.Nick = true;
    }
  }

});
