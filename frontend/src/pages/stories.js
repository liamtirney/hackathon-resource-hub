import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import StoriesTile from '../components/StoriesTile/StoriesTile';
import { getStories } from '../App';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const sampleData = {
	title: "Sergei Garcia",
	tagLine: "From no CS Degree to a Fortune 500 Software Developer",
	image: "https://images.unsplash.com/photo-1681165558258-dd4f98a35823?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHxtYWxlJTIwZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
	name: "Sergei Garcia",
	body: "Random motivational message!",
	link: "https://www.freecodecamp.org/news/my-journey-to-becoming-a-web-developer-from-scratch-without-a-cs-degree-2-years-later-and-what-i-4a7fd2ff5503"
}

const Stories = () => {
	let navigate = useNavigate();
	
	const [data, setData] = useState([]);
	// const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		(async() => {
			const storiesData = await getStories();
			console.log("Here's the story data: ", storiesData);
			setData(storiesData);
			// setLoaded(true);
		})()
  	}, [])

	const getStoriesTiles = () => {
		let storiesTiles = [];
		// console.log("Test here: ", storiesTiles);
		for (let i = 0; i < data.length; i++) {
			// console.log(data[i])
			storiesTiles.push(<StoriesTile data={data[i]}/>)
		}
		return storiesTiles;
	}

	return (
		<div>
			<div id="storyHeader">
				<h1 id="storyH1">Stories</h1>
				<Button id="shareButton" variant="contained" onClick={() => navigate('/apis')}>Share</Button>
			</div>
			<h4>
				Programming is a blast, but breaking into the tech field and landing that first developer role can be a hard and arduous journey. It's important to ask yourself what you want and what your goals are, work consistently on skills that align with those goals, and understand that it takes time. If you're curious about others journey into tech, read these inspiring stories.
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
