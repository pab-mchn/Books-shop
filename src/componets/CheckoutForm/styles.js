import {makeStyles} from "@mui/material/styles";


export default makeStyles((theme)=>({
appBar :  {
  position : "relative",

},
layout : {
    width : "auto",
    marginLeft : theme.spacing(2),
    marginRight : theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2)*2)]:{
        width : 600,
        marginLeft : "auto",
        marginRight : "auto",
    },

},
paper : {
    marginTop : theme.spacing(3),
    marginBottom : theme.spacing(3),
    padding : theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3)*2)]: {
        marginTop : theme.spacing(6),
    }

}



}

))