var map;

function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  function zoomToTrail(trai) {
    var bounds = new google.maps.LatLngBounds();
    var points = trail.getPath().getArray();
    for (var i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    }
    map.fitBounds(bounds);
  }

  var trail = new google.maps.Polyline({
    path: buildPoly(a),
    geodesic: true,
    strokeColor: '#0D0',
    strokeOpacity: 1.0,
    strokeWeight: 3
  });

  trail.setMap(map);
  zoomToTrail(trail);
}

var a = 'y`knFt}okSLLbBJPDNNPFf@CNOXGXAd@Bn@HVEt@]b@BVNp@x@d@TBl@YbAWBSKa@_AS]g@Gg@Ji@Fg@ROZG^FlAD\\?d@YP@d@b@EROLWHm@Dq@NaATFO|@TL^Lf@d@f@Pv@Hh@ITKNSFUd@iC?_@H[ZLz@D^JXRJXXd@TLh@Hp@`AXBXCb@XB^a@JQJk@CYOS_@oBi@[ESRn@PVr@ZZr@fBFj@UhA?b@Gl@k@EkAwAg@LAr@Uv@a@l@Id@Mb@A`@PFJVBt@E\\]KMc@QWW`C?v@Hj@{@`@e@~@]`AQVa@HSJWPQ`@';

function buildPoly(pathString) {
  return pathString ? google.maps.geometry.encoding.decodePath(pathString) : null;
}
