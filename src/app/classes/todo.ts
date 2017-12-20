export class Todo {
    id: number;
    text: string;
    complited: boolean;

    constructor(id: number, text: string) {
        this.id = id;
        this.text = text;
        this.complited = false;
    }
}