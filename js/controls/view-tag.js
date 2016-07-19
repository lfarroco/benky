benky.controller('viewTag', 
  ['$scope', '$routeParams','$http',
   function ($scope, $routeParams,$http) {

    var id = $routeParams.id;
    var qs = {};

    var total = 0;

    $scope.correct = 0;
    $scope.answered = 0;
    $scope.total = total;
    $scope.question = {};
    $scope.questions = qs;
    $scope.id = id;

    $scope.tag = tags [ id ];

    $scope.tag.questions.forEach(function(question){

      if(!$scope.first) $scope.first = question;

      qs[question] = questions[ question ] ;
      total++;

    });

    $scope.start = function(){

      $scope.display = true;

      $scope.open( $scope.first );

    }

    $scope.open = function(id){

      $scope.question = qs[ id ];


    } 
      
    
	  
}]);
