 export type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }
  export const fetchTodo = (url: string) =>
    fetch(url).then<Todo>((r) => r.json());