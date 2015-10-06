app.factory('stravaFactory', function($scope, $http) {

  var segments = {};

  segments.retrieve = function() {
    $http.get('/service');
  };
});
