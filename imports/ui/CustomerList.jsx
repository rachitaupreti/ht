import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Customers from '../api/customers';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Info extends Component {
	render() {
		const customers = this.props.customers.map(
			customer => this.makeLink(customer)
		);

		return (
			<div>
				<h2>List of customers:</h2>
				<List component="nav">{ customers }</List>
			</div>
		);
	}

	makeLink(customer) {
		return (
			<ListItem key={customer._id}>
				<ListItemText primary={customer.name} />
			</ListItem>
		);
	}
}

export default InfoContainer = withTracker(() => {
	return {
		customers: Customers.find().fetch(),
	};
})(Info);
