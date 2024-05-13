import "./style.css";
import { Route, Routes } from "react-router-dom";
import Characters from "./pages/Characters";
import Main from "./pages/Main";
import Nav from "./components/Nav";
import { useState } from "react";
import CharacterInfo from "./pages/CharacterInfo";

export default function App () {
  const [characterInfo, setCharacterInfo] = useState(null);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/characters" element={<Characters setCharacterInfo={setCharacterInfo}/>}/>
        <Route path="/info/:name" element={<CharacterInfo characterInfo={characterInfo}/>}/>
      </Routes>
    </div>
  );
}