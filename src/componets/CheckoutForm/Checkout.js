import {   Box, Button, Grid, Paper, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useState } from "react";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import AddressInput from "./AddressInput";
import { FormProvider } from "react-hook-form";
import Review from "./Review"


const   Checkout = () => {
  const [activeStep, setActivestep] = useState();     
  const steps = ["shipping address" , "Payment details"];

  
  const nextStep=()=>setActivestep[(prevActivestep)=>prevActivestep + 1];
  const backStep=()=>setActivestep[(prevActivestep)=>prevActivestep - 1];

  const Form = () => activeStep === 0 ? <PaymentForm /> :  <AddressForm /> 
  return (
    <>
     <Paper >
        <Typography component="h1" align="center">
        <h2>  CheckOut</h2>
        </Typography>
       <Stepper activeStep={0}>
       {steps.map(step => (
        <Step key = {step}>
        <StepLabel >{step}</StepLabel>
        </Step>
        ))}
       </Stepper> 
        <Form/>
        
      </Paper>
     
    </>
  )
}

export default   Checkout
