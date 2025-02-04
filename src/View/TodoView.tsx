import TodoModel from "../Model/TodoModel";

const TodoView:
    React.FC<{ todos: TodoModel[], deleteTodo: (id: number) => void }>
    = ({ todos, deleteTodo }) => {
        return (
            <ul>
                {todos.map(todo => (
                    <li onClick={() => deleteTodo(todo.id)} key={todo.id}>{todo.text} {todo.id}</li>
                ))}
            </ul>
        );
    };

export default TodoView;