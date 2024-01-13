export type Person = {
    id: string;
    firstName: string;
    lastName: string;
    name: string;
    streetAddress: string;
    cityStateZip: string;
    phone: string;
    username: string;
    password: string;
    email: string;
    avatar: string;
  };
  
  type PeopleResponse = {
    people: Person[];
  };
  
  type TodoResponse = {
    todo : Todo;
  }

 export type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }
  export const fetchTodo = (url: string) =>
    fetch(url).then<Todo>((r) => r.json());