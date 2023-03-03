import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ContextProvider } from "./context/contextProvides";



function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Header />
        <Outlet />
      </ContextProvider>


    </div>
  );
}

export default App;
