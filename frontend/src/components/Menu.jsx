import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '@material-ui/core/Tab';

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
			items: [],
		};
		this.fetchServices = this.fetchServices.bind(this);
	}

	componentWillMount() {
		this.fetchServices();
	}

	fetchServices() {
		fetch('http://localhost:8000/api/menu-items.json')
			.then((response) => {
				return response.json();
			})
			.then((myJson) => {
				// this.setState({
				// 	data: myJson,
				// });
			});
		fetch('http://localhost:8000/api/menu-categories.json')
			.then((response) => {
				return response.json();
			})
			.then((myJson) => {
				console.table(myJson);
				this.setState({
					categories: myJson,
				});
			});
	}

	render() {
		let categories = [
			{
				title: 'placeholder',
			},
			{
				title: 'placeholder',
			},
		];
		let items = [
			{
				title: 'placeholder',
				category: 'placeholder',
			},
		];

		const category_tabs = this.state.categories.map((category) => (
			<Tab label={category.title} />
		));
		const menu_panels = items.map((item) => (
			<TabPanel index={0}>{item.title}</TabPanel>
		));

		return (
			<div>
				<AppBar
					position="static"
					style={{ backgroundColor: 'gold', color: 'black' }}
				>
					<Tabs aria-label="simple tabs example">{category_tabs}</Tabs>
				</AppBar>
				{menu_panels}
			</div>
		);
	}
}

export default Menu;
