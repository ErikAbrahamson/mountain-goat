app.directive('segmentPolyline', function() {
  return {
    restrict: 'E',
    replace: true,
    transclude: false,
    template: '<div></div>',
    link: function($scope, element, attrs) {

      element.attr('id', 'map_canvas' + $scope.trail.id).addClass('map-thumbs');

      var map = new google.maps.Map(document.getElementById(
        'map_canvas' + $scope.trail.id
      ), {
        mapTypeId: google.maps.MapTypeId.TERRAIN
      });

      function zoomToTrail(trail) {
        var bounds = new google.maps.LatLngBounds();
        var points = trail.getPath().getArray();
        for (var i = 0; i < points.length; i++) {
          bounds.extend(points[i]);
        }
        map.fitBounds(bounds);
      }

      var trail = new google.maps.Polyline({
        path: buildPoly($scope.trail.points),
        geodesic: true,
        strokeColor: '#0D0',
        strokeOpacity: 1.0,
        strokeWeight: 3
      });

      trail.setMap(map);
      zoomToTrail(trail);

      function buildPoly(pathString) {
        return pathString ? google.maps.geometry.encoding.decodePath(pathString) : null;
      }
    }
  };
});
