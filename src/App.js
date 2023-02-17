import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./Nav";
import Main from "./main";
import Deatail from "./Deatail";
function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <Nav theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Main theme={theme} />} />
        <Route path="/country/:name" element={<Deatail theme={theme} />} />
      </Routes>
    </div>
  );
}

export default App;
