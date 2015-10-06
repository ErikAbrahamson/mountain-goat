app.controller('mainController', function($scope, $http) {

  $scope.getStuff = function() {
    $http.get('/api/service')
      .success(function(data) {
        $scope.trails = data.segments;
        console.log($scope.trails);
      })
      .error(function(error) {
        console.log('Error: ' + error);
      });
  };


  // $scope.createVehicle = function() {
  //   $http.post('/api/v1/vehicles/', $scope.formData)
  //     .success(function(data) {
  //       $scope.formData = {}; // clears the form every entry
  //       $scope.vehicles.push(data);
  //       console.log(data);
  //     })
  //     .error(function(error) {
  //       console.log('Error: ' + error);
  //     });
  // };
  //
  // $scope.deleteVehicle = function(id) {
  //   $http.delete('/api/v1/vehicles/' + id)
  //     .success(function(data) {
  //       $scope.vehicles.splice(data, 1);
  //       console.log(data);
  //     })
  //     .error(function(error) {
  //       console.log('Error: ' + error);
  //     });
  // };
  //
  //   $scope.editVehicle = function(id) {
  //   $http.put('/api/v1/vehicles/' + id, $scope.modalData)
  //     .success(function(data) {
  //       data = $scope.modalData;
  //       console.log(data)
  //       // $route.reload()
  //       $scope.$apply();
  //     })
  //     .error(function(error) {
  //       console.log('Error: ' + error);
  //     });
  // };
});
