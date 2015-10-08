app.controller('mainController', function($scope, $http) {

  $scope.getSegments = function(bounds) {
    $http.post('/api/service', { 'bounds': bounds })
      .success(function(data) {
        $scope.trails = data.segments;
      });
  };
});
