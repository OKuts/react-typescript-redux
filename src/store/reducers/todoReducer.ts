import {ITodosState, TodosAction, TodosActionTypes} from "../../types/todos";

const initialState: ITodosState = {
    todos: [],
    loading: false,
    error: null
}

export const todoReducer = (state = initialState, action: TodosAction): ITodosState => {
    switch (action.type) {
        case TodosActionTypes.FETCH_TODOS :
            return {todos: [], loading: true, error: null}
        case TodosActionTypes.FETCH_TODOS_SUCCESS :
            return {todos: action.payload, loading: false, error: null}
        case TodosActionTypes.FETCH_TODOS_ERROR :
            return {todos: [], loading: false, error: action.payload}
        default:
            return state
    }
}