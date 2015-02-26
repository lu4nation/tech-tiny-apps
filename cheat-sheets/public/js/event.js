angular.module('cheat-sheets', ['ngResource']);
angular.module('cheat-sheets').factory('Event', function ($resource) {
  return $resource('/event/:id');
});
angular.module('cheat-sheets').controller('EventCtrl', function($scope, Event) {
  $scope.submit = function() {
    Event.save($scope.event, function () {
      $scope.events = Event.query();
      console.log('data saved');
    });
  };
});
