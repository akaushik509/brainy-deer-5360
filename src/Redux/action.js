import * as types from "./action.type";
import axios from "axios"
 const getProductRequest = () => {
  return {
    type: types.GET_USER_REQUEST,
  };
};

 const getProductSuccess = (payload) => {
  return {
    type: types.GET_USER_SUCCESS,
    payload,
  };
};

 const getProductFailure = () => {
  return {
    type: types.GET_USER_FAILURE,
  };
};

export const  getProducts = (params)=> (dispatch) =>{

 dispatch(getProductRequest());
return axios.get(`https://product-data.onrender.com/mens`,  params).then((res)=>{
    // console.log(res)
    dispatch(getProductSuccess(res.data))
 }).catch((e)=>{
    dispatch(getProductFailure())
 })

}