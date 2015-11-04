app.directive('segmentSearch', function() {
  return {
    restrict: 'E',
    transclude: false,
    replace: false,
    templateUrl: './partials/search.html',
    link: function($scope, element, attrs) {
      var geocoder = new google.maps.Geocoder();
      $scope.codeAddress = function() {
        geocoder.geocode({ 'address': $scope.location.search },
          function(results, status) {
            console.log(results[0].geometry.bounds);
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[0].geometry.hasOwnProperty('bounds')) {
              var swLat = results[0].geometry.bounds.O.O,
                  swLon = results[0].geometry.bounds.j.j,
                  neLat = results[0].geometry.bounds.O.j,
                  neLon = results[0].geometry.bounds.j.O;
                  bounds = swLat + ',' + swLon + ',' + neLat + ',' + neLon;
                  console.log(bounds);
              return $scope.getSegments(bounds);
            } else {
              var swLatV = results[0].geometry.viewport.O.O,
                  swLonV = results[0].geometry.viewport.j.j,
                  neLatV = results[0].geometry.viewport.O.j,
                  neLonV = results[0].geometry.viewport.j.O;
                  bounds = swLatV + ',' + swLonV + ',' + neLatV + ',' + neLonV;
              return $scope.getSegments(bounds);
            }
          } else {
            $scope.getSegments(null);
            if ($scope.location.search.length > 0) {
              $scope.loading = false;
              $scope.hasError = false;
            }
          }
        });
      };
    }
  };
});
