/**
 * Created by ShanuRahul on 3/4/2015.
 */

'use strict';

angular.module('ooteyApp')
    .directive('ootImg', function(imageResizeService){

      return {
        restrict:'A',
        link: function($scope,$element,attrs){
          var imgUrl = $scope.$eval(attrs.ootImg),
            opts = $scope.$eval(attrs.ootImgConfig);

          attrs.$set('src', imageResizeService.resize(imgUrl,opts));
        }
      };
  });
