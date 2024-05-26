import React from "react";
import { BrowserRouter } from "react-router-dom";
import SpaceApp from "./SpaceApp";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<SpaceApp />
		</BrowserRouter>
	);
}

export default App;
