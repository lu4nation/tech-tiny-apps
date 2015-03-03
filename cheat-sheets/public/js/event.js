angular.module('cheat-sheets', ['ngResource']);
angular.module('cheat-sheets').factory('Event', function ($resource) {
  return $resource('/event/:id', {id:'@id'}, {'update': {method: 'PUT'}});
});
angular.module('cheat-sheets').controller('EventCtrl', function($scope, Event) {
  $scope.events = Event.query();
  $scope.submit = function() {
    if ($scope.event.id === undefined) {
      Event.save($scope.event, function () {
        $scope.events = Event.query();
        console.log('data saved');
      });
    } else {
      Event.update({id: $scope.event.id}, $scope.event, function () {
        $scope.events = Event.query();
        console.log('data saved *');
      });
    }
  };
  $scope.delete = function(id) {
    Event.delete({id: id}, function () {
      $scope.events = Event.query();
      console.log('data deleted');
    });
  };
  $scope.edit = function(event) {
    $scope.event = {};
    for (m in event) {
      $scope.event[m] = event[m];
    }
  };
});
