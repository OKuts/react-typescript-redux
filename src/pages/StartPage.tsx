import {FC} from 'react'
import {NavLink, Outlet} from "react-router-dom";

interface IPropsType {

}

export const StartPage: FC<IPropsType> = () => {
    return (
        <>
            <h1>Start page </h1>
            <nav>
                <NavLink to='/todos'>Todos</NavLink>
                <NavLink to='/users'>Users</NavLink>
            </nav>
            <Outlet/>
        </>
    )
}