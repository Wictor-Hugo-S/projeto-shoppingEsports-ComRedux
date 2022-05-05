
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import {  Grid, Typography,Button } from '@material-ui/core/';

import Cart from "./Cart";
const Header=()=>{
    return(
        <Fragment>

            <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
                <Typography variant='h3'>
                 <Link style={{textDecoration:"none",color:'black'}} to="/">Dio Shopping</Link>   
                
                </Typography>
                <Link style={{textDecoration:"none"}} to="/">
                    <Button color="primary">Home</Button>
                </Link>
                <Link style={{textDecoration:"none"}} to="/contato">
                <Button color="primary">Contato</Button>
                </Link>
               
                <Cart/>
            </Grid>

        </Fragment>
    )
}
export default Header