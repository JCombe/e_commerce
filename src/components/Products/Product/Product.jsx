import React, { useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart, InfoRounded } from '@material-ui/icons';
import ProductInfo from "./ProductInfo/ProductInfo"

import useStyles from './styles';

const Product = ({ product, onAddToCart, setOpened, setProductComp }) => {

  const classes = useStyles();

  const wrapperFunction = () => {

    setProductComp(product)
    setOpened(true)
    
}

  return (
  
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            Price: ${product.price.formatted_with_code}
          </Typography>
        <Typography>Units/package: 500</Typography>
        <Typography>Price/unit: 0,15 €</Typography>
        {/* <Typography dangerouslySetInnerHTML={{ __html: product.description }} gutterBottom style={{fontSize: "10px"}} /> */}
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Info" onClick={() => wrapperFunction()}>
          <InfoRounded/>
        </IconButton>
        <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;