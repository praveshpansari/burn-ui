// import { createContext, createSignal, useContext } from "solid-js";
// import { createStore } from "solid-js/store";
// import { me } from "./services/Auth.service";
// const AuthContext = createContext();

// const initialState = {
//   isAuthenticated: false,
//   token: null,
//   currentUser: null,
// };

// export function AuthProvider(props: any) {
//   const [store, setStore] = createStore(initialState);
//   const loadUser=async () => {
//     const user = await me()
//   }

//   return (
//     <AuthContext.Provider value={token}>{props.children}</AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }
