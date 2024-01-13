import { LayoutComponent } from './Layout';
import { BodyComponent } from './layout/Body';
import { FooterComponent } from './layout/Footer';
import { HeaderComponent } from './layout/Header';
import { LeftPanelComponent } from './layout/LeftPanel';
import { RightPanelComponent } from './layout/RightPanel';
import { SideNavComponent } from './components/SideNav';
import { MainPage } from './page/main';
// import { useTodoStore } from './store/todoStore';

function App() {

  // const todo = useTodoStore()

  return (
    <>
    {/* <p>{todo?.todo.title}</p>
    <button onClick={()=>{ todo.getTodo()}}>click me</button> */}
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
