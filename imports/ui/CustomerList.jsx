import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Customers, { deleteCustomer } from '../api/customers';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';

// CustomerList - component to list the current customers

class CustomerList extends Component {

	// Delete a customer when you press the delete button on the customer Chip
	handleDelete(customer) {
		return () => deleteCustomer(customer);
	};

	// makeLink is called on each customer and a Material UI Chip is returned
	makeLink(customer) {
		return (
			<Chip key={customer._id}
				label={customer.name}
				onDelete={this.handleDelete(customer)}
			/>
		);
	}

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
}

// withTracker keeps track of all the changes to the customer list
// and will update the component every time there's changes
export default CustomerList = withTracker(() => {
	return {
		customers: Customers.find().fetch(),
	};
})(CustomerList);
