import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Customers, { deleteCustomer } from '../api/customers';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';

class Info extends Component {

	handleDelete(customer) {
		return () => deleteCustomer(customer);
	};

	render() {
		const customers = this.props.customers.map(
			customer => this.makeLink(customer)
		);

		return (
			<div>
				<h2>List of customers:</h2>
				{ customers }
			</div>
		);
	}

	makeLink(customer) {
		return (
			<Chip key={customer._id}
				label={customer.name}
				onDelete={this.handleDelete(customer)}
			/>
		);
	}
}

export default InfoContainer = withTracker(() => {
	return {
		customers: Customers.find().fetch(),
	};
})(Info);
