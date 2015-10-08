app.controller('mainController', function($scope, $http) {

  $scope.hasError = false;

  $scope.getSegments = function(bounds) {
    $http.post('/api/service', { 'bounds': bounds })
      .success(function(data) {
        if (data.segments.length === 0) {
          $scope.hasError = true;
        } else {
          $scope.hasError = false;
        }
        $scope.trails = data.segments;
      });
  };
});
