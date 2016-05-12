app.controller('SiteController', ['$scope', function($scope) {

    // Header options.
    $scope.header = {
        sequence: 'name'
    };

    // Header animations.
    setTimeout(function() {
        $scope.header.sequence = 'centerpiece';
    }, 1000);
}]);
