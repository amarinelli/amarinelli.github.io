(function(angular) {

  // The module code
  angular
    .module('angularApp', [])
    .controller('MainController', ['$scope', '$http', MainController]); //use this array syntax for minification

  // The controller code
  function MainController($scope, $http) {

    $scope.greeting = "Hello ...";

  }

})(window.angular);
