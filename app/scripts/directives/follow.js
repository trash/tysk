'use strict';
angular.module('tyskApp')

.directive('follow', [function () {
	return {
		restrict: 'A',
		link: function ($scope, $el) {
			window.onscroll = function () {
				var scrollValue = 'translateY(' + window.scrollY/2 + 'px)';
				$el.css('-webkit-transform', scrollValue);
			};
		}
	};
}]);