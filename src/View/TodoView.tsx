import TodoModel from "../Model/TodoModel";

const TodoView: React.FC<{ todos: TodoModel[] }> = ({ todos }) => {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
};

export default TodoView;