import React from 'react'
import {  Typography, IconButton} from '@material-ui/core';
import "./ProductInfo.css"

const ProductInfo = ({productComp}) => {

    


    return (
        <div className="modalContent">
          <Typography gutterBottom variant="h5" component="h2">
            {productComp.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            Price: 
          </Typography>
        <Typography>Units/package: 500</Typography>
        <Typography>Price/unit: 0,15 €</Typography>
        <Typography />

        </div>
    )
}

export default ProductInfo
