import "../styles/globals.css";
//GraphQL-- Creating a provider and client
import { Provider, createClient } from "urql";
const client = createClient({
  url: process.env.NEXT_PUBLIC_BACKEND_URL,
});
//Context API Provider
import { StateContext } from "../libs/context";
//importing components
import Navbar from "../components/Navbar";
//auth0
import { UserProvider } from "@auth0/nextjs-auth0";
function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <UserProvider>
        <StateContext>
          <Navbar />
          <Component {...pageProps} />
        </StateContext>
      </UserProvider>
    </Provider>
  );
}

export default MyApp;
