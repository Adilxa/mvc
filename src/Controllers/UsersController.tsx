import React from 'react'
import UserModel from '../Model/UserModel';
import UsersView from '../View/UsersView';

export default function UsersController() {

    const [users, setUsers] = React.useState<UserModel[]>([]);

    const [name, setName] = React.useState<string>("");

    const addUser = (name: string, email: string) => {
        const newTodo = new UserModel(users.length + 1, name, email);
        setUsers([...users, newTodo]);
    };

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => addUser(name, "@.com")}>Add User</button>
            <UsersView usersList={users} />
        </div>
    )
}
