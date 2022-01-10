import {FC, useEffect, useMemo} from 'react'
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../action-creators/user";
import {useActions} from "../hooks/useActions";
import {IUser} from "../types/users";
import {useNavigate} from "react-router-dom";

export const UserList: FC = () => {
    const {fetchUsers} = useActions()
    const navigate = useNavigate()
    const {users, error, loading} = useTypedSelector(state => state.user)

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) return <h1>Loading ...</h1>
    if (error) return <h1>Server error</h1>

    const handler = (user: IUser) => {
        navigate('/users/user', {state: user})
    }

    return (
        <div>
            <h1>User List</h1>
            {users.map(user =>
                <p
                    onClick = {() => handler(user)}
                    key={user.id}>
                    {user.name}
                </p>)}
        </div>
    )
}