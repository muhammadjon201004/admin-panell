import { Route, Routes } from "react-router-dom";

import NavbarTs from "./pages/NavbarTs";
import Posts from "./pages/Posts";
import Todo from "./pages/Todo";
import Users from "./pages/Users";
import { useState } from "react";
import { Switch } from "@heroui/switch";


function App() {
  const [mod, setMod] = useState<boolean>(true)
  return (
    <div className={mod ? "light text-foreground bg-background transition-[1s]" : "dark text-foreground bg-background transition-[1s]"}>
      <div className="flex justify-center">
        <NavbarTs />
      <Switch
        aria-label="Automatic updates"
        className="pt-3.5 relative -right-[30%]"
        defaultSelected
        onValueChange={(v) => setMod(v)}
      />
      </div>
      <Routes>
        <Route element={<Users />} path="/" />
        <Route element={<Posts />} path="/posts" />
        <Route element={<Todo />} path="/todos" />
      </Routes>
    </div>
  );
}

export default App;
