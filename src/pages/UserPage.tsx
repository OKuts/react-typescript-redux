import {FC} from 'react'
import {NavLink, Outlet, useParams} from "react-router-dom";

export const UserPage: FC = () => {

    return (
        <div>
            <h2>User page</h2>
            <nav>
                <NavLink to='users'>Users</NavLink>
                <NavLink to='user'>User</NavLink>
            </nav>
            <Outlet/>
        </div>

    )
}