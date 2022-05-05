import React, { Fragment } from "react";

import { Grid,Button,TextField } from '@material-ui/core/';


const ContatoPage=()=>{
    return(
            <Fragment>
                <Grid container direction="row" xs={12}>
                    <TextField id="name" label="Name" fullWidth/>
                    <TextField id="message" label="Message" fullWidth/>
                </Grid>
                <Button variant="contained" color="primary">
                    Sent
                </Button>
            </Fragment>
        )

}

export default ContatoPage