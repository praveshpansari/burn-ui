import { Route, Router, Routes } from "solid-app-router";
import type { Component } from "solid-js";
import Header from "./shared/header";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import _404 from "./pages/404";

const App: Component = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Home} />
        <Route path="*" component={_404} />
      </Routes>
    </Router>
  );
};

export default App;
