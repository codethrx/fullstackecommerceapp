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
function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <StateContext>
        <Navbar />
        <Component {...pageProps} />
      </StateContext>
    </Provider>
  );
}

export default MyApp;
