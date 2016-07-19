benky.config(['$routeProvider',function($routeProvider) {
  $routeProvider
  .when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		})
		.when('/home', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		})
		.when('/questions', {
			templateUrl : 'pages/list-questions.html',
			controller  : 'listQuestions'
		})
 		.when('/questions/add', {
			templateUrl : 'pages/new-question.html',
			controller  : 'newQuestion'
		})
		.when('/question/:id', {
			templateUrl : 'pages/view-question.html',
			controller  : 'viewQuestion'
		})
  .when('/tags', {
			templateUrl : 'pages/list-tags.html',
			controller  : 'listTags'
		})
  .when('/tags/add', {
			templateUrl : 'pages/new-tag.html',
			controller  : 'newTag'
		})
		.when('/tag/:id', {
			templateUrl : 'pages/view-tag.html',
			controller  : 'viewTag'
		})
		;

}]);