//inject ngRoute  for all our routing needs
angular.module('routerRoutes',['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: '../views/pages/home.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
       .state('about', {
    	    url: '/about',
	     	templateUrl: '../views/pages/about.html'   
        })
       .state('contact',{
       		url: '/contact',
       		templateUrl: '../views/pages/contact.html'
       })
       .state('portfolio',{
       		url: '/portfolio',
       		templateUrl: '../views/pages/portfolio.html'
       })

       .state('portfolio.grupoacera', {
       		url: '/grupoacera',
       		templateUrl: '../views/pages/portfolio/grupoacera.html'
       })

       .state('portfolio.rming', {
       		url: '/rming',
       		templateUrl: '../views/pages/portfolio/rming.html'
       })

       .state('portfolio.myvacations', {
       		url: '/myvacations',
       		templateUrl: '../views/pages/portfolio/myvacations.html'
       })
       .state('porfolio.myapp', {
        url: '/myapp',
        template: '../views/pages/portfolio/myapp.html'
       })
         // nested list with custom controller
		    // .state('home.list', {
		    //     url: '/list',
		    //     templateUrl: '../views/pages/home-list.html',
		    //     controller: function($scope) {
		    //         $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
		    //     }
		    // })

		    // // nested list with just some random string data
		    // .state('home.paragraph', {
		    //     url: '/paragraph',
		    //     template: 'I could sure use a drink right now.'
		    // })  

    $locationProvider.html5Mode(true);
        
});