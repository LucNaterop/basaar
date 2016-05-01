angular.module('basaar').controller('BrowseController', function($scope, $reactive, $state, $ionicViewSwitcher, $ionicActionSheet, $ionicModal){
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
					$state.go('notabs.createpost');
				} else if(index == 1){
					$state.go('notabs.createrequest');
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

