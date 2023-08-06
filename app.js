var app = angular.module("todoApp",[])
app.controller("todoController",todoController)

function todoController(){
    this.editMode = false;
    this.todos = [
        
        "Learn Angular 1",
        "Learn JavaScript",
        "Learn Java",
        "Learn Selenium",
        "Learn Python",

    ];

    this.addNewTodo = function(){
        if(this.newTodo===''){
            
        }
        this.todos.push(this.newTodo);
        this.newTodo = "";
    }
    this.triggerEditMode = function(){
        this.editMode = !this.editMode;
    }
    this.deleteTheTodo = function(index){
        this.todos.splice(index,1);
    }
}