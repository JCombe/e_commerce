import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';
import { Modal } from '@material-ui/core';
import ProductInfo from './Product/ProductInfo/ProductInfo';
import "./Products.css"

const Products = ({products, onAddToCart }) => {
  const [opened, setOpened] = useState(false)

  const [productComp, setProductComp] = useState({})
  const classes = useStyles();

    if (!products.length) return <p>Loading...</p>;


  return (
  <>
  { opened &&
    <div className="modalBG" onClick={() => setOpened(false)}>
      <ProductInfo productComp={productComp} onClose={() => setOpened(false)} />
    </div>
  }
    <main className={classes.content}>
     <div className={classes.toolbar} />
     <Grid container justify="center" spacing={4}>
     { products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
          <Product product={product} setProductComp={setProductComp} onAddToCart={onAddToCart} setOpened={setOpened}/>
        </Grid>
      ))}
      </Grid>
    </main>
  </>
  );
};

export default Products;