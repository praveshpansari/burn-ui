import type { Component } from "solid-js";
import Navbar from "./shared/nav-bar";
import styles from "./App.module.css";

const App: Component = () => {
  return (
    <header>
      <Navbar />
    </header>
  );
};

export default App;
