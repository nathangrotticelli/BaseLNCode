angular.module('starter.controllers', [])

.controller('MenuCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};
  // Perform the login action when the user submits the login form

})

.controller('NavigationCtrl', function($scope, $state, $ionicHistory) {
  // Function to go states. We're using ng-click="go('app.state')" in all our anchor tags
  $scope.go = function(path){
      // console.log('working. Click was Triggered');
      $state.go(path);
      console.log($ionicHistory.viewHistory());
  };

  //Function to go back a step using $ionicHistory
  $scope.goBackAStep = function(){
      console.log('clicked');
      $ionicHistory.goBack();
  };

  $scope.eventFeed = [];

  $scope.eventFeed.push({
    'name':'LiveNow: Raising the Bar :D',
    'likes': [],
    'comments': [],
    'image': 'img/demo/guitar.jpg'
  });

  $scope.eventFeed.push({
    'name':'A Berry Fun Event',
    'likes': [],
    'comments': [],
    'image': 'img/demo/berry.jpg'
  });

   $scope.eventFeed.push({
    'name':'A 2nd Berry Fun Event',
    'likes': [],
    'comments': [],
    'image': 'img/demo/berry.jpg'
  });

})
// .controller('DashCtrl', function($scope, $rootScope, $ionicPush, $ionicUser, $http) {

//   $scope.registerWithPushService = function() {
//     $ionicPush.register({
//       canShowAlert: true, // Can pushes show an alert on your screen?
//       canSetBadge: true, // Can pushes update app icon badges?
//       canPlaySound: true, // Can notifications play a sound?
//       canRunActionsOnWake: true, // Can run actions outside the app,
//       onNotification: function(notification) {
//         // Handle push notifications here
//         // console.log(notification);
//         return true;
//       }
//     });
//   };

//   // Handles incoming device tokens
//   $rootScope.$on('$cordovaPush:tokenReceived', function(event, data) {
//     // alert("Successfully registered token " + data.token);
//     console.log('Ionic Push: Got token ', data.token, data.platform);
//     $scope.token = data.token;
//   });
//    <button class="button button-block button-positive" ng-if="identified" ng-click="registerWithPushService()">
//       Register for Push
//     </button>
//     <button class="button button-block button-dark" ng-click="identifyUser()">
//       Identify a user
//     </button>
//   // Identifies a user with the Ionic User service
//   $scope.identifyUser = function() {
//     var user = $ionicUser.get();
//     if(!user.user_id) {
//       // Set your user_id here, or generate a random one.
//       user.user_id = $ionicUser.generateGUID();
//     };
//     // Add some metadata to your user object.
//     angular.extend(user, {
//       name: 'Ionic Serve Web Test User'
//       // bio: 'I come from planet Ion'
//     });
//     // Identify your user with the Ionic User Service
//     $ionicUser.identify(user).then(function(){
//       $scope.identified = true;
//       // alert('Identified user ' + user.name + '\n ID ' + user.user_id);
//     });
//   };
//   // Once you're ready to move off development pushes, you'll want to set dev_push to false in your .config(), or remove it entirely.

// })

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
