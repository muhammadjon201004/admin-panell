import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/NavbarTs";
import { Button , ButtonGroup } from "@heroui/button" ;    
import NavbarTs from "./pages/NavbarTs";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Todo from "./pages/Todo";


function App() {
  return (
<>
   <NavbarTs/>
   <Routes>
    <Route path="/" element={<Users/>}></Route>
    <Route path="/posts" element={<Posts/>}></Route>
    <Route path="/todos" element={<Todo/>}></Route>
   </Routes>
</>
  );
}

export default App;
