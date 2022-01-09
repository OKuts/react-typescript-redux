import {Dispatch} from "redux";
import axios from "axios";
import {TodosAction, TodosActionTypes} from "../types/todos";

export const fetchTodos = () => {
    return async (dispatch: Dispatch<TodosAction>) => {
        try {
            dispatch({type: TodosActionTypes.FETCH_TODOS})
            const response  = await axios.get('https://jsonplaceholder.typicode.com/todos')
            dispatch({type: TodosActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: TodosActionTypes.FETCH_TODOS_ERROR, payload: 'Error'})
        }
    }
}