import {FC, useEffect} from 'react'
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchTodos} from "../action-creators/todo";
import {ITodo} from "../types/todos";
import {useNavigate} from "react-router-dom";

export const TodoList: FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {todos, error, loading} = useTypedSelector(state => state.todo)

    useEffect(() => {
        dispatch(fetchTodos())
    }, [])

    if (loading) return <h1>Loading ...</h1>
    if (error) return <h1>Error ...</h1>

    const handler = (todo: ITodo) => {
        navigate('todo', {state: todo})
    }

    return (
        <>
            {todos.map(todo =>
                <p
                    onClick = {() => handler(todo)}
                    key={todo.id}>
                    {todo.id} {todo.title}
                </p>)}
        </>
    )
}