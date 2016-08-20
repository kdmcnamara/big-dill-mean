angular.module('bigDillApp')
.directive('footer', function() {
  return {
    templateUrl: 'templates/footer.html',
    restrict: 'E',
    controller: 'mainCtrl'
  }
});