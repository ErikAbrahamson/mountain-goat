app.directive('segmentSearch', function() {
  return {
    restrict: 'E',
    transclude: false,
    replace: false,
    templateUrl: './partials/search.html',
    link: function($scope, element, attrs) {
      var geocoder = new google.maps.Geocoder();
      $scope.codeAddress = function() {
        var address = document.getElementById('address').value;
        geocoder.geocode({ 'address': address }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[0].geometry.hasOwnProperty('bounds')) {
              var swLat = results[0].geometry.bounds.Qa.J,
                  swLon = results[0].geometry.bounds.Ma.j,
                  neLat = results[0].geometry.bounds.Qa.j,
                  neLon = results[0].geometry.bounds.Ma.J;
                  bounds = swLat + ',' + swLon + ',' + neLat + ',' + neLon;
              return $scope.getSegments(bounds);
            } else {
              var swLatV = results[0].geometry.viewport.Qa.J,
                  swLonV = results[0].geometry.viewport.Ma.j,
                  neLatV = results[0].geometry.viewport.Qa.j,
                  neLonV = results[0].geometry.viewport.Ma.J;
                  bounds = swLatV + ',' + swLonV + ',' + neLatV + ',' + neLonV;
            return $scope.getSegments(bounds);
          }
          } else {
            $scope.getSegments(null);
            $scope.hasError = true;
          }
        });
      };
    }
  };
});
