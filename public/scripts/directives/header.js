angular.module('bigDillApp')
.directive('header', function() {
  return {
    templateUrl: 'templates/header.html',
    restrict: 'E',
    controller: 'mainCtrl'
  }
});