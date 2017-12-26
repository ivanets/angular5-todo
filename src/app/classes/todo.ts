import {Tag} from './tag';

export class Todo {
    id: number;
    text: string;
    completed: boolean;
    tags: Tag[];

    constructor(id: number, text: string) {
        this.id = id;
        this.text = text;
        this.completed = false;
    }
}