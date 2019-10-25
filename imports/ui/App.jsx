import React from 'react';
import CustomerList from './CustomerList';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const App = () => (
  <div>
    <AppBar position="static">
		<Toolbar>
			Welcome to Meteor and asiakas-tunnit!
		</Toolbar>
	</AppBar>
	<br />
    <CustomerList />
  </div>
);

export default App;
