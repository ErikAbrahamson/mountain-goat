var trace = {
  x: [], y: [], z: [],
  mode: 'lines',
  marker: {
    color: '#1f77b4',
    size: 12,
    symbol: 'circle',
    line: {
      color: 'rgb(0,0,0)',
      width: 0
    }
  },
  line: {
    color: '#1f77b4',
    width: 1
  },
  type: 'scatter3d'
};
var data = [trace];
var layout = {
  title: '3D Line Plot',
  autosize: false,
  width: 500,
  height: 500,
  margin: {
    l: 0,
    r: 0,
    b: 0,
    t: 65
  }
};
Plotly.newPlot('3d-plot', data, layout);

function parseString(polyline, trace) {
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
    var temp = createXYZ(coords[l][0], coords[l][1]);
    trace.x.push(temp.x);
    trace.y.push(temp.y);
    trace.z.push(temp.z);
  }
}

function createXYZ(lat, lon) {
  Math.radians = function(coord) { return coord * (Math.PI/180); };
  var newLat = Math.radians(lat), newLon = Math.radians(lon);
  var R = 6378137.0, XYZ = {
      x: R * Math.cos(newLat) * Math.cos(newLon),
      y: R * Math.cos(newLat) * Math.sin(newLon),
      z: R * Math.sin(newLat)
    };
  return XYZ;
}
