class TodoModel {
    id: number;
    text: string;
    isCompleted: boolean;

    constructor(id: number, text: string) {
        this.id = id;
        this.text = text;
        this.isCompleted = false;
    }
}

export default TodoModel;