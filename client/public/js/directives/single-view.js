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

      var singleTrail = new google.maps.Polyline({
        path: buildPoly($scope.trail.points),
        geodesic: true,
        strokeColor: '#0D0',
        strokeOpacity: 1.0,
        strokeWeight: 3
      });

      singleTrail.setMap(map);
      zoomToTrail(singleTrail);

      google.maps.event.addDomListener(window, "resize", resizingMap());
      google.maps.event.trigger(map, 'resize');

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
         trail.setMap(map);
         zoomToTrail(trail);
      }
      var currCenter = map.getCenter();
      console.log(currCenter);

      element.on('shown.bs.modal', function(e) {
        google.maps.event.trigger(map, 'resize');
        return map.setCenter();
      });
      element.on('load', function(e) {
        google.maps.event.trigger(map, 'resize');
        return map.setCenter();
      });
    }
  };
});
