export const initialState = {
    basket   :[],
    user     : null,
    shippingData :[],
    };
    export const actionTypes={
        ADD_TO_BASKET:"ADD_TO_BASKET",
        REMOVE_ITEM:"REMOVE_ITEM",
        EMPTY_BASKET:"EMPTY_BASKET",
        SET_USER:"SET_USER",
        SET_SHIPPINGDATA:"SET_SHIPPINGDATA",
          }

const reducer =(state,action)=>{
        console.log(action);
    switch(action.type){
      case "SET_SHIPPINGDATA":
      return {
        ...state,
        shippingData : action.shippingData,
      };  
      default  : 
      return state;
    }
}
export default reducer;



