import React from 'react';
import {UserList} from "../components/UserList";
import {Route, Routes} from "react-router-dom";
import {UserPage} from "./UserPage";
import {User} from "../components/User";
import '../styles/style.scss'
import {TodoPage} from "./TodoPage";
import {TodoList} from "../components/TodoList";
import {StartPage} from "./StartPage";
import {Todo} from "../components/Todo";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<StartPage/>}>
                <Route path='users' element={<UserPage/>}>
                    <Route index element={<UserList/>}/>
                    <Route path='users' element={<UserList/>}/>
                    <Route path='user' element={<User/>}/>
                </Route>
                <Route path='todos' element={<TodoPage/>}>
                    <Route index element={<TodoList/>}/>
                    <Route path='todos' element={<TodoList/>}/>
                    <Route path='todo' element={<Todo/>}/>
                </Route>
            </Route>
        </Routes>

    );
}

export default AppRouter;
