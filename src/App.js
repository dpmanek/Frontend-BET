import React from 'react';
import './App.css';
import {
	BrowserRouter,
	//HashRouter,
} from 'react-router-dom';
import Routesr from './routes/routes';

function App() {
	return (
		<BrowserRouter basename="/">
			<Routesr />
		</BrowserRouter>
	);
}

export default App;
