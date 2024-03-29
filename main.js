function TodoCtrl($scope){
  $scope.todos = [
    {text: 'learn angular', done:true},
    {text: 'build a lil angular app', done:false}];

  $scope.addTodo = function(){
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };

  $scope.deleteTodo = function(item){
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  };

  $scope.remaining = function(){
    var count = 0;
    angular.forEach($scope.todos, function(todo){
      count += todo.done ? 0:1;
    });
    return count;
  };

  $scope.archive = function(){
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo){
      if(!todo.done)$scope.todos.push(todo);
    });
  };
}