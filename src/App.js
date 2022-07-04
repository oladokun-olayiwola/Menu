import React, { useState } from "react";
import Menu from "./Menu";
import { Header } from "./Header";
import Categories from "./Categories";
import items from "./data";

function App() {
   const [list, setList] = useState(items);
  return (
    <main>
      <section className="menu section">
        <Header setList={setList} list={list}/>
        <Menu foods={list} />
      </section>
    </main>
  ); 
}

export default App;
