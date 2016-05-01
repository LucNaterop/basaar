angular.module('basaar').controller('PostController', function($scope, $reactive, $stateParams){
	var self = this;
	$reactive(this).attach($scope);

	this.helpers({
		'post': function(){
			return Posts.findOne($stateParams.postId);
		}
	});
});

