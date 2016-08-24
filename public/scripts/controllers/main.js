angular.module('bigDillApp') // No new module
.controller('mainCtrl', function($scope, dataService) {
	$scope.hello = function() {
		console.log("Hi!");
	}
  
    $scope.slides = [
            {
                image: 'https://scontent-ord1-1.xx.fbcdn.net/t31.0-8/13653036_1673872506271983_3981706632249214387_o.jpg',
                description: 'Image 00'
            },
            {
                image: 'https://scontent-ord1-1.xx.fbcdn.net/v/t1.0-9/13339647_1647147968944437_7175123257372782979_n.jpg?oh=b16ef54fb32f78683a7a5d35084891d0&oe=58160E28',
                description: 'Image 01'
            },
            {
                image: 'https://scontent-ord1-1.xx.fbcdn.net/v/t1.0-9/13254365_1638049276520973_1802255899031233423_n.jpg?oh=4aaf90779a9ae0efd31c48ab5c79f3ef&oe=5821C8E3',
                description: 'Image 02'
            },
            {
                image: 'https://scontent-ord1-1.xx.fbcdn.net/v/t1.0-9/12924364_1607771792882055_2533279527692389264_n.jpg?oh=06117597d37e74da2ed8ce5e79a4e758&oe=5818C865',
                description: 'Image 03'
            }
    ];
  
  
    $scope.currentIndex = 0;
  
    $scope.setCurrentSlideIndex = function (index) {
        $scope.currentIndex = index;
    };
  
    $scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
    };
  
    dataService.getMembers(function(response) {
    console.log(response.data.members);
    $scope.members = response.data.members;
    });
  
});
