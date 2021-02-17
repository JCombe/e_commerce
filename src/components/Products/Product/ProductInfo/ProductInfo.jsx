import React from 'react'
import {  Typography, IconButton} from '@material-ui/core';
import "./ProductInfo.css"
import CancelIcon from '@material-ui/icons/Cancel';


const ProductInfo = ({productComp, onClose}) => {

    


    return (
        <div className="modalContent">
              <CancelIcon className="cancelModalBtn" onClick={() => onClose()}/>
            
          <Typography gutterBottom variant="h5" component="h2">
            {productComp.name}
          </Typography>
          
          <Typography gutterBottom variant="h6" component="h2">
            Price: ${productComp.price.formatted_with_code}
          </Typography>
        <Typography>Units/package: 500</Typography>
        <Typography>Price/unit: 0,15 €</Typography>
        <div className="description" dangerouslySetInnerHTML={{ __html: productComp.description }}/>
        </div>
    )
}

export default ProductInfo
