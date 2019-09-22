
var myApp = angular.module('myApp',[]);

myApp.controller('demoController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';

  var countries = ['USA', 'Germany', 'France', 'India', 'China'];
  $scope.demoCountries = countries;

//   $scope.totalTodos = 4;

  $scope.todos = [
      {text: 'Learn AngularJS', done: false}, {text:"Build an app", done:false}
    ]
  
  $scope.getTotalTodos = function(){
      return $scope.todos.length;
  }   

  $scope.addTodo = function(){
    $scope.todos.push({text: $scope.formTodoText, done: false});
    $scope.formTodoText = '';
  }

  $scope.clearCompleted = function() {
    $scope.todos = $scope.todos.filter(todo => !todo.done)
    };

  }]);





console.log('Hello');
