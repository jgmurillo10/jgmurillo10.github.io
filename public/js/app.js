angular.module('routerApp',['routerRoutes'])


.controller('portfolioController', function($scope){
	$scope.message= 'This is my portfolio, below this you will some some of the projects I made/collaborated'
	$scope.products = [
	{
		name: 'Grupo Acera',
		duration: '3',
		description: 'Web page for a colombian company specialized in civil engineer. ',
		state: 'portfolio.grupoacera',
		webpage: 'http://www.grupoacera.com',
		thumbnail: '../img/500x500.png'
	},
	{
		name: 'RM Ingenieria',
		duration: '3',
		description: 'Web page for a colombian company specialized in electrical engineer. ',
		state: 'portfolio.rming',
		webpage: 'https://www.rmingenieria.com.co',
		thumbnail: '../img/500x500.png'

	},
	{
		name: 'My Vacations',
		duration: '4.3',
		description: 'Web Application made with AngularJS, Java EE for an university project. ',
		state: 'portfolio.myvacations',
		webpage: 'http://www.rmingenieria.com.co',
		thumbnail: '../img/500x500.png'

	},
	{
		name: 'My App',
		duration: 'in progress..',
		description: 'Web Application made with AngularJS, Java EE for particular interest. ',
		state: 'portfolio.myapp',
		webpage: 'https://www.github.com/jgmurillo10',
		thumbnail: '../img/500x500.png'

	}

	]
})

.controller('scotchController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
});