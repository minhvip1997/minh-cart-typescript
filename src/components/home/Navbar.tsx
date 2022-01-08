import React from 'react';
import {
    Link, NavLink
} from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import  './Navbar.css';

function Navbar() {
    return (
        <div className='topnav'>
        <NavLink to="/" activeClassName="active" exact={true}>
            Home
        </NavLink>
        <NavLink to="/product" activeClassName="active" >
            Product
        </NavLink>
        <NavLink to="/cart" activeClassName="active" id="cart" className="cis-cart">
        <Badge color="secondary" badgeContent={1}>
          <ShoppingCartIcon />
        </Badge>
        </NavLink>
        </div>
    );
}

export default Navbar;