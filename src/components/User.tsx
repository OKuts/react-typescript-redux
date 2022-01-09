import {FC} from 'react'
import {useLocation, useNavigate} from "react-router-dom";
import {IUser} from "../types/users";

export const User: FC = () => {
    const navigate = useNavigate()
    const user = useLocation().state
    const currentUser = user as unknown as IUser

    return (
        <div>
            <h1>User</h1>
            <button onClick={() => navigate(-1)}>Back</button>
            {user && <p key={currentUser.id}>{currentUser.name}</p>}

        </div>
    )
}