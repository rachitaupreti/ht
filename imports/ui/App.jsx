import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
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
    <Hello />
    <Info />
  </div>
);

export default App;
