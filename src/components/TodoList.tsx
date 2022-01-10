import {FC, useEffect} from 'react'
import {useTypedSelector} from "../hooks/useTypedSelector";
import {ITodo} from "../types/todos";
import {useNavigate} from "react-router-dom";
import {useActions} from "../hooks/useActions";

export const TodoList: FC = () => {
    const navigate = useNavigate()
    const {fetchTodos, setTodoPage} = useActions()
    const {todos, error, loading, page, limit} = useTypedSelector(state => state.todo)

    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (loading) return null
    if (error) return <h1>Error ...</h1>

    const handler = (todo: ITodo) => {
        navigate('/todos/todo', {state: todo})
    }

    return (
        <>
            {todos.map(todo =>
                <p
                    onClick={() => handler(todo)}
                    key={todo.id}>
                    {todo.id} {todo.title}
                </p>)}
            {pages.map(n =>
                <button onClick={() => setTodoPage(n)}>
                    {n}
                </button>)}
        </>
    )
}