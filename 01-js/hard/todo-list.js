/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(){
    this.list = {};
    this.index = 1;
  }
  add(todo){
    this.list[this.index] = todo;
    this.index += 1;
  }
  remove(indexOfTodo){
    delete this.list[indexOfTodo];
    const updatedObject = {};
    let newIndex = 1;
    for(const key in this.list){
      updatedObject[newIndex] = this.list[key];
      newIndex++;
    }
    this.list = updatedObject;
  }
  update(index,updatedTodo){
    this.list[index] = updatedTodo;
  }
  getAll(){
    console.log(this.list);
  }
  get(indexOfTodo){
    console.log(this.list[indexOfTodo])
  }
  clear(){
    delete this.list;
  }
}

const todo = new Todo();
todo.add('First task');
todo.add('Second task');
todo.add('third task');
todo.add('fourth task');
todo.add('fifth task');
// todo.getAll();
todo.update(1,'first updated task')
// todo.getAll();
todo.remove(2);
todo.getAll();

module.exports = Todo;
