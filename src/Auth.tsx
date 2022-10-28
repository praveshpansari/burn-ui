import { useNavigate, Outlet } from '@solidjs/router';
import { createRoot, onMount, Show } from 'solid-js';
import { createStore } from 'solid-js/store';
import { me } from './services/auth.service';

const initialState = {
    isAuthenticated: false,
    currentUser: null,
};

const [store, setStore] = createStore(initialState);

export const Auth = () => {
    return (
        <Show
            when={!store.isAuthenticated}
            fallback={() => {
                useNavigate()('/');
                return <div />;
            }}
        >
            <Outlet />
        </Show>
    );
};

function createAuth() {
    onMount(async () => {
        if (localStorage.getItem('token')) {
            setStore('isAuthenticated', true);
            await loadCurrentUser();
        }
    });

    const loadCurrentUser = async () => {
        try {
            const user = await me();
            setStore('currentUser', user);
        } catch (error) {
            console.error(error);
        }
    };

    const setToken = async (token: string) => {
        localStorage.setItem('token', token);
        setStore('isAuthenticated', true);
        await loadCurrentUser();
    };

    return { store, setToken };
}

export default createRoot(createAuth);
