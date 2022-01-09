export enum TodosActionTypes  {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
}

export interface ITodo {
    userId: number
    id: number
    title: string
    completed: boolean
}

export interface ITodosState {
    todos: ITodo[] | []
    loading: boolean
    error: string | null
}

interface FetchTodosAction {
    type: TodosActionTypes.FETCH_TODOS
}

interface FetchTodosSuccessAction {
    type: TodosActionTypes.FETCH_TODOS_SUCCESS
    payload: any[]
}

interface FetchTodosErrorAction {
    type: TodosActionTypes.FETCH_TODOS_ERROR
    payload: string
}

export type TodosAction = FetchTodosAction | FetchTodosSuccessAction | FetchTodosErrorAction