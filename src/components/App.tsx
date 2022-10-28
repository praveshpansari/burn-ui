import { Route, Router, Routes } from '@solidjs/router';
import { Component } from 'solid-js';
import Header from './shared/header';
import Footer from './shared/footer';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import _404 from './pages/404';
import { Auth } from '../Auth';

const App: Component = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="" component={Auth}>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Route>
                <Route path="/" component={Home} />
                <Route path="*" component={_404} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
