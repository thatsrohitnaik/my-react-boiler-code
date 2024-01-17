import { useTodoStore } from '../store/todoStore';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { get as getSWR } from './fetcher'
import { Todo } from "../util/types/";

export const useApp = () => {
  const [number, setNumber] = useState(1);
  const store = useTodoStore();

  const { data } = useSWR("https://jsonplaceholder.typicode.com/todos/" + number, getSWR<Todo>);

  useEffect(() => {
    console.log("number changed to ", number)
    store.setTodo(data || {})
  }, [number])

  return [setNumber];
}