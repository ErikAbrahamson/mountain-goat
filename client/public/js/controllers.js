app.controller('mainController', function($scope, $http) {

  $scope.getSegments = function() {
    $http.get('/api/service')
      .success(function(data) {
        $scope.trails = data.segments;
        console.log($scope.trails);
      })
      .error(function(error) {
        console.log('Error: ' + error);
      });
  };
});
