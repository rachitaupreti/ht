import React from 'react';
import HomePage from './HomePage';
import CustomerList from './CustomerList';
import CustomerAdd from './CustomerAdd';
import HTAppBar from './HTAppBar';
import Container from '@material-ui/core/Container';
import { useRoutes } from 'hookrouter';

// our route table
const routes = {
  '/': () => <HomePage />,
  '/customers': () => <CustomerList />,
  '/customeradd': () => <CustomerAdd />
};

// The main App.

export default function App() {
  const routeResult = useRoutes(routes);

  return(
    <div>
      <HTAppBar />
      <br />
      <Container maxWidth="md">
        {routeResult}
      </Container>
    </div>
  );
}
