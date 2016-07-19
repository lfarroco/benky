benky.controller('viewQuestion', 
  ['$scope', '$routeParams','$http',
   function ($scope, $routeParams,$http) {
      
    var id = $routeParams.id;
	
    $scope.status = 0;
    //0 unanswered,1 correct,2 wrong
      
    $scope.question = 
        questions[ id ];

    $scope.select = function(option){
      
     $scope.question.options
       .map(function(opt){
       
          opt.selected= "";
       
       });
        
      option.selected = "btn-info";
      
      $scope.selected = option.key;
    
    }
    
    $scope.submit = function(){
       
      if($scope.selected == $scope.question.correct){
         $scope.status = 1;
       }else{
         $scope.status = 2;
       }       
    
    }
	  
}]);