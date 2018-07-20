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
            name: "Harmony Bar and Grille - Madison, WI",
            date: "July 21, 2018"
        },
        {
            name: "High Noon Saloon - Madison, WI",
            date: "August 17, 2018"
        },
        {
            name: "Linneman's Riverwest Inn - Milwaukee, WI",
            date: "August 18, 2018"
        },
        {
            name: "Gabe's - Iowa City, IA",
            date: "August 19, 2018"
        },
        {
            name: "Sancho's - Denver, CO",
            date: "August 20, 2018"
        },
        {
            name: "Be On Key - Denver, CO",
            date: "August 22, 2018"
        },
        {
            name: "Californos - Kansas City, KS",
            date: "August 23, 2018"
        },
        {
            name: "Melody Inn - Indianapolis, IN",
            date: "August 29, 2018"
        },
        {
            name: "Elbo Room - Chicago, IL",
            date: "August 30, 2018"
        },
        {
            name: "Ruby Lounge - Madison, WI",
            date: "August 31, 2018"
        }
    ];

});
