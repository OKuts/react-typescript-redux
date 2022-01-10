export enum TodosActionTypes  {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODOS_PAGE = 'SET_TODOS_PAGE',
}

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface ITodosState {
    todos: ITodo[] | [];
    loading: boolean;
    error: string | null;
    page: number;
    limit: number;
}

interface FetchTodosAction {
    type: TodosActionTypes.FETCH_TODOS;
}

interface FetchTodosSuccessAction {
    type: TodosActionTypes.FETCH_TODOS_SUCCESS;
    payload: ITodo[];
}

interface FetchTodosErrorAction {
    type: TodosActionTypes.FETCH_TODOS_ERROR;
    payload: string;
}

interface SetTodosPageAction {
    type: TodosActionTypes.SET_TODOS_PAGE;
    payload: number;
}

export type TodosAction =
    FetchTodosAction
    | FetchTodosSuccessAction
    | FetchTodosErrorAction
    | SetTodosPageAction