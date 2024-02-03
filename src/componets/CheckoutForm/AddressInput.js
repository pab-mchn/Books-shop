import { Grid,  Checkbox, Input } from "@mui/material";
import {useForm , Controller, useFormContext  } from "react-hook-form";
import  {TextField} from "@mui/material";
import {Box} from "@mui/material"

const AddressInput = ({name, label, required}) => {
  const {control} = useForm();
  
    
  return (
    <>      
  
    <Grid item xs={12} sm={6} >
                     Este  input de addressinput
    
        <Controller
        name="first Name"
        control={control}
        render={({ field }) =>  <TextField  {...field}  label="first name " placeholder="required"/>}
        
      />
      <Controller
        name="Last Name"
        control={control}
        render={({ field }) => <Input {...field} label ="Last name" />}
      />
     <Controller
        name="Address"
        control={control}
        render={({ field }) => <TextField {...field} label="address" />}
      />
      <Controller
        name="City"
        control={control}
        render={({ field }) => <TextField {...field} label = "City"/>}
      /> 
       <Controller
        name="email"
        control={control}
        render={({ field }) => <TextField {...field} label="email" />}
      /> 
  <Controller
        name="Post Code"
        control={control}
        render={({ field }) => <TextField {...field} label="PostCode" />}
      />
    </Grid>
    
   
    </>
  )
}
export default AddressInput