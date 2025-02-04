import React from "react";
import TodoModel from "../Model/TodoModel";
import TodoView from "../View/TodoView";

const TodoController: React.FC = () => {
    const [todos, setTodos] = React.useState<TodoModel[]>([]);

    const addTodo = (text: string) => {
        const newTodo = new TodoModel(todos.length + 1, text);
        setTodos([...todos, newTodo]);
    };

    return (
        <div>
            <button onClick={() => addTodo("New Todo")}>Add Todo</button>
            <TodoView todos={todos} />
        </div>
    );
};


export default TodoController;