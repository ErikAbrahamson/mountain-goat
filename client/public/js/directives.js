app.directive('segmentSelection', function() {
  return {
    restrict: 'A',
    transclude: true,
    link: function($scope, element, attrs) {
      console.log(attrs);
      element.on('click', function() {
        colors = ['red','green','blue'];
        element.css('background-color', 'red');
        $scope.goodbye = "goodbye!";
      });
    }
  };
});
