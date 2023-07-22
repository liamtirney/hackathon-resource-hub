import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
import Tutorials from './pages/tutorials';
import APIs from './pages/apis';
import Stories from './pages/stories';

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