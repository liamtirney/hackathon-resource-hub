import React from "react";
import TutorialsTile from '../components/TutorialsTile/TutorialsTile';

const sampleData = {
	title: "Sample Tutorial",
	image: "",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	link: "sample link",
	github: "github link",
	sampleCodeLink: "sample code link"
}

const Tutorials = () => {

	const getTutorialsTiles = () => {
		for (let i = 0; i < 9; i++) {

		}
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
			{getTutorialsTiles()}
		</div>
	);
};

export default Tutorials;
