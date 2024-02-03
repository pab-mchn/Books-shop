import {  Button, Grid,  Typography } from "@mui/material";
import { useForm , useFormContext, FormProvider} from "react-hook-form";
import AddressInput from "./AddressInput";
import { Link } from "react-router-dom";
import { useState } from "react";
import{ useStateValue} from "../../StateProvider";
import { actionTypes } from "../../reducer";


const AddressForm = () => {
const methods = useForm();

  return (
    <>
    <Typography variant="h6" gutterBottom>
      Shipping Address titulo 
     </Typography>    
    <FormProvider {...methods}>

    <form  onSubmit={methods.handleSubmit(data=>{
        console.log(data)
      })}> 
    <Grid container spacing={2}>
      
    <AddressInput required name="firstName" label="First Name"  />
    
     
     <Button component={Link} to ="/Cart">Back</Button>
      <Button type="submit" variant="contained" color="primary" >Next</Button>
      </Grid>  
    </form>
    </FormProvider>
        </>
    )
}
export default AddressForm 