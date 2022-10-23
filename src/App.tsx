import { Route, Router, Routes } from "solid-app-router";
import type { Component } from "solid-js";
import Header from "./shared/header";
import Login from "./pages/login";

const App: Component = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
