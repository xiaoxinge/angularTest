function pageTitle($rootScope){
    return {
        link:function(scope,element){
        var func=function(event,tostate){
            var title='小艾';
            if(tostate.data&&tostate.data.title) title += '&&'+tostate.data.title;
            element.text(title)
        }         
        $rootScope.$on('$stateChangeStart',func)
        }   
    }
}

function createDom(){
    return {
        link:function(scope,element){
            console.log(scope)
            var str="";
            for(var i=0;i<scope.arr.length;i++){
                str+="<li>id:"+scope.arr[i]+"</li>"
            }
            element.append(str)
        }
    }

}


angular.module('app')
       .directive('pageTitle',pageTitle)
       .directive('createDom',createDom)