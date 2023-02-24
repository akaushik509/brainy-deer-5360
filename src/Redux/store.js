import { legacy_createStore, combineReducers, applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import { CartReducer } from "./Cart/Cart.reducer";
import {reducer} from "./reducer"

const rootReducer = combineReducers({
    products:reducer,
  cart: CartReducer,
});

const composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = legacy_createStore(rootReducer, composer(applyMiddleware(thunk)));



// export const store=legacy_createStore(rootReducer,composer(applyMiddleware(thunk)))