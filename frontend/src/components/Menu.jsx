import React, { Component } from 'react';

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}

	render() {
		let article_info = [
			{
				title: 'placeholder',
			},
		];
		fetch('http://localhost:8000/api/menu-items.json')
			.then((response) => {
				return response.json();
			})
			.then((myJson) => {
				article_info = myJson;
				console.table(article_info);
				// this.setState({
				// 	data: myJson,
				// });
			});

		return (
			<div>
				{/* <h3>{this.state.data[0].title}</h3>
				<p>{this.state.data[0].created_at}</p>
				<p>{this.state.data[0].message}</p> */}
			</div>
		);
	}
}

export default Menu;
