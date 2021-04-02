import React from "react";
import {Box,Typography,Grid} from "@material-ui/core"

export default props =>(
<Box py={5} bgcolor="secondary.main" color="white">
    <Grid container justify="center" >
    <Grid item xs={10}>   
    <Box diisplay="flex" justifyContent="space-between">
    <Typography variant="h4" color="primary">
        Jobify
    </Typography>
    </Box>
    </Grid>

    </Grid>
    
</Box>
);