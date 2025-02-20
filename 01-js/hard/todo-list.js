/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
      this.tasks = []
  }
  
  add(todo) {
      this.tasks = [...this.tasks, todo]
  }
  
  remove(indexOfTodo) {
      if (indexOfTodo < 0 || indexOfTodo >= this.tasks.length || typeof(indexOfTodo) !== 'number' ) {
          console.log('Please input the valid index which you want to remove')
      }
      else {
          this.tasks = this.tasks.filter((task, index) => index !== indexOfTodo)
      }
  }
  
  update(position, updatedTodo) {
      if (typeof(position) !== 'number' || position >= this.tasks.length || position < 0) {
          console.log('Please input valid positions')
      }
      else {
          this.tasks = this.tasks.map((task, index) => {
              if (index === position) {
                  return updatedTodo
              }
              else {
                  return task
              }
          })
      }
  }
  
  getAll() {
      return this.tasks
  }
  
  get(indexOfTodo) {
     if (indexOfTodo < 0 || indexOfTodo >= this.tasks.length || typeof(indexOfTodo) !== 'number' ) {
          console.log('Please input the valid index which you want to find')
      } 
      else {
          return this.tasks[indexOfTodo]
      }
  }
  
  clear() {
      this.tasks = [];
  }
}

module.exports = Todo;
