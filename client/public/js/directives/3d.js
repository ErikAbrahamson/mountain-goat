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

function parseString(polyline) {
  var brackets = new RegExp(/(\(|\))/g);
  var first = polyline.replace(brackets, ' ').split(' , ');
  console.log(first);

}

// function cartesian(x, y, x) {}
//
// x = R * cos(lat) * cos(lon)
// y = R * cos(lat) * sin(lon)
// z = R *sin(lat)
