import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Products, Cart } from './components';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route>
            <Products />
          </Route>
          <Route>
            <Cart />
          </Route>
        </Switch>


      </Router>
    </>
  );
}

export default App;
