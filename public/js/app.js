angular.module('routerApp',['routerRoutes', 'ngAnimate'])

//create the controllers
//this will be the controller for the entire SITE

.controller('mainController',function(){
	var vm=this;

	//create a big message var to display in our view 
	vm.bigMessage = 'A smooth sea never made a skilled sailor. ';
})

//home page specific controller

.controller('homeController', function(){
	var vm=this;

	vm.message = 'This is the home page!. ';
})

//about page controller

.controller('aboutController', function(){
	var vm=this;

	vm.message = 'This is the about page. ';
})

//contact page controller

.controller('contactController', function(){
	var vm=this;

	vm.message = 'This is the contact page. ';
})