import { Route, Router, Routes } from "@solidjs/router";
import type { Component } from "solid-js";
import Header from "./shared/header";
import Footer from "./shared/footer";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import _404 from "./pages/404";
import { createClient } from "@urql/core";
import { getToken } from "../services/Auth.service";

export const client = createClient({
  url: "http://localhost:8080/graphql",
  fetchOptions: () => {
    const token = getToken();
    return token ? { headers: { Authorization: `bearer ${token}` } } : {};
  },
});

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
      <Footer />
    </Router>
  );
};

export default App;
