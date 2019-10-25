import { Meteor } from 'meteor/meteor';
import Customers from '/imports/api/customers';

function insertCustomer(name) {
	Customers.insert({ name, createdAt: new Date() });
}

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
