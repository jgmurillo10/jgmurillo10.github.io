(function () {
  "use strict";
  angular.module('public')
  .controller('AppController',AppController);

  AppController.$inject = ['$translate'];
  function AppController($translate) {
    let app = this;
    app.name = 'Juan G Murillo';
    app.language = 'en';
    app.es = false;
    app.languages = ['en', 'es'];
    app.updateLanguage =  function() {
      if(app.change){
        $translate.use('es');
      }else{
        $translate.use('en');
      }
    }
    
  }
})();
