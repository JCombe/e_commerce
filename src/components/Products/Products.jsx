import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';
import { Modal } from '@material-ui/core';
import ProductInfo from './Product/ProductInfo/ProductInfo';

const Products = ({products, onAddToCart}) => {
  const [open, setOpen] = useState(false)
  const [productComp, setProductComp] = useState({})
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    if (!products.length) return <p>Loading...</p>;


  return (
<>
    <ProductInfo productComp={productComp} />


    <main className={classes.content}>
     <div className={classes.toolbar} />
     <Grid container justify="center" spacing={4}>
     { products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
          <Product product={product} setProductComp={setProductComp} onAddToCart={onAddToCart} setOpen={setOpen}/>
        </Grid>
      ))}
      </Grid>
    </main>
    </>
  );
};

export default Products;