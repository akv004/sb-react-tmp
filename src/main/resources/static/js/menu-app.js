(function () {
    var app = angular.module('legacyApp', []);
    app.controller('MenuController', ['$scope', function($scope) {
        $scope.menuItems = [
            { name: 'Home', link: '#' },
            { name: 'About', link: '#about' }
        ];
    }]);
})();
