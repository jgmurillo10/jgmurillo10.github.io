(function () {
	/* IIFE */

	'use strict';

	angular.module('JuanMurilloApp')
	.config(RoutesConfig);

	RoutesConfig.$inject=['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig ($stateProvider, $urlRouterProvider) {
		//redirects home if no url matches

		$urlRouterProvider.otherwise('/');


		// setup UI states
		$stateProvider

		.state('home', {
			url: '/',
			templateUrl: 'src/templates/home.tpl.html',
			controller: 'MainController as home'
		})
		.state('about', {
			url:'/about',
			templateUrl: 'src/templates/about.tpl.html',
			controller: 'MainController as about'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'src/templates/contact.tpl.html',
			controller: 'MainController as contact'
		})
		.state('projects', {
			url: '/projects',
			templateUrl: 'src/templates/projects/timeline.tpl.html',
			controller: 'TimelineController as time'
		})
		.state('grupoacera', {
			url: '/grupoacera',
			templateUrl: 'src/templates/projects/grupoacera.tpl.html',
			controller: 'TimelineController as time'
		})
		.state('gloop', {
			url: '/gloop',
			templateUrl: 'src/templates/projects/gloop.tpl.html',
			controller: 'TimelineController as time'
		})
		.state('misvacaciones', {
			url: '/misvacaciones',
			templateUrl: 'src/templates/projects/misvacaciones.tpl.html',
			controller: 'TimelineController as time'
		})
		.state('rming', {
			url: '/rming',
			templateUrl: 'src/templates/projects/rming.tpl.html',
			controller: 'TimelineController as time'
		})
		.state('wellcol', {
			url: '/wellcol',
			templateUrl: 'src/templates/projects/wellcol.tpl.html',
			controller: 'TimelineController as time'
		});
	};

})();