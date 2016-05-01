angular.module('basaar').factory('uploadPicture', function($ionicActionSheet, $ionicBackdrop, $ionicLoading){
    return {
        'upload': function(callback){
          $ionicActionSheet.show({
              titleText: 'Picture',
              buttons: [
                  { text: '<i class="icon ion-camera"></i> From Camera' },
                  { text: '<i class="icon ion-images"></i> From Library' },
              ],
              cancelText: 'Cancel',
              cancel: function() {
              },
              buttonClicked: function(index) {
                var cameraOptions = {  
                  width: 500,
                  height: 500,
                  quality: 80,
                  correctOrientation: true
                }
                if (index === 1) {  // From Library
                    if(Meteor.isCordova){
                      cameraOptions.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
                    } else {
                      alert('not available in browser');
                    }
                }

                MeteorCamera.getPicture(cameraOptions, function(error, localData){
                    options = {
                        apiKey: "391ebba772242a6",
                        mashapeKey: "gpIfI6aXh9msh6PWcG6gK3IRWkHkp1eXlxBjsnZKZzqWwifuOH",
                        image: localData
                    }
                    if(localData){
                        console.log('retain...');
                        $ionicBackdrop.retain();
                        $ionicLoading.show();
                    }
                    Imgur.upload(options, function(error, remoteData){
                        if(error){
                            console.log(error);
                            $ionicBackdrop.release();
                            $ionicLoading.hide();

                        } else{
                            console.log('release');
                            $ionicBackdrop.release();
                            $ionicLoading.hide();
                            callback(remoteData.id);
                        }
                    });
                });
                return true;
              },
          });

        }
    }
});

