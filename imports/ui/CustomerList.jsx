import React from 'react';
import Typography from "@material-ui/core/Typography";
import { withTracker } from 'meteor/react-meteor-data';
import Customers, { deleteCustomer } from '../api/customers';
import Chip from '@material-ui/core/Chip';

// CustomerList - component to list the current customers

function CustomerList(props) {

  // makeLink is called on each customer and a Material UI Chip is returned
  const makeLink = (customer) => {
    return (
      <Chip key={customer._id}
        label={customer.name}
        onDelete={() => deleteCustomer(customer)}
      />
    );
  };

  const customers = props.customers.map(
    customer => makeLink(customer)
  );

  return (
    <div>
      <Typography
        variant="h4">
        List of customers
      </Typography>
      <div style={{paddingTop: 10}}>
        { customers }
      </div>
    </div>
  );
}

// withTracker keeps track of all the changes to the customer list
// and will update the component every time there's changes
export default CustomerList = withTracker(() => {
  return {
    customers: Customers.find().fetch(),
  };
})(CustomerList);
