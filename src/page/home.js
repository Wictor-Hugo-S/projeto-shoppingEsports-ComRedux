
import React, { Fragment } from "react";
// import { connect } from "react-redux";
import { useSelector } from "react-redux";

import {  Paper, Grid, Typography, Button, TextField, List ,makeStyles } from '@material-ui/core/';

import ItemList from "../components/ItemList";
import Card from "../components/Card";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: '5px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
  }));

//HOMEPage({products}) isso usando CONNECT
const HomePage=()=>{
    const products=useSelector(state=>state.products)
    const classes = useStyles();
    const categorys= products.map(
        category=>{
            const container={
                id:category.id_categorys,
                name:category.name_categorys
            }
         //container['id]=id_category
            return container
        }
    )
     //stringify converte o json e uma string
    const category= categorys.map(JSON.stringify)
    .filter((item,index,array)=>{
        return array.indexOf(item,index + 1)=== -1
    })
    .map(JSON.parse)
    //converte o array de string para json
    
    const arrayCategorys=categorys.map(item=>item.name)
    let count={};

    arrayCategorys.forEach(item=>{
       
        count[item]= ( count[item] ? count[item] + 1 : 1)
    })
    

   
 
    
    return(
        <Fragment>
                    <Grid container spacing={3} className={classes.root}>
                        <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <Typography variant='h5'>
                            Categorias
                            </Typography>
                            <List>
                               
                                    {category.map((item,index)=>{
                                        return(
                                            <ItemList key={item.id}
                                            name={item.name} 
                                            details={count[item.name]}
                                            >
                                            </ItemList>
                                        )
                                    })}

                              
                            </List>
                        </Paper>
                        </Grid>
                        <Grid container xs={9} spacing={3} className={classes.root}>
                           {products.map((item,index)=>{
                               return(
                             
                                   <Card 
                                        key={item.id_product} 
                                        // id={item.id_product}
                                        // name={item.name_product}
                                        // image={item.image}
                                        products={item}>

                                        {item.name_product}
                                        </Card>

                                  
                               )
                           })}
                       
                         </Grid>
                    </Grid>
                
            

        </Fragment>
    )
                        }



    export default  HomePage


// //usando CONNECT  DO REDUX
// // }
// // const mapStateToProps=state=>({
// //     products:state.products
// // })
//  //usando connect
// // connect(mapStateToProps)(HomePage)
