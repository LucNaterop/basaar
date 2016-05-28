angular.module('basaar').config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/tab/browse');

	// ABSTRACT states for tab and notab

	$stateProvider.state('tab', {
		url: '/tab',
		abstract: true,
		templateUrl: 'client/templates/abstract-tabs.html'
	}); 

	$stateProvider.state('notabs', {
		url: '',
		abstract: true,
		templateUrl: 'client/templates/abstract-notabs.html'
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

	// ------- NOTABS ---------

	$stateProvider.state('notabs.createpost', {
		url: '/createpost',
		views: {
			'notabs': {
				templateUrl: 'client/templates/createpost.html',
				controller: 'CreatePostController as CreatePost'
			}
		}
	});

	$stateProvider.state('notabs.createrequest', {
		url: '/createrequest',
		views: {
			'notabs': {
				templateUrl: 'client/templates/createpost.html',
				controller: 'CreatePostController as CreatePost'
			}
		}
	});

	$stateProvider.state('notabs.post', {
		url: '/post/:postId',
		views: {
			'notabs': {
				templateUrl: 'client/templates/post.html',
				controller: 'PostController as Post'
			}
		}
	});

	$stateProvider.state('notabs.login', {
		url: '/login',
		views: {
			'notabs': {
				templateUrl: 'client/templates/login.html',
				controller: 'LoginController as Login'
			}
		}
	});

	$stateProvider.state('notabs.profile', {
		url: '/profile',
		views: {
			'notabs': {
				templateUrl: 'client/templates/profile.html',
				controller: 'ProfileController as Profile'
			}
		}
	});
});

