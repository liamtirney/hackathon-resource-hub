import React from "react";
import Box from '@mui/material/Box';
import TutorialsTile from '../components/TutorialsTile/TutorialsTile';

const sampleData = {
	title: "Sample Tutorial",
	image: "",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
	link: "sample link",
	github: "github link",
	sampleCodeLink: "sample code link"
}

const Tutorials = () => {

	const getTutorialsTiles = () => {
		let tutorialsTiles = [];
		for (let i = 0; i < 9; i++) {
			tutorialsTiles.push(<TutorialsTile data={sampleData}/>)
		}

		return tutorialsTiles;
	}
	
	return (
		<div>
			<h1>
				Tutorials
			</h1>
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
				{getTutorialsTiles()}
			</Box>
		</div>
	);
};

export default Tutorials;
