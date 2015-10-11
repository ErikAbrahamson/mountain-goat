app.controller('mainController', function($scope, $http) {

  $scope.view = { thumbs: true, single: false };
  $scope.hasError = false;
  $scope.location = { search: '' };
  $scope.currentTrail = { currentID: '' };

  $scope.showTrail = function() {
    $scope.view.thumb = false;
    $scope.view.single = true;
  };

  $scope.getSegments = function(bounds) {
    $scope.loading = true;
    $http.post('/api/service', { 'bounds': bounds })
      .success(function(data) {
        if ($scope.location.search.length !== 0) $scope.hasError = false;
        if (data.segments.length === 0) $scope.hasError = true;
        else $scope.hasError = false;
        $scope.trails = data.segments;
      })
      .finally(function() {
        $scope.loading = false;
      });
  };
});
