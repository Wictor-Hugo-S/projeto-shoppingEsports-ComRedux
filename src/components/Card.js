import React, { Fragment } from "react";
import { useSelector,useDispatch } from "react-redux";
import {  Paper, Grid, Typography, Button,makeStyles} from '@material-ui/core/';
import cardActions from './store/actions/cart'

const useStyles = makeStyles((theme) => ({
    
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
  }));

const Card=({products,children,})=>{
    const cart=useSelector(state=>state.cart.value)
    const dispatch=useDispatch()

    const classes=useStyles()
    let quantidade=cart
 



    return(
        <Fragment>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                            <Grid container direction='column'>
                                <Grid item>
                                    <img width="140px" src={products.image} alt={products.name_product}/>
                                    <Typography variant='h6'>
                                        {children}
                                    </Typography>
                                     <Typography variant='subtitle1'>
                                         R$ {products.price.toFixed(2)}
                                    </Typography>
                                </Grid>
                                <Button
                                 variant="contained"
                                   onClick={()=>dispatch(cardActions.handleAdicionar(cart,products))}
                                  >
                                     Adicionar
                                     </Button>
                            </Grid>
                        </Paper>
                    </Grid>

        </Fragment>
    )
}
export default Card