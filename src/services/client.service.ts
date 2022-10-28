import { createClient } from '@urql/core';

export const client = createClient({
    url: 'http://localhost:8080/graphql',
    fetchOptions: () => {
        const token = localStorage.getItem('token');
        return token ? { headers: { Authorization: `bearer ${token}` } } : {};
    },
});
