import Auth from '../Auth';
import { client } from './client.service';

export async function handleLogin(credentials: { email: string; password: string }) {
    const { setToken } = Auth;

    // await new Promise((r) => setTimeout(r, 5000));
    const response = await client
        .mutation(
            `mutation($email:String!,$password:String!){
            login(email:$email,password:$password){
              token
            }
          }`,
            credentials,
        )
        .toPromise();
    if (response.error) throw new Error(response.error.graphQLErrors[0].message);
    else {
        await setToken(response.data.login.token);
    }
}

export async function me() {
    const response = await client
        .query(
            `
              query{
                me{
                  _id,
                  user_name,
                  first_name,
                  last_name,
                  email,
                  role
                }
              }
            `,
            {},
        )
        .toPromise();

    if (response.error) throw new Error(response.error.message);
    else return response.data.me;
}
