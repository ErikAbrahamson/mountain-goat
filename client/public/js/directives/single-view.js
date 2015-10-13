app.directive('singleView', function() {
  return {
    restrict: 'E',
    replace: true,
    transclude: false,
    template: '<div></div>',
    link: function($scope, element, attrs) {
      var map;

      var mapID =
        document.getElementById('map_thumb_' + $scope.trail.id) ?
          'map_view_' + $scope.trail.id : 'map_thumb_' + $scope.trail.id;

      element.attr('id', mapID).addClass('map-view');


        map = new google.maps.Map(document.getElementById(mapID), {
          mapTypeId: google.maps.MapTypeId.TERRAIN,
          disableDefaultUI: true
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

      google.maps.event.addDomListener(window, 'load', resizeMap());
      google.maps.event.addDomListener(window, "resize", resizingMap());

      element.bind('load', function() {
        google.maps.event.trigger(map, 'resize');
        zoomToTrail(trail);
        resizeMap();
      });

      $scope.trailMap = map;

      function buildPoly(pathString) {
        return pathString ? google.maps.geometry.encoding.decodePath(pathString) : null;
      }
      function resizeMap() {
        if (typeof map == 'undefined') return;
        setTimeout(function() { resizingMap(); } , 400);
      }
      function resizingMap() {
        if (typeof map == 'undefined') return;
         var center = map.getCenter();
         google.maps.event.trigger(map, 'resize');
         map.setCenter(center);
      }
    }
  };
});
