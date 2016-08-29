angular.module('bigDillApp')
.controller('tourCtrl', function($scope, dataService, $http) {

    $scope.shows = [
        {
            name: "The Rumble Roots with Big Dill and the Boys at Guu's on Main",
            date: "September 10, 2016"
        },
        {
            name: "Big Dill and the Boys at Linneman's - Milwaukee",
            date: "September 24, 2016"
        },
        {
            name: "The Hippie Hideout",
            date: "November 7, 2016"
        }
    ];
    
});