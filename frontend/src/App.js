import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
import Tutorials from './pages/tutorials';
import APIs from './pages/apis';
import Stories from './pages/stories';

export const getStories = async () => {
	try {
		const response = await fetch('/stories')
		let results = await response.json();
		console.log(results)
	} catch (e) {
		console.error('Error getting data from stories route')
	}
}

/* Functions to send requests to backend */
const requestHeaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
}

const requestOptionsGet = {
	method: 'GET',
	// headers: requestHeaders
}

export const getTutorials = async () => {
	try {
		const response = await fetch(`/tutorials`);
		let results = await response.json();
		return results.tutorials
	} catch (err) {
		console.error(`Error calling getTutorials`);
	}

}



/* Main App Component */

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/' exact element={<Home />} />
				<Route path='/tutorials' element={<Tutorials />} />
				<Route path='/apis' element={<APIs />} />
        <Route path='/stories' element={<Stories />} />
			</Routes>
		</Router>
	);
}

export default App;
