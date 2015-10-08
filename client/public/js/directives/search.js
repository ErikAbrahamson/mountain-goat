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
          console.log(results[0]);
          if (status == google.maps.GeocoderStatus.OK) {
            var swLat = results[0].geometry.bounds.Qa.J,
                swLon = results[0].geometry.bounds.Ma.j,
                neLat = results[0].geometry.bounds.Qa.j,
                neLon = results[0].geometry.bounds.Ma.J;
            var bounds = swLat + ',' + swLon + ',' + neLat + ',' + neLon;

            return $scope.getSegments(bounds);
          } else {
            alert('Error: ' + status);
          }
        });
      };
    }
  };
});
