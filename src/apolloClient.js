import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://space-server-cecn.onrender.com/",
	cache: new InMemoryCache(),
});

export default client;
