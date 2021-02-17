import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/BP-Logo.png';
import useStyles from './styles';

const Navbar = ({totalItems}) => {
  const classes = useStyles();
  const location = useLocation();

  if(location.pathname==="/") {}

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="commerce.js" height="25px" className={classes.image} /> Bio-Packaging
          </Typography>
          <div className={classes.grow} />
          <Typography component={Link} to="/About" variant="h8" className={classes.navLink} color="inherit">
            About Us
          </Typography>
          {location.pathname==="/cart"? null : (
            <div className={classes.button}>  
            <IconButton component={Link} to="/cart" aria-label="Show cart items" style={{ color: "white"}} >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;