import { Link } from "solid-app-router";
import { Component } from "solid-js";
import flame from "../assets/flame.png";
import Login from "../pages/login";

const App: Component = () => {
  return (
    <header class="flex justify-between items-center py-8 px-[10%] font-monster font-medium text-base text-slate-800 no-underline">
      <a href="#">
        <img src={flame} alt="logo" class="cursor-pointer" width="64px"></img>
      </a>
      <nav>
        <ul class="list-none">
          <li class="inline-block px-5">
            <Link
              class="transition-all ease-in-out duration-300 hover:text-slate-300"
              href="#"
            >
              Contact
            </Link>
          </li>
          <li class="inline-block px-5">
            <Link
              class="transition-all ease-in-out duration-300 hover:text-slate-300"
              href="#"
            >
              Contact
            </Link>
          </li>
          <li class="inline-block px-5">
            <Link
              class="transition-all ease-in-out duration-300 hover:text-slate-300"
              href="#"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <a href="/login" class="login">
        <button class="px-6 py-2 transition-all ease-in-out duration-300 border-black border-2 hover:bg-black hover:text-white">
          LOGIN
        </button>
      </a>
    </header>
  );
};

export default App;
