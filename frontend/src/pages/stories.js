import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import StoriesTile from '../components/StoriesTile/StoriesTile';
import { getStories } from '../App.js';

const sampleData = {
	title: "Sergei Garcia",
	tagLine: "From no CS Degree to a Fortune 500 Software Developer",
	image: "https://images.unsplash.com/photo-1681165558258-dd4f98a35823?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHxtYWxlJTIwZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
	name: "Sergei Garcia",
	body: "Random motivational message!",
	link: "https://www.freecodecamp.org/news/my-journey-to-becoming-a-web-developer-from-scratch-without-a-cs-degree-2-years-later-and-what-i-4a7fd2ff5503"
}

const Stories = () => {

	useEffect(() => {
		getStories();
	})

	const getStoriesTiles = () => {
		let storiesTiles = [];
		for (let i = 0; i < 9; i++) {
			storiesTiles.push(<StoriesTile data={sampleData}/>)
		}
		return storiesTiles;
	}

	return (
		<div>
			<h1>Stories</h1>
			<h4>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
				sed do eiusmod tempor incididunt ut labore et dolore magna 
				aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
				ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				Duis aute irure dolor in reprehenderit in voluptate velit 
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
				occaecat cupidatat non proident, sunt in culpa qui officia 
				deserunt mollit anim id est laborum.
			</h4>
			<Box display="flex" justifyContent="space-evenly"
				flexWrap="wrap" alignContent="space-evenly"
			>
				{getStoriesTiles()}
			</Box>
		</div>
	);
};

export default Stories;
