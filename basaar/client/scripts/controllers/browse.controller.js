angular.module('basaar').controller('BrowseController', function($scope, $reactive, $ionicActionSheet, $ionicModal){
	var self = this;
	$reactive(this).attach($scope);

	self.helpers({
		posts(){
			return Posts.find();
		}
	});


	self.createPost = function(){
		$ionicActionSheet.show({
			buttons: [
				{ text: '<b>Angebot</b> erstellen' },
				{ text: '<b>Nachfrage</b> erstellen' }
			],
			titleText: 'Was möchtest du hinzufügen?',
			cancelText: 'Abbrechen',
			buttonClicked: function(index) {
				if(index == 0){

					// open modal
					$ionicModal.fromTemplateUrl('client/templates/modals/create-post.html', {
						scope: 						$scope,
						backdropClickToClose: 		false,
						hardwareBackButtonClose: 	false,
						animation: 					'slide-in-up'
					}).then(function (modal){
						$scope.modal = modal;
						modal.show();
					});

				} else if(index == 1){
				}
				return true;
			}
		});
	};

	// ----- Create Post Methods -------

	$scope.closeModal = function(){
		$scope.modal.hide();
	};

});

