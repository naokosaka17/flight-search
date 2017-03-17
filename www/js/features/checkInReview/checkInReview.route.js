angular
	.module('flightManagement.checkInReview')
	.config(CheckInReviewConfig);

function CheckInReviewConfig($stateProvider) {
	$stateProvider.state({
		name: 'checkInReview',
		url: '/checkInReview',
		templateUrl: 'js/features/checkInReview/checkInReview.html',
		controller: 'CheckInReviewCtrl',
		controllerAs: 'CheckInReviewVM'
	})
}
