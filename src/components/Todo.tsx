import {FC} from 'react'
import {useLocation, useNavigate} from "react-router-dom";
import {ITodo} from "../types/todos";

export const Todo: FC = () => {
    const navigate = useNavigate()
    const todo = useLocation().state
    const currentTodo = todo as unknown as ITodo

    return (
        <>
            <h1>Todo</h1>
            <button onClick={() => navigate(-1)}>Back</button>
            {todo && <p key={currentTodo.id}>{currentTodo.id} {currentTodo.title}</p>}
        </>
    )
}