import "../styles/globals.css";
//GraphQL-- Creating a provider and client
import { Provider, createClient } from "urql";
const client = createClient({
  url: process.env.NEXT_PUBLIC_BACKEND_URL,
});
//importing components
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
