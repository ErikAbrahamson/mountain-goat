app.directive('editModal', function() {
  return {
    restrict: 'EA',
    replace: false,
    controller: 'renderController',
    controllerAs: 'renderController',
    templateUrl: './partials/modal.html',
    link: function($scope, element, attrs) {

      $scope.buildCoords($scope.points, $scope.trace);
      $scope.trace = {
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
          width: 2
        },
        type: 'scatter3d'
      };
      var data = [trace];
      var layout = {
        title: '3D Line Plot',
        autosize: false,
        width: 800,
        height: 500,
        margin: {
          l: 0,
          r: 0,
          b: 0,
          t: 65
        }
      };
      Plotly.newPlot('3d-plot', data, layout);
    }
  };
});
