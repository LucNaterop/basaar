
angular.module('basaar').controller('CreatePostController', function($scope, $reactive, $state, uploadPicture){
	var self = this;
	$reactive(this).attach($scope);

	self.newPost = {};

	if($state.current.name == 'notabs.createpost'){
		self.type = 'Angebot';
	} else {
		self.type = 'Nachfrage';
	}
	self.newPost.title = '';
	self.newPost.description = '';
	self.newPost.imageIDs = [];

	self.absenden = function(newPost){

		if(self.type == 'Angebot'){
			Posts.insert(newPost);
		} else {
			Requests.insert(newPost);
		}

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
