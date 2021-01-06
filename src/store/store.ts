import {createStore, applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import {productsReducer} from "./productsReducer";
import {cartReducer} from "./cartReducer";

const reducers = combineReducers({
    products: productsReducer,
    cart: cartReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type StateType = ReturnType<typeof reducers>

// @ts-ignore
window.__store__ = store