angular.module('basaar').controller('LoginController', function($scope, $reactive, $state){
	var self = this;
	$reactive(this).attach($scope);

	self.doLoginAction = function(){
		$state.go('notabs.profile');
	};

	self.doCreateAccountAction = function(){
		$state.go('notabs.profile');
	};

	console.log('LoginController has been executed');
});