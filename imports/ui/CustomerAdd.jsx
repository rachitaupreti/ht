import React, { useState } from 'react';
import { insertCustomer } from '../api/customers';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { navigate } from 'hookrouter';

// CustomerAdd - a component to add a customer to the database

export default function CustomerAdd() {
  // We keep the value of the text field, by using the react useState hook
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addCustomer = () => {
    // Insert the text in the text field into the database.
    insertCustomer(value);
    
    // go back to /customers after the insert
    navigate('/customers');
  };

  return (
    <div>
      <TextField id="customer-name"
        label="Customer Name"
        onChange={handleChange}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            addCustomer();
          }
        }}
      />
      <br />
      <br />
      <Button variant="contained" color="primary"
        onClick={() => { addCustomer(); }}>
        Add
      </Button>
    </div>
  );
}
