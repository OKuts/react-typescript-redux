import {ITodosState, TodosAction, TodosActionTypes} from "../../types/todos";

const initialState: ITodosState = {
    todos: [],
    loading: false,
    error: null,
    limit: 10,
    page: 1,
}

export const todoReducer = (state = initialState, action: TodosAction): ITodosState => {
    switch (action.type) {

        case TodosActionTypes.FETCH_TODOS :
            return {...state, loading: true}

        case TodosActionTypes.FETCH_TODOS_SUCCESS :
            return {...state, todos: action.payload, loading: false, error: null}

        case TodosActionTypes.FETCH_TODOS_ERROR :
            return {...state, loading: false, error: action.payload}

        case TodosActionTypes.SET_TODOS_PAGE :
            return {...state, page: action.payload}

        default:
            return state
    }
}