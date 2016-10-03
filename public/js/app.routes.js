//inject ngRoute  for all our routing needs
angular.module('routerRoutes',['ngRoute'])

//configure our routes
.config(function($routeProvider,$locationProvider){
	$routeProvider


		//route for the homepage

		.when('/',{
			templateUrl: 'views/pages/home.html',
			controller: 'homeController',
			controllerAs: 'home'
		})

		//route for the about page

		.when('/about',{
			templateUrl: 'views/pages/about.html',
			controller: 'aboutController',
			controllerAs: 'about'
		})
		//route for the contact page

		.when('/contact', {
			templateUrl: 'views/pages/contact.html',
			controller: 'contactController',
			controllerAs: 'contact'
		})

		//route for portfolio page

		.when('/portfolio',{
			templateUrl: 'views/pages/portfolio.html',
			controller: 'portfolioController',
			controllerAs: 'portfolio'
		})
			//route for portfolio subpages

			.when('/portfolio/myvacations', {
				templateUrl: 'views/pages/portfolio/myvacations.html',
				controller: 'myvacationsController',
				controllerAs: 'myvacations'
			})
			.when('/portfolio/grupoacera', {
				templateUrl: 'views/pages/portfolio/grupoacera.html',
				controller: 'grupoaceraController',
				controllerAs: 'grupoacera'
			})
			.when('/portfolio/rming', {
				templateUrl: 'views/pages/portfolio/rming.html',
				controller: 'rmingController',
				controllerAs: 'rming'
			});

	//setup our app to have pretty URLS

	$locationProvider.html5Mode(true);

});

