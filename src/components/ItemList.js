import React, { Fragment } from "react";
import {ListItem, ListItemText } from '@material-ui/core/';
const ItemList=({name,details})=>{
    return(
        <Fragment>

                <ListItem>
                    <ListItemText
                    primary={name}
                    secondary={details}
                    />
                </ListItem>
        </Fragment>
    )
}
export default  ItemList