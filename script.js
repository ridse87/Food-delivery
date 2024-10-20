// Define the AngularJS app
var app = angular.module('todoApp', []);

// Define the controller for the app
app.controller('todoController', function($scope) {

    // Initial list of tasks
    $scope.tasks = [
        { name: 'Learn AngularJS', completed: false },
        { name: 'Build a To-Do app', completed: false }
    ];

    // Function to add a new task
    $scope.addTask = function() {
        if ($scope.newTask) {
            $scope.tasks.push({ name: $scope.newTask, completed: false });
            $scope.newTask = ''; // Clear input after adding
        }
    };

    // Function to toggle completion status of a task
    $scope.toggleComplete = function(task) {
        task.completed = !task.completed;
    };

    // Function to remove a task
    $scope.removeTask = function(index) {
        $scope.tasks.splice(index, 1);
    };

});
