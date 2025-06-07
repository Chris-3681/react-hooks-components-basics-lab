import React, { useState } from "react";
import ItemForm from "./ItemForm"; // Make sure this file exists

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

function App() {
  const [items, setItems] = useState([]);

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]); // immutable update
  }

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      {/* Add ItemList here if you're displaying the list */}
    </div>
  );
}

export default App;