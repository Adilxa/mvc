import React from 'react'
import UserModel from '../Model/UserModel'

interface Props {
    usersList: UserModel[]
}

const UsersView: React.FC<Props> = ({ usersList }) => {


    return (
        <ol>
            {
                usersList.map((el) => (
                    <li>{el.name} {el.email}</li>
                ))
            }
        </ol>
    )
}

export default UsersView