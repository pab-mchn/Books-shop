import React from "https://esm.sh/react-dom@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"
import styled from "@emotion/styled";
import { Button,  Paper, TextField, Typography } from "@mui/material";
import Icon from '@mui/material/Icon';
import { Box } from "@mui/system"; 
import { useState } from "react";
import LoadingButton from "@mui/material/Button"; 
import { useFormContext, Controller } from "react-hook-form";
import {useForm} from "react-hook-form"


const   Material = () => {
  const API_WEATHER =`https://api.weatherapi.com/v1/current.json?key=3c3e0b81550e45fd84f114857231412&lang=es&q=`;
  
  const Img =styled("img")({
     width :200,
     height : "100%",
     objectFit: "cover",
     objectPosition: "center",
  })

  const {register,handleSubmit} = useForm();
  {/*const onSubmite = (data)=>console.log(data)*/}

  const [city, setCity]     = useState("");
  const [loading, setLoading]=useState(true);
  const [error, setError]=useState({
    error : false ,
    message :"",
  });
  const [weather , setWeather]=useState({
    city:"",
    country:"",
    temp_c:"",
    condition:"",
    icon:"",
    conditionText:"",
    last_updated:"",
  });
  
  const onSubmit = async(e) => {
    e.preventDefault();
    console.log("submit del prevent default carlos");
    setLoading(true);
    setError({
      error:false ,
      message:"",
    });
        try {
          if(!city.trim()) throw {message: "el campo es necesario"};
    
    const response  = await fetch(`${API_WEATHER}${city}`);
    const data = await response.json();
    
    if(data.error) throw {message:data.error.message};
     setWeather({
      city:data.location.name,
      country:data.location.country,
      temp:data.current.temp_c,
      condition:data.current.condition.code,
      icon: data.current.condition.icon,
      conditionText:data.current.condition.text,
      last_updated:data.current.last_updated,

     })
    
        }catch (error){
      console.log(error)
    }finally {
      setLoading(false);
    }
  }
  <div id="app">Nuevo</div>
     
    
  return (
    <>
     <h1>  Material UI by Carlos Julio</h1>
    <Button variant="text">Text</Button>
     <Button variant="contained">contained</Button> 
    <Button variant="contained">Hello World</Button>
       
       <Button variant="outlined" color="secondary">
         AB
       </Button>  
       <Button size="large" variant="contained" color="warning" >Primary</Button>

        <Button disabled>Disabled</Button>
        <Button href="https://google.com">Link</Button>

    <container>
    <Box sx={{border :4,
       p:5, 
       borderColor: "peru",
        bgcolor:"#000" , 
        color:"blue",
      borderRadius : 8}}
        >
      <h3>this is a Box</h3>
    </Box>
   
    <Typography>

</Typography>
    

    <Typography variant="h3" component="h1" align="center">
   weather App
    </Typography>
    <Box sx={{display:"grid", gap:2}} 
              component ="form"
              autoComplete="off"
              onSubmit={onSubmit}>
                <TextField id ="city" 
                  label="Ciudad"
                  variant="outlined"
                  size="small"
                  required 
                  fullWidth  
                  value={city} 
                  onChange={(e)=>setCity(e.target.value)}
                  error={error.error}
                  helperText={error.message}
                  >
                     </TextField>
      <LoadingButton
        Type="submit"
        variant="contained"
        loading={loading}
        loadingIndicator="...ya casi terminamos"
      > Buscar 
      </LoadingButton>
      </Box>
      {weather.city && (
<Box
  sx={{
    mt:2,
    display:"grid",
    gap:2,
    textAlign:"center",
  }} >
    <Typography variant="h4" component="h2">
      {weather.city}, {weather.country}
    </Typography>
    <Box 
       component="img"
       alt={weather.conditionText}
       src={weather.icon}
       sx={{margin : "0 auto"}} />
       <Typography variant="h5" component="h3">
        {weather.temp} °C
       </Typography>
       <Typography variant="h6" component="h4">
        {weather.conditionText}
       </Typography>
       </Box>



      )}
      <Typography TextAlign="center" sx={{mt:2, fontSize:"14px"}} >
        Powered by Computadorescol:{""}
        <a 
    href="http://weatherapi.com"
    title="WEATHER API"
        >
           WeatherApi.com
        </a>
       
      </Typography>
      <form >
      <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">animal</option>
        <option value="trans">lesbi</option>
      </select>
      <input type="submit" />
    </form>
    </container>
    


 </>       )
   } 

export default   Material;
