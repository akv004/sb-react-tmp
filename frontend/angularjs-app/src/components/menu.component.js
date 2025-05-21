angular.module('legacyApp').component('appMenu', {
  templateUrl: 'js/angular/components/menu.template.html',
  controller: ['$window', function($window) {
    this.menuItems = [
      { name: 'Home' },
      { name: 'About' }
    ];

    this.select = function(item) {
      if ($window.renderReactApp) {
        $window.renderReactApp();
      }
    };
  }]
});
