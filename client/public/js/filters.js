app.filter('distance', function () {
  return function (input) {
    return (input * 0.000621371).toFixed(2);
  };
});

app.filter('climb', function() {
  return function(input) {
    if (input === 0) return 'Average climb';
    else if (input === 1) return 'Steep climb';
    else if (input === 2 || input === 3) return 'Moderate climb';
    else if (input === 4) return 'Easy climb';
    else return 'Very easy climb';
  };
});
