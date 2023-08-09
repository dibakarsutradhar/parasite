import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/skills" element={""}></Route>
				<Route path="/projects" element={""}></Route>
				<Route path="/contact" element={""}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
