interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

interface TodoStore {
    todo: Todo,
    getTodo: () => void,
    setTodo: (todo:Todo | null) => void
}
