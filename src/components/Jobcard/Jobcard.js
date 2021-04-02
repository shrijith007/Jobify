import React from "react";
import {Box,Grid,Typography,Button,makeStyles} from "@material-ui/core";

const usestyles=makeStyles((theme)=>({
    wrapper:{
        border:"1px solid #e8e8e8",
        backgroundColor:"white",
        cursor:"pointer",
        transition:".3s",
        "&:hover":{
            boxShadow:"0px 5px 25px rgba(0,0,0.1)"
            ,borderLeft:"6px solid #4D64E4",
        },
    },
    Title:{
        fontSize:"13.5px",
        backgroundColor:theme.palette.primary.main,
        padding:theme.spacing(0.75),
        borderRadius:"5px",
        display:"inline-block",
        fontWeight:600,
    },
    LocName:{
        fontSize:"13.5px",
        backgroundColor:theme.palette.primary.main,
        padding:theme.spacing(0.75),
        borderRadius:"5px",
        display:"inline-block",
        fontWeight:600,
    },
    descriitpion:{
        margin:theme.spacing(0.5),
        padding:theme.spacing(0.75),
        fontSize:"14.5px",
        borderRadius:"5px",
        transition:".3s",
        cursor:"pointer",
        fontWeight:600,
        backgroundColor:theme.palette.primary.main,
        color:"#fff",
        display:"inline-block",
    },
}));

export default props=>{
    const classes=usestyles();
    return(
        <div>
    {
        props.jobs.map(job=>{
        return(
            <Box p={3}  margin="10px" className={classes.wrapper}>
            <Grid container alignItems="center">
                <Grid item xs >
                    <Typography className={classes.Title}>{job.Title}</Typography>
                </Grid>
                <Grid p={1}>
                    <Typography className={classes.LocName}>{job.source} </Typography>
                </Grid>
                <Grid item xs>
                <Typography className={classes.descriitpion}>{job.description}</Typography>
                
                </Grid>
                
                <Grid>
                <Button  href={job.link} variant="outlined"> Apply </Button>
                </Grid>
 


            </Grid>
        </Box>    
        )
    })}    
 </div>       
    )
}