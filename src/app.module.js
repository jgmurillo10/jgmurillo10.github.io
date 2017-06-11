//IIFE
(function () {
  "use strict"
  angular.module('app', ['public','pascalprecht.translate'])
  .config(config)
  config.$inject = ['$translateProvider']
  function config($translateProvider) {
    $translateProvider.translations('en', {
        TITLE: 'Welcome!',
        MESSAGE: 'This app supports your language!',
        en: 'English',
        es: 'Spanish',
        occu: 'Web Developer',
        home:'Home',
        about:'About',
        projects:'Projects',
        contact:'Contact'
      })
      .translations('es', {
        TITLE: 'Bienvenido!',
        MESSAGE: 'Esta aplicacion soporta tu lenguage!',
        en: 'Inglés',
        es: 'Español',
        occu: 'Desarrollador Web',
        home:'Inicio',
        about:'Acerca de mí',
        projects:'Proyectos',
        contact:'Contacto'
      });

      $translateProvider.preferredLanguage('en');
  }
  // .config(config);
  // config.$inject = ['$urlRouterProvider'];
  // function config($urlRouterProvider) {
  //   $urlRouterProvider.otherwire('/');
  // }
})();
