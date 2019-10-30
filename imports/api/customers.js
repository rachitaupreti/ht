import { Mongo } from 'meteor/mongo';

Customers = new Mongo.Collection('customers');

export function insertCustomer(name) {
	Customers.insert({ name, createdAt: new Date() });
}

export default Customers;

