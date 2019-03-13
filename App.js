import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { ApolloProvider } from "react-apollo";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-client-preset";

import Navigator from "./src/navigation";
StatusBar.setHidden(true);

const httpLink = new HttpLink({
  uri: "https://api.graph.cool/simple/v1/cjas06pop10yl0172jsvu48hn"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

import store from "./src/redux/store";

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Navigator />
    </Provider>
  </ApolloProvider>
);

export default App;
