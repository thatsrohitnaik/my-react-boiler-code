import { create } from "zustand";
import { get } from "../util/rest";
import { persist, createJSONStorage } from "zustand/middleware";
import { Todo, TodoStore } from "../util/types"

export const useTodoStore = create<TodoStore>()(persist((set) => {

    const todo = {
        "userId": 2,
        "id": 2,
        "title": "Do something",
        "completed": false
    }

    const getTodo = () => {
        const fetch = async () => {
          
            const {data} = await get<Todo>("https://jsonplaceholder.typicode.com/todos/1");
           
            return set(() => {
                return { todo : data}
            })
        }
        return fetch();
    }

    const setTodo = (todo:Todo) => {
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