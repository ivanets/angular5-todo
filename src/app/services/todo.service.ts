import { Injectable } from '@angular/core';
import {Todo} from '../classes/todo';

@Injectable()
export class TodoService {

  private todos: Todo[];
  private nextId: number;
  constructor() {
    this.todos=[
      new Todo(0,"Disturb Deekay"),
      new Todo(1,"Make dinner tonignt"),
      new Todo(2,"Create an Angular Todo App")
    ];
    this.nextId = 3;
  }

  public addTodo(text:string): void{
    //console.log(this.todos);
    let todo = new Todo(this.nextId,text);
    this.todos.push(todo);
    this.nextId++;
  }

  public getTodos():Todo[]{
    return this.todos;
  }

  public removeTodo(id:number):void{
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
