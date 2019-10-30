import { Meteor } from 'meteor/meteor';
import Customers, { insertCustomer } from '/imports/api/customers';

Meteor.startup(() => {
	// if Customers is empty, create it with some dummy customers
	if (Customers.find().count() === 0) {
		insertCustomer(
			'Omnia'
		);
		insertCustomer(
			'Nokia'
		);
	}
});
