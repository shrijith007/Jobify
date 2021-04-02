import React from "react";
import {Box,Button, Grid, TextField} from "@material-ui/core";
import { Component } from "react";


class Searchbar extends Component{
    
    state = {
             job:"",
             location:"",
             company:""
        }
    
    
    handlingjob=(event)=>{
        this.setState({
            job:event.target.value
        })}
        
    handlinglocation=(event)=>{
        this.setState({
            location:event.target.value
        })}

    handlingcompany=(event)=>{
        this.setState({
            company:event.target.value
        })
    }

    requestHandler = () => {
        this.props.sendrequest(this.state.job, this.state.location, this.state.company)
    }

    
            

    render(){
        return(
            <Box py={5} display="flex" width="100" height="45px" margin="20px"  borderRadius="5px" boxShadow="0px 1px 5px rgba(0,0,0.1)">
        <Grid 
        item xs={10}
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        >
    
         <TextField  onChange={this.handlingjob} value={this.state.job}  label="job" variant="filled"></TextField>
            
        <TextField   value={this.state.location} onChange={this.handlinglocation} label="Location" variant="filled"></TextField>
    
        <TextField  value={this.state.company} onChange={this.handlingcompany} label="Company" variant="filled" color="blue"></TextField>
        <Button  onClick={this.requestHandler} variant="contained" color="primary" disableElevation>
            Search
        </Button>
    
        </Grid>
        </Box>
    )
}
}    
export default Searchbar