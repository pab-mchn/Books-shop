import { Grid, Paper, TextField , Checkbox, Box, Input, Button} from '@mui/material';
import { useForm, Controller, FormProvider } from "react-hook-form";
import AddressInput from './CheckoutForm/AddressInput';
import { ClassNames } from '@emotion/react';


const Exform = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmite = (data) => {
        console.log(data);
      };
      const {control} = useForm();
      const ariaLabel = { 'aria-label': 'description' };

  return (
        <>
       <div className="App">
      <Controller
      name="checkbox"
      control={control}
      render={(field)=> <Checkbox{...field}   />}
      rules={{required :true}}
      />
      <form onSubmit={handleSubmit(onSubmite)}>
       
        <div className="form-control">
          <label>Email</label>
          <input type="text" name="email" {...register("email")} />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" name="password" {...register("password")} />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login uno</button>
        </div>
      </form>
    </div>
    <Paper >
     
    <div> 
      <Grid  item  xs={12} sm={6} >
      Este  input en ExForm.js
 <form onSubmit={(data=>{
  console.log(data)
})}>
 <AddressInput required name="firstName" label="first Name" /> 
  <Button type="submit">ingrese datos</Button>
  </form>     

</Grid>
<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >  
    <TextField label="Filled success" variant="filled" color="success" focused />
    <Input defaultValue="hello world el 1er input" inputProps={ariaLabel} />
    <Input defaultValue="Hello world el 2do input" inputProps={ariaLabel} />
    <Input defaultValue="Hello world el 3er input" inputProps={ariaLabel} />
    </Box> 
</div>   



</Paper>

</>
  )
}
export default Exform

