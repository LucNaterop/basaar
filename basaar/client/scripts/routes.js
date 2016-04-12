angular.module('basaar').config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/tab/browse');

	// ABSTRACT state for tabs

	$stateProvider.state('tab', {
		url: '/tab',
		abstract: true,
		templateUrl: 'client/templates/tabs.html'
	}); 

	// ----------- TABS -------------

	$stateProvider.state('tab.browse', {
		url: '/browse',
		views: {
			'tab-browse': {
				templateUrl: 'client/templates/tab-browse.html',
				controller: 'BrowseController as Browse'
			}
		}
	});

	$stateProvider.state('tab.favorites', {
		url: '/favorites', 
		views: {
			'tab-favorites': {
				templateUrl: 'client/templates/tab-favorites.html',
				controller: 'FavoritesController as Favorites'
			}
		}
	});

	$stateProvider.state('tab.notifications', {
		url: '/notifications', 
		views: {
			'tab-notifications': {
				templateUrl: 'client/templates/tab-notifications.html',
				controller: 'NotificationsController as Notifications'
			}
		}
	});

	$stateProvider.state('tab.chats', {
		url: '/chats', 
		views: {
			'tab-chats': {
				templateUrl: 'client/templates/tab-chats.html',
				controller: 'ChatsController as Chats'
			}
		}
	});

});