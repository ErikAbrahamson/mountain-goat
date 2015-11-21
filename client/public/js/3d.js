app.controller('renderController', function($scope) {

  $scope.buildCoords = function(polyline, trace) {
    var coords = [], brackets = new RegExp(/(\(|\))/g);
    var array = polyline.replace(brackets, ' ').split(' , ');
    for (var i = 0; i < array.length; i++) {
      coords.push(array[i].split(','));
    }
    for (var k = 0; k < coords.length; k++) {
      for (var j = 0; j < coords[k].length; j++) {
        coords[k][j].trim();
        coords[k][j] = +coords[k][j];
      }
    }
    for (var l = 0; l < coords.length; l++) {
      var temp = $scope.createXYZ(coords[l][0], coords[l][1]);
      $scope.trace.x.push(temp.x);
      $scope.trace.y.push(temp.y);
      $scope.trace.z.push(temp.z);
    }
  };

  $scope.createXYZ = function(lat, lon) {
    Math.radians = function(coord) { return coord * (Math.PI/180); };
    var newLat = Math.radians(lat), newLon = Math.radians(lon);
    var R = 6378137.0, XYZ = {
        x: R * Math.cos(newLat) * Math.cos(newLon),
        y: R * Math.cos(newLat) * Math.sin(newLon),
        z: R * Math.sin(newLat)
      };
    return XYZ;
  };
});
