function index($scope){
    
}

function list($scope,$location){
    $scope.arr=[1,2,3,4,5];
    
    $scope.getInfo=function(){
        $location.path('/user/info')
    }
}

function product($scope){
   
}

function about($scope){
    
}
function dom($scope){
    $scope.name='小新爱小艾'  
}







angular.module('app')
       .controller('index',index)
       .controller('list',list)
       .controller('product',product)
       .controller('about',about)
       .controller('dom',dom)