import { Mongo } from 'meteor/mongo';

Customers = new Mongo.Collection('customers');

export function insertCustomer(name) {
	Customers.insert({ name, createdAt: new Date() });
}

export function deleteCustomer(customer) {
	Customers.remove(customer._id);
}

export default Customers;

