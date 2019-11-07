import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import { withTracker } from 'meteor/react-meteor-data';
import Customers, { insertCustomer, deleteCustomer } from '../api/customers';
import Chip from '@material-ui/core/Chip';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// CustomerList - component to list the current customers

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  snackbar: {
    [theme.breakpoints.down('xs')]: {
      bottom: 90,
    },
  },
}));

function CustomerList(props) {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [newValue, setNewValue] = useState("");

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

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleAdd = () => {
    insertCustomer(newValue)
    setDialogOpen(false);
    setSnackbarOpen(true);
  };

  const handleChange = (event) => {
    setNewValue(event.target.value);
  };

  return (
    <div>
      <Typography
        variant="h4">
        List of customers
      </Typography>
      <div style={{paddingTop: 10}}>
        { customers }
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={ <span id="message-id">Customer added</span> }
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={handleSnackbarClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
        className={classes.snackbar}
      />
      <Fab color="primary" aria-label="add" className={classes.fab}
        onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <Dialog open={dialogOpen} onClose={handleClose} aria-labelledby="customer-add">
        <DialogTitle id="customer-add-title">Add customer</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="customer-name"
            label="Customer Name"
            fullWidth
            onChange={handleChange}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                handleAdd();
              }
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
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
