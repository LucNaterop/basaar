angular.module('basaar').controller('ProfileController', function($scope, $reactive, $state){
	var self = this;
	$reactive(this).attach($scope);

	self.doLogoutAction = function(){
		$state.go('notabs.login');
	}
});