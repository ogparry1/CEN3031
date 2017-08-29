angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.temp = "Detailed Information";
    $scope.selected = "";
    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      $scope.listings.push({"code":$scope.codeBox, "name":$scope.nameBox})
    };

    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };

    $scope.showDetails = function(index) {
      $scope.selected = $scope.listings[index];
    };
  }
]);
