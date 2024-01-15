export const fetchTodo = (url: string) =>
    fetch(url).then<Todo>((r) => r.json());