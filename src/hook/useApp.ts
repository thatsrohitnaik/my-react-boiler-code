import { useTodoStore } from '../store/todoStore';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetchTodo } from '../rest/fetcher';

export const useApp = () =>{
    const [number, setNumber] = useState(1);
    const todo = useTodoStore()
    const { data} = useSWR("https://jsonplaceholder.typicode.com/todos/"+number, fetchTodo);
    useEffect(()=>{
      console.log("number changed to ", number)
      todo.setTodo(data || null)
    },[number])

    return [setNumber];
}