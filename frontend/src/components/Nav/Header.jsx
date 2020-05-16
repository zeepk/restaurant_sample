import React from 'react';
// import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	Link,
} from 'react-router-dom';
const LinkText = styled.div`
	color: white;
	padding: 0 20px 0 0;
	text-decoration: none;

	&:hover {
		text-decoration: none;
	}
`;

const Li = styled.li`
	display: inline-block;
	color: white;
	padding: 20px 10px;
	&:hover {
		background-color: #5467d6;
	}
`;
const Ul = styled.ul`
	margin: 0;
`;
export default function Header() {
	const preventDefault = (event) => event.preventDefault();
	return (
		<AppBar position="static">
			<Toolbar variant="dense">
				<Ul>
					<Li>
						<Link to="/home" style={{ textDecoration: 'none' }}>
							<LinkText>Home</LinkText>
						</Link>
					</Li>
					<Li>
						<Link to="/menu" style={{ textDecoration: 'none' }}>
							<LinkText>Menu</LinkText>
						</Link>
					</Li>
					<Li>
						<Link to="/contact" style={{ textDecoration: 'none' }}>
							<LinkText>Contact</LinkText>
						</Link>
					</Li>
				</Ul>
			</Toolbar>
		</AppBar>
	);
}
