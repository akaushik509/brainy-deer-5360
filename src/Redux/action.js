  //  https://product-data.onrender.com/mens //
import * as types from "./action.type";
import axios from "axios";
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

export const moveToCart = (payload) => {
  return {
    type: types.ADD_TO_CART,
    payload,
  };
};

export const removeToCart = () => {
  return {
    type: types.REMOVE_TO_CART,
  };
};

export const moveToWishlist = (payload) => {
  return {
    type: types.ADD_TO_WISHLIST,
    payload,
  };
};



export const getProducts = (params) => (dispatch) => {
  dispatch(getProductRequest());
  return axios
    .get(`https://product-data.onrender.com/mens`, params)
    .then((res) => {
      // console.log(res)
      dispatch(getProductSuccess(res.data));
    })
    .catch((e) => {
      dispatch(getProductFailure());
    });
};

//https://grumpy-lingerie-foal.cyclic.app/prod/search?type=Womens
// https://grumpy-lingerie-foal.cyclic.app/prod
 
 export const getWomens = (params) => (dispatch) => {
    dispatch(getProductRequest());
    return axios
      .get(`https://product-data.onrender.com/womens`, params)
      .then((res) => {
        // console.log(res)
        dispatch(getProductSuccess(res.data));
      })
      .catch((e) => {
        dispatch(getProductFailure());
      });
  };

export const getMobile = (params) => (dispatch) => {
  dispatch(getProductRequest());
  return axios
    .get(`https://product-data.onrender.com/covers`, params)
    .then((res) => {
      // console.log(res)
      dispatch(getProductSuccess(res.data));
    })
    .catch((e) => {
      dispatch(getProductFailure());
    });
};

export const addToCart = (params) => (dispatch) => {
  return axios
    .post(`https://product-data.onrender.com/cart`, params)
    .then((res) => {
      console.log(res)
      dispatch(moveToCart(res.data));
    })
    .catch((e) => {
      console.log(e);
    });
};



export const deleteToCart = (id) => (dispatch) => {
  return axios
    .delete(`https://product-data.onrender.com/cart${id}`)
    .then((res) => {
      dispatch(removeToCart(res.data));
    })
    .catch((e) => {
      console.log(e);
    });
};



export const addToWishlist = (params) => (dispatch) => {
  return axios
    .post(`https://product-data.onrender.com/wishlist`, params)
    .then((res) => {
      dispatch(addToWishlist(res.data));
    })
    .catch((e) => {
      console.log(e);
    });
};