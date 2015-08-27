// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core','ionic.service.push','ngCordova','ionic.service.analytics', 'starter.controllers'])
.run(function($ionicPlatform, $ionicAnalytics, $cordovaStatusbar) {
  $ionicPlatform.ready(function() {
    //Register ionic analytics
    $ionicAnalytics.register();
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      // cordova.plugins.Keyboard.disableScroll(true);

    }
    // if (window.StatusBar) {
      $cordovaStatusbar.overlaysWebView(false);
      // $cordovaStatusBar.style(2);
      $cordovaStatusbar.styleHex('#303F9F');
      // org.apache.cordova.statusbar required
      // StatusBar.styleDefault();
      // StatusBar.hide();
    // }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/rubyonic/menu.html",
    controller: 'NavigationCtrl'
  })

  .state('app.login', {
    url: "/login",
    views: {
      'menuContent': {
        templateUrl: "templates/rubyonic/login.html"
      }
    }
  })

  .state('app.profile', {
    url: "/profile",
    views: {
      'menuContent': {
        templateUrl: "templates/rubyonic/profile.html"
      }
    }
  })

  .state('app.forms', {
    url: "/forms",
    views: {
      'menuContent': {
        templateUrl: "templates/rubyonic/forms.html"
      }
    }
  })

  .state('app.feed', {
    url: "/feed",
    views: {
      'menuContent': {
        templateUrl: "templates/rubyonic/feed.html"
      }
    }
  })

  .state('app.chat-list', {
    url: "/chat-list",
    views: {
      'menuContent': {
        templateUrl: "templates/rubyonic/chat-list.html"
      }
    }
  })

  .state('app.chat-ui', {
    url: "/chat-ui",
    views: {
      'menuContent': {
        templateUrl: "templates/rubyonic/chat-ui.html"
      }
    }
  })

  .state('app.view-post', {
    url: "/view-post",
    views: {
      'menuContent': {
        templateUrl: "templates/rubyonic/view-post.html"
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
