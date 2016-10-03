angular.module('routerApp', ['routerRoutes'])

//create the controllers
//this will be the controller for the entire site

.controller('mainController', function(){
	var vm = this;

	//create a big message

	vm.bigMessage = 'Welcome to my page! ';
})

//home page controller

.controller('homeController', function(){
	var vm=this;
	vm.message = 'Home';
})

//about page controller
.controller('aboutController', function(){
	var vm=this;
	vm.message = 'About';
})
//contact page controller
.controller('contactController', function(){
	var vm =this;
	vm.message='Contact me!';
});