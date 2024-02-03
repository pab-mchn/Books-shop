import { createContext, useState } from "react";
import { useFormContext } from "react-hook-form";
    

export const formContext = createContext();

const FormProvider = ({children}) => {
  const {control} = useState();
  
    return ( 
      <>
      
<formContext.Provider value ={control }>
  {children}
</formContext.Provider>
  </>
  )
}
export default FormProvider;