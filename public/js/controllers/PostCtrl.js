'use strict';

/* POST Controllers */

angular.module('basic-auth')
  .controller('ProfileCtrl', ['$scope', '$http', '$auth', 'Auth', function($scope, $http, $auth, Auth) {
    $http.get('/api/me').then(function(data) {
      $scope.user = data.data;
    });
  }])
  .controller('UserEditCtrl', ['$scope', '$http', '$auth', 'Auth', '$location', function($scope, $http, $auth, Auth, $location) {
  	$http.get('/api/me').then(function (data) {
  		$scope.user = data.data;
  	});

  	$scope.editUser = function() {
	  	$http.put('/api/me', $scope.user).then(function (data) {
	  		$scope.user = data;
	  		$location.path('/profile');
	  	});
  	};
  }]);