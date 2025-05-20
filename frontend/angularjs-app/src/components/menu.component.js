angular.module('legacyApp').controller('MenuController', ['$scope', function($scope) {
  $scope.menuItems = [
    { name: 'Home', link: '#' },
    { name: 'About', link: '#about' }
  ];
}]);
