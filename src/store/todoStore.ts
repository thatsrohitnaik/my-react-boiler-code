import { create } from "zustand";
import useSWR from "swr";
import { fetchTodo } from "../fetcher";

interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

interface TodoStore {
    todo: Todo,
    getTodo: () => void,
}

export const useTodoStore = create<TodoStore>()((set) => {

    const todo = {
        "userId": 2,
        "id": 2,
        "title": "Do something",
        "completed": false
    }

const todo2 = {
        "userId": 2,
        "id": 2,
        "title": "Do something new",
        "completed": false
    }
    const getTodo = () => {
        const { data } = useSWR("https://jsonplaceholder.typicode.com/todos/1", fetchTodo);
        
        console.log("xyz")

        return set(() => {
            return { todo: todo2 }
        })
    }

    return {
        todo: todo,
        getTodo: getTodo
    }

})