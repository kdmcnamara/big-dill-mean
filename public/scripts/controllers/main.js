angular.module('bigDillApp') // No new module
.controller('mainCtrl', function($scope, dataService) {
	$scope.hello = function() {
		console.log("Hi!");
	}
  
    dataService.getMembers(function(response) {
    console.log(response.data.members);
    $scope.members = response.data.members;
    });

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
            }
    ];
  
  
    $scope.direction = 'left';
        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.direction = 'left';
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.direction = 'right';
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };
})
.animation('.slide-animation', function () {
    return {
        beforeAddClass: function (element, className, done) {
            var scope = element.scope();

            if (className == 'ng-hide') {
                var finishPoint = element.parent().width();
                if(scope.direction !== 'right') {
                    finishPoint = -finishPoint;
                }
                TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
            }
            else {
                done();
            }
        },
        removeClass: function (element, className, done) {
            var scope = element.scope();

            if (className == 'ng-hide') {
                element.removeClass('ng-hide');

                var startPoint = element.parent().width();
                if(scope.direction === 'right') {
                    startPoint = -startPoint;
                }

                TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
            }
            else {
                done();
            }
        }
    };
})


