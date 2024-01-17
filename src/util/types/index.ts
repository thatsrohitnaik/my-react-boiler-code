export interface TodoInterface {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export type Todo = TodoInterface | {}

export interface TodoStore {
    todo: Todo | {},
    getTodo: () => void,
    setTodo: (todo:Todo | {}) => void
}

export interface ApiError {
    error: string
}