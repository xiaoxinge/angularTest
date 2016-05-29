function config($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/home/index');
    $stateProvider
    .state('home',{
        url:'/home',
        templateUrl:'view/content.html'
    })
    .state('home.index',{
        url:'/index',
        templateUrl:'view/index.html',
        data:{
            'title':'小新哥'
        },
        controller:'index'
    })
    .state('home.list',{
        url:'/list?name&love',
        templateUrl:'view/list.html',
        controller:'list'
    })
    
    .state('home.product',{
        url:'/product',
        templateUrl:'view/product.html',
        controller:'product'
    })
    .state('home.about',{
        url:'/about',
        templateUrl:'view/about.html',
        controller:'about'
    })
    .state('user',{
        url:'/user',
        templateUrl:'view/content2.html'
    })
    .state('user.info',{
        url:'/info',
        templateUrl:'view/info.html'
    })

}

    angular.module('app')
    .config(config)