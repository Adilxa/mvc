import React from "react";
import TodoModel from "../Model/TodoModel";
import TodoView from "../View/TodoView";

const TodoController: React.FC = () => {
    const [todos, setTodos] = React.useState<TodoModel[]>([]);

    const addTodo = (text: string) => {
        const newTodo = new TodoModel(todos.length + 1, text);
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id: number) => {
        const filterArr = todos.filter((el) => el.id !== id)
        setTodos(filterArr)
    }

    return (
        <div>
            <button onClick={() => addTodo("New Todo")}>Add Todo</button>
            <TodoView todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
};


export default TodoController;