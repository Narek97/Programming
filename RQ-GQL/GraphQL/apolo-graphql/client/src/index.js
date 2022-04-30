import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
);

