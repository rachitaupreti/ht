import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { A } from 'hookrouter';

// HTAppBar - AppBar component for the project

const Pages = [
  { id: 1, name: 'Home', value: '/' },
  { id: 2, name: 'Customer List', value: '/customers' },
  { id: 3, name: 'Customer Add', value: '/customeradd' }
];

export default function HTAppBar() {
  const makeButton = (page) => {
    return(
      <Button color="inherit" key={page.id} href={page.value} component={A}>
        {page.name}
      </Button>
    );
  };
  const pages = Pages.map(
    page => makeButton(page)
  );

  // We create a Button for each page we have and add an onClick function
  // which calls the setPage function we passed to the GlobalContext from App.jsx
  return(
    <div>
      <AppBar position="static">
        <Toolbar>
          {pages}
        </Toolbar>
      </AppBar>
    </div>
  );
}
