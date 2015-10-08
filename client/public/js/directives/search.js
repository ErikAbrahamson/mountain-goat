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
            var swLat = results[0].geometry.bounds.Qa.J,
                swLon = results[0].geometry.bounds.Ma.j,
                neLat = results[0].geometry.bounds.Qa.j,
                neLon = results[0].geometry.bounds.Ma.J;
            var bounds = swLat + ',' + swLon + ',' + neLat + ',' + neLon;
            console.log(bounds);
            // get latlong, build bounds, send to /service query
          } else {
            alert("Geocode was not successful for the following reason: " + status);
          }
        });
      };
    }
  };
});
