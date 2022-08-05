import "../styles/globals.css";
//GraphQL
import { Provider, createClient } from "urql";
const client = createClient({
  url: "http://localhost:1337/graphql",
});

function MyApp({ Component, pageProps }) {
  console.log(process.env.NEXT_PUBLIC_DAMN);
  return (
    <Provider value={client}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
