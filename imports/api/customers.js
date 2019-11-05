import { Mongo } from 'meteor/mongo';

// create a Mongo collection for our customers
Customers = new Mongo.Collection('customers');

// export a insertCustomer function for to be used
// on both our client and server
export function insertCustomer(name) {
  Customers.insert({ name, createdAt: new Date() });
}

// export a deleteCustomer function for well... deleting the customer
export function deleteCustomer(customer) {
  Customers.remove(customer._id);
}

export default Customers;

