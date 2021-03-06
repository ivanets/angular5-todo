import {Injectable} from '@angular/core';
import {Todo} from '../classes/todo';
import {Tag} from '../classes/tag';
import {isEmpty} from 'rxjs/operator/isEmpty';

@Injectable()
export class TodoService {

    private todos: Todo[];
    private todosId: number;
    private tags: Tag[];
    private tagsId: number;

    constructor() {
        this.todos = [];
        this.todosId = 0;
        this.tags = [];
        this.tagsId = 0;
    }

    public updateTodo() {
        localStorage.setItem('angular2-todos', JSON.stringify(this.todos));
    }

    public getLockalTodo() {
        this.todos = JSON.parse(localStorage.getItem('angular2-todos') || '[]');
    }

    public addTodo(text: string): void {
        this.getLockalTodo();
        let todo = new Todo(this.todos.length > 0 ? this.todos.length : 0, text);
        this.todos.push(todo);
        this.updateTodo();
    }

    public getTodos(): Todo[] {
        this.getLockalTodo();
        return this.todos;
    }

    public removeTodo(id: number): void {
        this.todos = this.todos.filter((todo) => todo.id !== id);
        this.updateTodo();
    }

    public updateCompletion(Todo) {
        this.todos
            .filter((todo) => todo.id === Todo.id)
            .map((todo) => todo.completed = Todo.completed);
        this.updateTodo();
    }


    public getWithCompleted(completed: Boolean) {
        return this.todos.filter((todo) => todo.completed === completed);
    }

    public removeCompleted() {
        this.todos = this.getWithCompleted(false);
        this.updateTodo();
    }

    public getCompleted() {
        return this.getWithCompleted(true);
    }

    public updateTag() {
        localStorage.setItem('angular2-tags', JSON.stringify(this.tags));
    }

    public getLockalTag() {
        this.tags = JSON.parse(localStorage.getItem('angular2-tags') || '[]');
    }

    public addTags(name: string): void {
        this.getLockalTag();
        let tag = new Tag(this.tags.length > 0 ? this.tags.length : 0, name);
        this.tags.push(tag);
        this.updateTag();
    }

    public removeTag(id: number) {
        this.tags = this.tags.filter((tag) => tag.id !== id);
        this.updateTag();
    }

    public getTags(): Tag[] {
        this.getLockalTag();
        return this.tags;
    }
}

