var app = angular.module('PreSchool', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider
		.when('/home', {
			templateUrl: '../pages/home.html',
			controller: 'homeCtrl'
		})
		.when('/about', {
			templateUrl: '../pages/about.html',
			controller: 'aboutCtrl'
		})
		.when('/calendar', {
			templateUrl: '../pages/calendar.html',
			controller: 'calendarCtrl'
		})
		.when('/contact', {
			templateUrl: '../pages/contact.html',
			controller: 'contactCtrl'
		})
		.when('/curriculum', {
			templateUrl: '../pages/curriculum.html',
			controller: 'curriculumCtrl'
		})
		.when('/forms', {
			templateUrl: '../pages/forms-registration.html',
			controller: 'formsCtrl'
		})
		.when('/pricing', {
			templateUrl: '../pages/pricing-schedule.html',
			controller: 'pricingCtrl'
		})
		.otherwise({
			redirectTo: '/home'
		})
	});