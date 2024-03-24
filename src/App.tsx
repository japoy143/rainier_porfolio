import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Content from "./components/Content";

function App() {
  const [isblack, setBlack] = useState<boolean>(true);
  const theme = isblack ? "#040303" : "#F9F9F9";

  return (
    <div className="h-screen w-full " style={{ backgroundColor: theme }}>
      <Nav isdark={isblack} setDark={setBlack} />
      <Content isdark={isblack} />
    </div>
  );
}

export default App;
