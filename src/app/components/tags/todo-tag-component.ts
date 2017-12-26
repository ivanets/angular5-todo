import {Component, OnInit, Input} from '@angular/core';
import {Tag} from '../../classes/tag';
import {TodoService} from '../../services/todo.service';

@Component({
    selector: 'app-todo-teg',
    templateUrl: './todo-tag-component.html',
    styleUrls: ['./todo-tag-component.css']
})
export class TodoTagComponent implements OnInit {

    @Input()
    private tag: Tag;

    constructor(private todoService: TodoService) {
    }

    ngOnInit() {
    }

    private removeTag(): void {
        this.todoService.removeTag(this.tag.id);
    }
}