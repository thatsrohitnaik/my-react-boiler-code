import { LayoutComponent } from './Layout';
import { BodyComponent } from './layout/Body';
import { FooterComponent } from './layout/Footer';
import { HeaderComponent } from './layout/Header';
import { LeftPanelComponent } from './layout/LeftPanel';
import { RightPanelComponent } from './layout/RightPanel';
import { SideNavComponent } from './components/SideNav';
import { MainPage } from './page/main';
import useSWR from "swr";
import { fetchTodo } from "./rest/fetcher/";
import { useTodoStore } from './store/todoStore';
import { useEffect } from 'react';

function App() {

  const todo = useTodoStore()

  const { data, error } = useSWR("https://jsonplaceholder.typicode.com/todos/3", fetchTodo);

  useEffect(()=>{
    todo.setTodo(data || null)
  },[])

  const onClickHandler = () =>{
    console.log( "www", data)
  }


  return (
    <>
      <p>{todo?.todo.title}</p>
      <button onClick={onClickHandler}>click me</button>
      <LayoutComponent>
        <HeaderComponent />
        <BodyComponent rightPaneWeight={8} leftPaneWeight={4}>
          <LeftPanelComponent>
            <SideNavComponent />
          </LeftPanelComponent>
          <RightPanelComponent>
            <MainPage />
          </RightPanelComponent>
        </BodyComponent>
        <FooterComponent />
      </LayoutComponent>
    </>
  );
}

export default App;
