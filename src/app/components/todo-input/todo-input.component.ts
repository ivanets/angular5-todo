import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../services/todo.service';

@Component({
    selector: 'app-todo-input',
    templateUrl: './todo-input.component.html',
    styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

    private todoText: string;
    private todoTags: string;

    constructor(private todoService: TodoService) {
        this.todoText = '';
        this.todoTags = '';

    }


    ngOnInit() {
    }

    addTodo(): void {
        this.todoService.addTodo(this.todoText);
        this.todoText = '';
    }

    addTags(): void {
        this.todoService.addTags(this.todoTags);
        this.todoTags = '';
    }

    // addTodoWithTags(): void {
    //     this.todoService.addTodo(this.todoText);
    //     this.todoService.addTags(this.todoTags);
    //     this.todoTags = '';
    //     this.todoText = '';
    // }
}
