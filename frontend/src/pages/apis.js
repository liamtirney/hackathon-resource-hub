import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import ApisTiles from '../components/ApisTile/ApisTile';
import { getApis } from '../App.js';

const sampleData = {
	title: "OpenAI API",
	image: "https://images.unsplash.com/photo-1684493735679-359868df0e18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3BlbmFpfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
	description: "An API that is used to generate natural language, code, images, and convert speech into text",
	docsLink: "https://platform.openai.com/docs/introduction",
	youtubeLinks: {title: "How to get started with OpenAI API", link: "https://www.youtube.com/watch?v=MOe3RH8sHT8"},
	articleLinks: {title: "A Guide to the  OpenAI API", link: "https://www.makeuseof.com/openai-api-guide-what-can-you-do/"}
}

const APIs = () => {
	

	useEffect(() => {
		getApis();
	})

	const getApisTiles = () => {
		let apisTiles = [];
		for (let i = 0; i < 9; i++) {
			apisTiles.push(<ApisTiles data={sampleData}/>)
		}
		return apisTiles;
	}

	return (
		<div>
			<h1>APIs</h1>
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
				{getApisTiles()}
			</Box>
		</div>
	);
};

export default APIs;