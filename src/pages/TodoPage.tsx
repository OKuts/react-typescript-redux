import {FC} from 'react'
import {NavLink, Outlet, useParams} from "react-router-dom";

export const TodoPage: FC = () => {

    return (
        <div>
            <h2>Todo page</h2>
            <nav>
                <NavLink to='todos'>Todos</NavLink>
                <NavLink to='todo'>Todo</NavLink>
            </nav>
            <Outlet/>
        </div>

    )
}