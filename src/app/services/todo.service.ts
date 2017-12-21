import {Injectable} from '@angular/core';
import {Todo} from '../classes/todo';

@Injectable()
export class TodoService {

    private todos: Todo[];
    private nextId: number;

    constructor() {
        this.todos = [
            new Todo(0, 'Disturb Deekay'),
            new Todo(1, 'Make dinner tonignt'),
            new Todo(2, 'Create an Angular Todo App')
        ];
        this.nextId = 3;
    }

    public updateStore() {
        localStorage.setItem('angular2-todos', JSON.stringify(this.todos));
    }

    public getLockalStorage() {
        this.todos = JSON.parse(localStorage.getItem('angular2-todos') || '[]');
    }

    public addTodo(text: string): void {
        // console.log(this.todos);
        let todo = new Todo(this.nextId, text);
        this.todos.push(todo);
        this.nextId++;
        this.updateStore();
    }

    public getTodos(): Todo[] {
        this.getLockalStorage();
        return this.todos;
    }

    public removeTodo(id: number): void {
        this.todos = this.todos.filter((todo) => todo.id !== id);
        this.updateStore();
    }

    public updateCompletion(Todo) {
        this.todos
            .filter((todo) => todo.id === Todo.id)
            .map((todo) => todo.completed = Todo.completed);
        this.updateStore();
    }


    private getWithCompleted(completed: Boolean) {
        return this.todos.filter((todo) => todo.completed === completed);
    }

    private removeCompleted() {
        this.todos = this.getWithCompleted(false);
        this.updateStore();
    }

    private getCompleted() {
        return this.getWithCompleted(true);
    }
}

