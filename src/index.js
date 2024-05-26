import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import ErrorBoundary from "./ErrorBoundary";

const client = new ApolloClient({
	uri: "http://localhost:4000/graphql", // Update this to your backend URL on Render
	cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<ErrorBoundary>
				<App />
			</ErrorBoundary>
		</ApolloProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { ApolloProvider } from "@apollo/client";
// import client from "./apolloClient";

// const container = document.getElementById("root");
// const root = createRoot(container);

// root.render(
// 	<React.StrictMode>
// 		<ApolloProvider client={client}>
// 			<App />
// 		</ApolloProvider>
// 	</React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
