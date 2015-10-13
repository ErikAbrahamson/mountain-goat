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
            console.log(results[0]);
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[0].geometry.hasOwnProperty('bounds')) {
              var swLat = results[0].geometry.bounds.Pa.I,
                  swLon = results[0].geometry.bounds.La.j,
                  neLat = results[0].geometry.bounds.Pa.j,
                  neLon = results[0].geometry.bounds.La.I;
                  bounds = swLat + ',' + swLon + ',' + neLat + ',' + neLon;
              return $scope.getSegments(bounds);
            } else {
              var swLatV = results[0].geometry.viewport.Pa.I,
                  swLonV = results[0].geometry.viewport.La.j,
                  neLatV = results[0].geometry.viewport.Pa.j,
                  neLonV = results[0].geometry.viewport.La.I;
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
