import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Tutorials from './pages/tutorials';
import APIs from './pages/apis';
import Stories from './pages/stories';
import ShareStory from './pages/shareStory';

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
		console.error(`Error getting data from tutorials route`);
	}
}

export const getApis = async () => {
	try {
<<<<<<< HEAD
		const response = await fetch('/apis')
		let results = await response.json();
		return results.apis
	} catch (e) {
		console.error('Error getting data from apis route')
=======
		const response = await fetch(`/apis`);
		let results = await response.json();
		return results.apis
	} catch (err) {
		console.error(`Error getting data from apis route`);
>>>>>>> 78388f5ca283f9d4b6fa2cd93aa8e1cff539264c
	}
}

export const getStories = async () => {
	try {
		const response = await fetch('/stories')
		let results = await response.json();
		return results.stories
	} catch (e) {
		console.error('Error getting data from stories route')
	}
}

/* Main App Component */

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/tutorials' element={<Tutorials />} />
				<Route path='/apis' element={<APIs />} />
        		<Route path='/stories' element={<Stories />} />
        		<Route path='/shareStory' element={<ShareStory />} />
			</Routes>
		</Router>
	);
}

export default App;
