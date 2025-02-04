const ADD_TODO = "ADD_TODO";

interface AddTodoAction {
    type: typeof ADD_TODO;
    payload: string;
}

const addTodo = (text: string): AddTodoAction => ({
    type: ADD_TODO,
    payload: text,
});

// Store
import { makeAutoObservable } from "mobx";

class TodoStore {
    todos: string[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(text: string) {
        this.todos.push(text);
    }
}

const todoStore = new TodoStore();

// View
import React from "react";

const TodoView: React.FC = () => {
    const [inputValue, setInputValue] = React.useState("");

    const handleAddTodo = () => {
        todoStore.addTodo(inputValue);
        setInputValue("");
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todoStore.todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};
