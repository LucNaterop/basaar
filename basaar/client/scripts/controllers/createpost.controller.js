
angular.module('basaar').controller('CreatePostController', function($scope, $reactive, $state, uploadPicture){
	var self = this;
	$reactive(this).attach($scope);

	self.newPost = {};

	self.newPost.title = '';
	self.newPost.description = '';
	self.newPost.imageIDs = [];

	self.absenden = function(newPost){
		Posts.insert(newPost);

		self.newPost.title = '';
		self.newPost.description = '';
		self.newPost.imageIDs = [];

		$state.go('tabs.browse');
	};

	self.addPicture = function(){
		uploadPicture.upload(function(imageID){
			self.newPost.imageIDs.push(imageID);
		});
	}
});
