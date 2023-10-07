import { Component } from '@angular/core';
import { Todo } from './todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {

  newtodo: string = '';
  todos: Todo[] = [];


  save() {
    if(this.newtodo){
      var todo=new Todo();
      todo.data=this.newtodo;
      todo.isCompleted=true;
      this.todos.push(todo);
      this.newtodo='';


    }
    else{
      alert('invalid');
    }
  }

  deleteTask(index: number): void {
    this.todos.splice(index, 1);
  }

  done(id: number): void {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }

}
