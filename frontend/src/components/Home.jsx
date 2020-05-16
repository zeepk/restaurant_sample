import React from 'react';
import styled from 'styled-components';
import RestImage from '../images/rest_background.jpg';

const HomePage = styled.div`
	height: 100vh;
	background-image: url(${RestImage});
`;
const H1 = styled.h1`
	padding: 25vh 0 0 5vw;
	margin: 0;
	color: white;
	font-size: 100px;
`;

export default function Home() {
	return (
		<HomePage>
			<H1>Local Taqueria</H1>
		</HomePage>
	);
}
