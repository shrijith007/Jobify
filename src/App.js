import React from "react";
import { Grid,ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./components/Header"
import Searchbar from "./components/Searchbar"
import Jobcard from "./components/Jobcard/Jobcard";
import axios from "axios";
import {useState } from "react";

export default() => {
  const [jobs,setJobs]=useState(null)
  const sendrequest=async(q, l, rbc)=>{
    
    try{ 
        const response= await axios.get("http://127.0.0.1:5000/job", { params:{q,l,rbc}})
        console.log(response)
       setJobs(response.data) 
      
    }

    catch (error){
        console.log("error:",error)
    }
   
}


return <ThemeProvider theme={theme}>
  <Header/>
 <Grid container justify="center">
   <Grid  item xs={10}>
<Searchbar sendrequest={sendrequest}/>
{jobs && <Jobcard jobs={jobs} />}
   </Grid>
 </Grid>

  


  </ThemeProvider> 
};
