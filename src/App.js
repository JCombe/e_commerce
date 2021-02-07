import React, { useState, useEffect } from 'react';
import { commerce } from "./lib/commerce.js"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Products, Cart } from './components';

function App() {

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);

  }

  useEffect(() => {
    fetchProducts()
  }, [])

  console.log(products)

  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route>
            <Products products={products} />
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
