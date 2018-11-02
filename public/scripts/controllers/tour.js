angular.module('bigDillApp')
.controller('tourCtrl', function($scope, dataService, $http) {
    //
    // $scope.images = [
    //   {
    //     src: "../resources/high.jpg"
    //   },
    //   {
    //     src: "../resources/greenroom.jpg"
    //   },
    //   {
    //     src: "../resources/IMG_0777.jpeg"
    //   },
    //   {
    //     src: "../resources/studio.jpg"
    //   },
    //   {
    //     src: "../resources/upchrist.jpg"
    //   },
    //   {
    //     src: "../resources/sett.jpg"
    //   }
    // ]

    $scope.shows = [
        {
            name: "Hippie Hideout - Madison, WI",
            date: "November 12, 2018"
        }
    ];

});
