var map;

function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 39.179751, lng: -104.987866},
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
    path: google.maps.geometry.encoding.decodePath('y`knFt}okSLLbBJPDNNPFf@CNOXGXAd@Bn@HVEt@]b@BVNp@x@d@TBl@YbAWBSKa@_AS]g@Gg@Ji@Fg@ROZG^FlAD\\?d@YP@d@b@EROLWHm@Dq@NaATFO|@TL^Lf@d@f@Pv@Hh@ITKNSFUd@iC?_@H[ZLz@D^JXRJXXd@TLh@Hp@`AXBXCb@XB^a@JQJk@CYOS_@oBi@[ESRn@PVr@ZZr@fBFj@UhA?b@Gl@k@EkAwAg@LAr@Uv@a@l@Id@Mb@A`@PFJVBt@E\\]KMc@QWW`C?v@Hj@{@`@e@~@]`AQVa@HSJWPQ`@'),
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  trail.setMap(map);
  zoomToTrail(trail);
}
