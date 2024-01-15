import { create } from "zustand";
import { get } from "../rest/";
import { persist, createJSONStorage } from "zustand/middleware";

export const useTodoStore = create<TodoStore>()(persist((set) => {

    const todo = {
        "userId": 2,
        "id": 2,
        "title": "Do something",
        "completed": false
    }

    const getTodo = () => {
        const fetch = async () => {
            const todo = await get("https://jsonplaceholder.typicode.com/todos/1");
            return set(() => {
                return { todo }
            })
        }
        return fetch();
    }

    const setTodo = (todo:Todo | null) => {
        if(todo)
        return set(() => {
            return { todo }
        })
    }

    return {
        todo: todo,
        getTodo: getTodo,
        setTodo: setTodo
    }

}, {
    name: 'animal-store', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
}))